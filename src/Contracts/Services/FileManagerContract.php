<?php

namespace Stepanenko3\NovaFileManager\Contracts\Services;

use Closure;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Stepanenko3\LaravelPagination\Pagination;
use Stepanenko3\NovaFileManager\Entities\Entity;

interface FileManagerContract
{
    public static function make(
        ?string $disk = null,
        ?string $path = null,
        int $page = 1,
        int $perPage = 15,
        ?string $search = null
    ): self;

    public function applyFilterCallbacks(
        string $value,
    ): bool;

    public function applySearchCallback(): void;

    public function breadcrumbs(): Collection;

    public function duplicate(
        string $path,
    ): bool;

    public function delete(
        string $path,
    ): bool;

    public function directories(): Collection;

    public function setDisk(
        string | Filesystem $disk,
    ): self;

    public function getPath(): string;

    public function getDisk(): string;

    public function entityClassForType(
        string $type,
    ): string;

    public function files(): Collection;

    public function filesystem(): Filesystem;

    public function forPage(
        int $page,
        int $perPage,
    ): self;

    public function makeEntity(
        string $path,
        string $disk,
    ): Entity;

    public function mapIntoEntity(): Closure;

    public function mkdir(
        string $path,
    ): bool;

    public function omitHiddenFilesAndDirectories(): void;

    public function paginate(
        Collection $data,
    ): Pagination;

    public function path(
        string $path,
    ): self;

    public function rename(
        string $from,
        string $to,
    ): bool;

    public function rmdir(
        string $path,
    ): bool;

    public function showHiddenFiles(
        bool $show = true,
    ): self;

    public function unzip(
        string $path,
    ): bool;
}
