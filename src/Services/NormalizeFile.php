<?php

namespace Stepanenko3\NovaFilemanager\Services;

use Stepanenko3\NovaFilemanager\Traits\FileFunctions;
use Carbon\Carbon;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use RarArchive;
use SplFileInfo;
use ZipArchive;

class NormalizeFile
{
    use FileFunctions;

    protected FilesystemAdapter $storage;

    protected mixed $file;

    protected string $storagePath;

    protected string $path;

    protected bool $withExtras = false;

    public function __construct(
        FilesystemAdapter $storage,
        string $path,
        bool $withExtras = false,
    ) {
        $this->storage = $storage;
        $this->storagePath = $path;
        $this->path = $this->storage->path($path);
        $this->withExtras = $withExtras;

        $this->file = new SplFileInfo($this->path);
    }

    public function toArray(): array
    {
        $name =  $this->file->getFilename();

        $mime = $this->getCorrectMimeFileType(
            $this->file->getExtension(),
            $this->storage->mimeType($this->storagePath),
        );

        $size = $this->getFileSize();

        $lastModified = $this->modificationDate();

        $mimeType = $this->getFileType($mime);

        $data = collect([
            'id' => $this->generateId($this->storagePath),
            'name' => $name,
            'mime' => $mime,
            'mimeType' => $mimeType,
            'type' => filetype($this->path),
            'path' => $this->storagePath,
            'fullPath' => $this->path,
            'size' => $size,
            'sizeText' => $size ? formatMemory($size) : 0,
            'url' => $this->cleanSlashes($this->storage->url($this->storagePath)),
            'ext' => $this->file->getExtension(),
            'lastModified' => $lastModified,
            'lastModifiedText' => $lastModified ? Carbon::createFromTimestamp($lastModified)->format('Y-m-d H:i:s') : null,
            'visibility' => $this->storage->getVisibility($this->storagePath),
        ]);

        $data = $this->setDataByType($data);

        if ($this->withExtras) {
            $data = $this->setExtras($data);
        }

        return $data->toArray();
    }

    private function setDataByType(Collection $data): Collection
    {
        switch ($data['mimeType']) {
            case 'image':
                $data->put('dimensions', $this->getDimensions((string) $data['fullPath'], (string) $data['mimeType']));
                break;
        }

        return $data;
    }

    private function setExtras(Collection $data): Collection
    {
        switch ($data['mimeType']) {
            case 'text':
                if ($data['size']) {
                    if ($data['size'] < 350000) {
                        $data->put('source', $this->storage->get($data['path']));
                    } else {
                        $data->put('source', __('Only files below 350 Kb will be shown'));
                    }
                }
                break;
        }

        return $data;
    }

    public function getFileSize(): int|bool
    {
        try {
            return ($this->file->getSize() != 0) ? $this->file->getSize() : 0;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * @param $timestamp
     */
    public function modificationDate(): int|bool
    {
        try {
            return $this->file->getMTime();
        } catch (\Exception $e) {
            return false;
        }
    }

    // /**
    //  * Read zip files.
    //  *
    //  * @return mixed
    //  */
    // private function readZip($path)
    // {
    //     $zip = new ZipArchive();
    //     $zip->open($this->storage->path($path));
    //     $contents = [];

    //     for ($i = 0; $i < $zip->numFiles; $i++) {
    //         $stat = $zip->statIndex($i);
    //         $contents[$stat['name']] = [
    //             'name' => $stat['name'],
    //             'size' => $stat['size'],
    //         ];
    //         // $contents[$stat['name']] = $stat['name'];
    //     }

    //     return $this->buildTree($contents);
    // }

    // /**
    //  * Read rar files.
    //  *
    //  * @return mixed
    //  */
    // private function readRar()
    // {
    //     $zip = new RarArchive();
    //     $zip->open($this->storage->path($this->storagePath));
    //     $contents = [];

    //     for ($i = 0; $i < $zip->numFiles; $i++) {
    //         $stat = $zip->statIndex($i);
    //         $contents[$stat['name']] = [
    //             'name' => $stat['name'],
    //             'size' => $stat['size'],
    //         ];
    //         // $contents[$stat['name']] = $stat['name'];
    //     }

    //     return $this->buildTree($contents);
    // }

    // /**
    //  * @param $pathList
    //  * @return mixed
    //  */
    // private function buildTree($pathList)
    // {
    //     $data = [];
    //     foreach ($pathList as $path => $info) {
    //         $list = explode('/', trim($path, '/'));
    //         $last_dir = &$data;
    //         foreach ($list as $dir) {
    //             $last_dir = &$last_dir[$dir];
    //         }
    //         // $last_dir['info'] = $info;
    //     }
    //     $keys = $this->arrayKeysRecursive($data);
    //     array_reverse($keys);

    //     return json_encode($keys);
    // }

    // /**
    //  * @param array $array
    //  * @return mixed
    //  */
    // private function arrayKeysRecursive(array $array): array
    // {
    //     foreach ($array as $key => $value) {
    //         if (is_array($value)) {
    //             $index[$key] = $this->arrayKeysRecursive($value);
    //         } else {
    //             $index[] = $key;
    //         }
    //     }

    //     return $index ?? [];
    // }
}
