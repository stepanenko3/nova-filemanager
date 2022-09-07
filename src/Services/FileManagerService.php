<?php


namespace Stepanenko3\NovaFilemanager\Services;

use Stepanenko3\NovaFilemanager\Contracts\Entity;
use Stepanenko3\NovaFilemanager\Contracts\FilemanagerContract;
use Closure;
use Illuminate\Container\Container;
use Illuminate\Contracts\Filesystem\Filesystem;
use Stepanenko3\LaravelPagination\Pagination;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\Flysystem\UnableToRetrieveMetadata;

class FilemanagerService implements FilemanagerContract
{
    public FileSystem $fileSystem;

    public bool $shouldShowHiddenFiles;

    public array $filterCallbacks = [];

    public function __construct(
        public ?string $disk = null,
        public ?string $path = DIRECTORY_SEPARATOR,
        public int $page = 1,
        public int $perPage = 15,
        public ?string $search = null,
        public ?string $filter = null,
    ) {
        $this->disk ??= config('nova-filemanager.default_disk');

        $this->shouldShowHiddenFiles = config('nova-filemanager.show_hidden_files');

        $this->fileSystem = Storage::disk($this->disk);
    }

    public function disk(string $disk): self
    {
        $this->disk = $disk;

        $this->fileSystem = Storage::disk($this->disk);

        return $this;
    }

    public function path(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function showHiddenFiles(bool $show = true): self
    {
        $this->shouldShowHiddenFiles = $show;

        return $this;
    }

    public function files(
        $filterHidden = true,
        $applySearch = true,
        $applyFilter = true,
    ): Collection
    {
        $this->filterCallbacks = [];

        if ($filterHidden) {
            $this->omitHiddenFilesAndDirectories();
        }

        if ($applySearch) {
            $this->applySearchCallback();
        }

        if ($applyFilter) {
            $this->applyFilterCallback();
        }

        return collect($this->fileSystem->files($this->path))
            ->filter(fn (string $file) => $this->applyFilterCallbacks($file));
    }

    public function omitHiddenFilesAndDirectories(): void
    {
        $this->filterCallbacks[] = $this->shouldShowHiddenFiles
            ? static fn () => true
            : static fn (string $path) => !str($path)->startsWith('.');
    }

    public function applyFilterCallback(): void
    {
        $extensions = config('nova-filemanager.filters.' . $this->filter, []);

        if (empty($this->filter) || empty($extensions)) {
            return;
        }

        $this->filterCallbacks[] = function (string $path) use ($extensions) {
            $ext = pathinfo($path, PATHINFO_EXTENSION);

            return in_array($ext, $extensions);
        };
    }

    public function applySearchCallback(): void
    {
        if (empty($this->search)) {
            return;
        }

        $this->filterCallbacks[] = function (string $path) {
            // split search string into words
            if (!$words = preg_split('/[\s]+/', $this->search)) {
                return true;
            }

            // join words with .* expression
            $words = implode('.*', array_map(fn (string $word) => preg_quote($word, '/'), $words));

            return preg_match("/(.*{$words}.*)/i", $path);
        };
    }

    public function applyFilterCallbacks(string $value): bool
    {
        foreach ($this->filterCallbacks as $callback) {
            if (!$callback($value)) {
                return false;
            }
        }

        return true;
    }

    public function directories(): Collection
    {
        $this->omitHiddenFilesAndDirectories();

        return collect($this->fileSystem->directories($this->path))
            ->filter(fn (string $file) => $this->applyFilterCallbacks($file))
            ->map(fn (string $path) => [
                'id' => Str::random(6),
                'path' => str($path)->start(DIRECTORY_SEPARATOR),
                'name' => pathinfo($path, PATHINFO_BASENAME),
            ])
            ->sortBy('path')
            ->when($this->path && $this->path !== '/', function ($directories) {
                $parts = explode('/', $this->path);
                array_pop($parts);
                $path = implode('/', $parts);

                $directories->prepend([
                    'id' => 'parent',
                    'path' => $path ?: '/',
                    'name' => '../',
                ]);
            })
            ->values();
    }

    public function breadcrumbs(): Collection
    {
        $paths = collect();

        str($this->path)
            ->ltrim(DIRECTORY_SEPARATOR)
            ->explode(DIRECTORY_SEPARATOR)
            ->filter(fn (string $item) => !blank($item))
            ->each(function (string $item) use ($paths) {
                return $paths->push($paths->last() . DIRECTORY_SEPARATOR . $item);
            });

        return $paths->map(fn (string $item) => [
            'id' => Str::random(6),
            'path' => $item,
            'name' => str($item)->afterLast('/'),
            'current' => $item === $this->path,
        ]);
    }

    public function mkdir(string $path): bool
    {
        if (!$this->fileSystem->exists($path)) {
            return $this->fileSystem->makeDirectory($path);
        }

        return false;
    }

    public function rmdir(string $path): bool
    {
        return $this->fileSystem->deleteDirectory($path);
    }

    public function rename(string $oldPath, string $newPath): bool
    {
        return $this->fileSystem->move($oldPath, $newPath);
    }

    public function duplicate(string $path): bool
    {
        if ($this->fileSystem->exists($path)) {
            $ext = pathinfo($path, PATHINFO_EXTENSION);
            $basename = pathinfo($path, PATHINFO_BASENAME);
            $newPath = str_replace($basename, '', $path);

            if (false) { // Check is directory
                //
            } else {
                if (preg_match('/(^.*?)+(?:\((\d+)\))?(\.(?:\w){0,10}$)/si', $basename, $match)) {
                    $matchName = $match[1];
                    $offset = (int) $match[2];
                    $newName = $matchName . '.' . $ext;

                    while ($this->fileSystem->exists($newPath . $newName)) {
                        $offset = $offset + 1;
                        $newName = $matchName . '(' . $offset . ').' . $ext;
                    }
                } else {
                    $newName = $basename;
                }

                if ($this->fileSystem->copy($path, $newPath . $newName)) {
                    return true;
                }
            }
        }

        return false;
    }

    public function delete(string $path): bool
    {
        return $this->fileSystem->delete($path);
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function paginate(Collection $data): Pagination
    {
        return Container::getInstance()
            ->makeWith(Pagination::class, [
                'items' => $data
                    ->forPage($this->page, $this->perPage)
                    ->values()
                    ->map($this->mapIntoEntity())
                    ->toArray(),
                'total' => $data->count(),
                'perPage' => $this->perPage,
                'currentPage' => Paginator::resolveCurrentPage(),
            ]);
    }

    public function forPage(int $page, int $perPage): self
    {
        $this->page = $page;

        $this->perPage = $perPage;

        return $this;
    }

    public function mapIntoEntity(): Closure
    {
        return fn (string $path) => $this->makeEntity($path);
    }

    public function makeEntity(string $path): Entity
    {
        try {
            $mime = $this->fileSystem->mimeType($path);
            $type = getFileType($mime);
        } catch (UnableToRetrieveMetadata $e) {
            report($e);

            $type = 'default';
        }

        return $this->entityClassForType($type)::make($this->disk, $path);
    }

    public function filters(): array
    {
        $data = $this->files(
            filterHidden: true,
            applySearch: true,
            applyFilter: false,
        );

        $filters = config('nova-filemanager.filters', []);

        if (count($filters) > 0) {
            return collect($filters)
                ->filter(function ($extensions) use ($data) {
                    foreach ($data as $file) {
                        if (in_array(pathinfo($file, PATHINFO_EXTENSION), $extensions)) {
                            return true;
                        }
                    }

                    return false;
                })
                ->toArray();
        }

        return [];
    }

    public static function make(
        ?string $disk = null,
        ?string $path = null,
        int $page = 1,
        int $perPage = 15,
        ?string $search = null,
        ?string $filter = null,
    ): self {
        return new self($disk, $path, $page, $perPage, $search, $filter);
    }

    /**
     * @param  string  $type
     * @return <class-string>
     */
    public function entityClassForType(string $type): string
    {
        return config('nova-filemanager.entities.' . $type) ?? config('nova-filemanager.entities.default');
    }
}
