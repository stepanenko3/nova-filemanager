<?php


namespace Stepanenko3\NovaFilemanager\Contracts\Filesystem\Upload;

use Stepanenko3\NovaFilemanager\Http\Requests\UploadRequest;

interface Uploader
{
    public function handle(UploadRequest $request, string $index = 'file'): array;
}
