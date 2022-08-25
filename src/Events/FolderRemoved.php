<?php

namespace Stepanenko3\NovaFilemanager\Events;

use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Queue\SerializesModels;

class FolderRemoved
{
    use SerializesModels;

    public string $disk;

    public string $folderPath;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(string $disk, string $folderPath)
    {
        $this->disk = $disk;
        $this->folderPath = $folderPath;
    }
}
