<?php

namespace Stepanenko3\NovaFilemanager\Events;

use Illuminate\Queue\SerializesModels;

class FileUploaded
{
    use SerializesModels;

    public string $disk;

    public string $filePath;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(string $disk, string $filePath)
    {
        $this->disk = $disk;
        $this->filePath = $filePath;
    }
}
