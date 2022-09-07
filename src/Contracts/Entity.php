<?php


namespace Stepanenko3\NovaFilemanager\Contracts;

use Illuminate\Support\Carbon;

interface Entity
{
    public function extension(): string;

    public function id(): string;

    public function lastModifiedAt(): Carbon;

    public function meta(): array;

    public function mime(): string;

    public function name(): string;

    public function signedExpirationTime(): Carbon;

    public function size(): int|string;

    public function toArray(): array;

    public function type(): string;

    public function url(): string;

    public static function make(string $disk, string $path): self;
}
