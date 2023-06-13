<?php

namespace Stepanenko3\NovaFileManager\Entities;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\fileSystem\AwsS3V3Adapter;
use Illuminate\Support\Carbon;
use Laravel\Nova\Http\Requests\NovaRequest;
use League\Flysystem\UnableToRetrieveMetadata;
use Stepanenko3\NovaFileManager\Contracts\Entities\Entity as EntityContract;
use Stepanenko3\NovaFileManager\Contracts\Services\FileManagerContract;
use Stepanenko3\NovaFileManager\Services\MimeTypes;

abstract class Entity implements Arrayable, EntityContract
{
    protected array $data = [];

    public function __construct(
        public FileManagerContract $manager,
        public string $path,
        public string $disk,
    ) {
    }

    /**
     * Static helper.
     */
    public static function make(FileManagerContract $manager, string $path, string $disk): static
    {
        return new static(
            manager: $manager,
            path: $path,
            disk: $disk,
        );
    }

    /**
     * Return the entity's data as array.
     */
    public function toArray(): array
    {
        if (empty($this->data)) {
            if ($this->manager->filesystem()->exists($this->path)) {
                $this->data = array_merge(
                    [
                        'id' => $this->id(),
                        'disk' => $this->disk,
                        'name' => $this->name(),
                        'path' => $this->path,
                        'size' => $this->size(),
                        'extension' => $this->extension(),
                        'mime' => $this->mime(),
                        'url' => $this->url(),
                        'lastModifiedAt' => $this->lastModifiedAt(),
                        'type' => $this->type(),
                    ],
                    [
                        'meta' => $this->meta(),
                    ],
                );
            } else {
                $this->data = array_merge([
                    'id' => $this->id(),
                    'disk' => $this->disk,
                    'path' => $this->path,
                ]);
            }
        }

        return $this->data;
    }

    /**
     * Generate a unique identifier for the entity.
     */
    public function id(): string
    {
        return sha1($this->manager->filesystem()->path($this->path));
    }

    /**
     * Get the name of the entity.
     */
    public function name(): string
    {
        return pathinfo($this->path, PATHINFO_BASENAME);
    }

    /**
     * Compute the size of the entity.
     */
    public function size(): int
    {
        return $this->manager->filesystem()->size($this->path);
    }

    public function sizeReadable(): string
    {
        $value = $this->size();

        $units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

        for ($i = 0; $value > 1024; $i++) {
            $value /= 1024;
        }

        return round($value, 2) . ' ' . $units[$i];
    }

    /**
     * Get the file extension of the entity.
     */
    public function extension(): string
    {
        return pathinfo($this->path, PATHINFO_EXTENSION);
    }

    /**
     * Get the mime type of the entity.
     */
    public function mime(): string
    {
        try {
            $ext = pathinfo($this->path, PATHINFO_EXTENSION);
            $types = MimeTypes::checkMimeType($ext);

            $type = $types === false
                ? $type = $this->manager->filesystem()->mimeType($this->path)
                : $type = $types[0];

            if ($type === false) {
                throw UnableToRetrieveMetadata::mimeType($this->path);
            }

            return $type;
        } catch (UnableToRetrieveMetadata $e) {
            report($e);

            return 'application/octet-stream';
        }
    }

    /**
     * Build an url for the entity based on the disk.
     */
    public function url(): string
    {
        // if a custom url builder is defined, we use it to return the url
        if ($this->manager->hasUrlResolver()) {
            return call_user_func(
                $this->manager->getUrlResolver(),
                app(NovaRequest::class),
                $this->path,
                $this->disk,
                $this->manager->filesystem(),
            );
        }

        $supportsSignedUrls = $this->manager->filesystem() instanceof AwsS3V3Adapter;

        // signed urls are only supported on S3 disks
        if ($supportsSignedUrls && config('nova-file-manager.url_signing.enabled')) {
            return $this->manager->filesystem()->temporaryUrl(
                $this->path,
                $this->signedExpirationTime(),
            );
        }

        // we fallback to the regular url builder
        return $this->manager->filesystem()->url($this->path);
    }

    /**
     * Get the expiration time from the user defined config.
     */
    public function signedExpirationTime(): Carbon
    {
        return now()->add(
            config('nova-file-manager.url_signing.unit'),
            config('nova-file-manager.url_signing.value'),
        );
    }

    /**
     * Get the last modified time of the entity as string.
     */
    public function lastModifiedAt(): string
    {
        return $this->lastModifiedAtTimestamp()->toDateTimeString();
    }

    public function lastModifiedAtReadable(): string
    {
        return $this->lastModifiedAtTimestamp()->diffForHumans();
    }

    /**
     * Get the last modified time of the entity as a Carbon instance.
     */
    public function lastModifiedAtTimestamp(): Carbon
    {
        return Carbon::createFromTimestamp($this->manager->filesystem()->lastModified($this->path));
    }

    /**
     * Define the type of the entity.
     */
    public function type(): string
    {
        return get_file_type($this->mime());
    }

    abstract public function meta(): array;
}
