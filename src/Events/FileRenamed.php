<?php


namespace Stepanenko3\NovaFilemanager\Events;

use Illuminate\Foundation\Events\Dispatchable;

class FileRenamed
{
    use Dispatchable;

    public function __construct(public string $disk, public string $oldPath, public string $newPath)
    {
    }
}
