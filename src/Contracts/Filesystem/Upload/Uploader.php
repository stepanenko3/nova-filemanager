<?php

namespace Stepanenko3\NovaFileManager\Contracts\Filesystem\Upload;

use Stepanenko3\NovaFileManager\Http\Requests\UploadFileRequest;

interface Uploader
{
    public function handle(
        UploadFileRequest $request,
        string $index = 'file',
    ): array;
}
