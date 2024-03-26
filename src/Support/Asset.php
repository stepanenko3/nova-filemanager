<?php

namespace Stepanenko3\NovaFileManager\Support;

use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Traits\ForwardsCalls;
use JsonSerializable;

class Asset implements Arrayable, JsonSerializable
{
    use ForwardsCalls;

    public function __construct(
        public string $disk,
        public string $path,
        public ?Filesystem $filesystem = null,
    ) {
    }

    public function __call(
        string $name,
        array $arguments
    ) {
        return $this->forwardCallTo(
            object: $this->filesystem(),
            method: $name,
            parameters: $arguments
        );
    }

    public function __toString(): string
    {
        return json_encode(
            $this->jsonSerialize(),
            JSON_THROW_ON_ERROR,
        );
    }

    public function filesystem(): Filesystem
    {
        if (!$this->filesystem) {
            $this->filesystem = Storage::disk($this->disk);
        }

        return $this->filesystem;
    }

    public function toArray(): array
    {
        return [
            'disk' => $this->disk,
            'path' => $this->path,
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}
