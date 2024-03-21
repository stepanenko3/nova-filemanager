<?php

namespace Stepanenko3\NovaFileManager\Events;

use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Foundation\Events\Dispatchable;

class FileDeleting
{
    use Dispatchable;

    public function __construct(
        public Filesystem $filesystem,
        public string $disk,
        public string $path,
    ) {
        //
    }
}
