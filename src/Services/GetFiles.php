<?php

namespace Stepanenko3\NovaFilemanager\Services;

use Illuminate\Support\Str;
use League\Flysystem\StorageAttributes;
use Stepanenko3\NovaFilemanager\Traits\FileFunctions;

trait GetFiles
{
    use FileFunctions;

    /**
     * Cloud disks.
     *
     * @var array
     */
    protected $cloudDisks = [
        's3', 'google', 's3-cached',
    ];

    protected function listContents(string $folder)
    {
        return collect($this->storage->listContents($folder))
            ->map(function (StorageAttributes $attributes) {
                $path = $attributes->path();

                $file = new NormalizeFile(
                    storage: $this->storage,
                    path: $path,
                    withExtras: true,
                );

                return $file->toArray();
            })
            ->toArray();
    }

    /**
     * @param $folder
     * @param $order
     * @param $filter
     */
    public function getFiles($folder, $order, $filter = false)
    {
        $files = collect($this->listContents($folder))
            ->filter(
                fn (array $file) => (!$this->exceptExtensions->contains($file['path']) &&
                    !$this->exceptFolders->contains($file['path']) &&
                    !$this->exceptFiles->contains($file['path'])
                ) || ($file['type'] === 'dir' &&
                    !$this->checkShouldHideFolder($file['path']))
            )
            ->map(function ($file) {
                if ($file['mimeType'] === 'image') {
                    $file['thumb'] = $this->getThumb($file);
                }

                $file['can'] = true;
                $file['loading'] = false;

                return $file;
            });

        if ($filter != false) {
            $files = $this->filterData($files, $filter);
        }

        return $this->orderData($files, $order, config('filemanager.direction', 'asc'));
    }

    /**
     * Filter data by custom type.
     *
     * @param $files
     * @param $filter
     *
     * @return mixed
     */
    public function filterData($files, $filter)
    {
        $folders = $files->where('type', 'dir');
        $items = $files->where('type', 'file');

        $filters = config('filemanager.filters', []);
        if (count($filters) > 0) {
            $filters = array_change_key_case($filters);

            if (isset($filters[$filter])) {
                $filteredExtensions = $filters[$filter];

                $filtered = $items->filter(function ($item) use ($filteredExtensions) {
                    if (in_array($item['ext'], $filteredExtensions)) {
                        return $item;
                    }
                });
            }
        }

        return $folders->merge($filtered);
    }

    /**
     * Order files and folders.
     *
     * @param $files
     * @param $order
     *
     * @return mixed
     */
    public function orderData($files, $order, $direction = 'asc')
    {
        $folders = $files->where('type', 'dir');
        $items = $files->where('type', 'file');

        if ($order == 'size') {
            $folders = $folders->sortByDesc($order);
            $items = $items->sortByDesc($order);
        } else {
            if ($direction == 'asc') {
                // mb_strtolower to fix order by alpha
                $folders = $folders
                    ->sortBy('name')
                    ->sortBy(fn ($item) => mb_strtolower($item[$order]))
                    ->values();

                $items = $items
                    ->sortBy('name')
                    ->sortBy(fn ($item) => mb_strtolower($item[$order]))
                    ->values();
            } else {
                // mb_strtolower to fix order by alpha
                $folders = $folders
                    ->sortByDesc(fn ($item) => mb_strtolower($item[$order]))
                    ->values();

                $items = $items
                    ->sortByDesc(fn ($item) => mb_strtolower($item[$order]))
                    ->values();
            }
        }

        $result = $folders->merge($items);

        return $result;
    }

    /**
     * Set Relative Path.
     *
     * @param $folder
     */
    public function setRelativePath($folder)
    {
        $defaultPath = $this->storage->path('');

        $publicPath = str_replace($defaultPath, '', $folder);

        if ($folder != '/') {
            $this->currentPath = $this->getAppend() . '/' . $publicPath;
        } else {
            $this->currentPath = $this->getAppend() . $publicPath;
        }
    }

    /**
     * Get Append to url.
     *
     * @return mixed|string
     */
    public function getAppend()
    {
        if (in_array(config('filemanager.disk'), $this->cloudDisks)) {
            return '';
        }

        return '/storage';
    }

    /**
     * Return the Type of file.
     *
     * @param $file
     *
     * @return bool|string
     */
    public function getThumb($file, $folder = false)
    {
        $mime = $file['mimeType'];
        $extension = $file['ext'];

        if (Str::contains($mime, 'image') || $extension == 'svg') {
            if (method_exists($this->storage, 'put')) {
                return $this->cleanSlashes($this->storage->url($file['path']));
            }

            return $this->cleanSlashes($folder . '/' . $file['name']);
        }

        return null;
    }

    /**
     * @param $folder
     */
    public function generateParent($folder)
    {
        $paths = collect(explode('/', $folder))->filter();
        $paths->pop();

        if ($paths) {
            $folderPath = $paths->implode('/');

            if ($folderPath == $folder || strlen($folderPath) === 0) {
                $folderPath = '/';
            }

            return [
                'id' => 'folder_back',
                'name' => __('Go up'),
                'mime' => 'dirBack',
                'mimeType' => 'dirBack',
                'type' => 'dir',
                'path' => $this->cleanSlashes($folderPath),
                'fullPath' => $this->cleanSlashes($this->storage->path($folderPath)),
                'size' => 0,
                'sizeText' => 0,
                'url' => $this->cleanSlashes($this->storage->url($folderPath)),
                'ext' => false,
                'lastModified' => false,
                'lastModifiedText' => false,
                'visibility' => 'public',
                'can' => true,
                'loading' => false,
            ];
        }
    }

    /**
     * @param $currentFolder
     */
    public function getPaths($currentFolder)
    {
        $defaultPath = $this->cleanSlashes($this->storage->path(''));
        $currentPath = $this->cleanSlashes($this->storage->path($currentFolder));

        $paths = $currentPath;

        if ($defaultPath != '/') {
            $paths = str_replace($defaultPath, '', $currentPath);
        }

        $paths = collect(explode('/', $paths))->filter();

        $goodPaths = collect([]);

        foreach ($paths as $path) {
            $goodPaths->push(['name' => $path, 'path' => $this->recursivePaths($path, $paths)]);
        }

        return $goodPaths->reverse();
    }

    /**
     * @param $pathCollection
     */
    public function recursivePaths($name, $pathCollection)
    {
        return Str::before($pathCollection->implode('/'), $name) . $name;
    }

    /**
     * Hide folders with .hide file.
     * @param $oath
     */
    private function checkShouldHideFolder($path)
    {
        $filesData = $this->listContents($path);

        $key = array_search('.hide', array_column($filesData, 'name'));

        if ($key === false) {
            return true;
        }

        return false;
    }
}
