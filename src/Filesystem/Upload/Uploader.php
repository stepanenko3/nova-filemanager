<?php

namespace Stepanenko3\NovaFileManager\Filesystem\Upload;

use Illuminate\Http\UploadedFile;
use Illuminate\Validation\ValidationException;
use Stepanenko3\NovaFileManager\Contracts\Filesystem\Upload\Uploader as UploaderContract;
use Stepanenko3\NovaFileManager\Events\FileUploaded;
use Stepanenko3\NovaFileManager\Events\FileUploading;
use Stepanenko3\NovaFileManager\Http\Requests\UploadFileRequest;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;

class Uploader implements UploaderContract
{
    /**
     * @throws UploadMissingFileException
     * @throws \Pion\Laravel\ChunkUpload\Exceptions\UploadFailedException
     */
    public function handle(UploadFileRequest $request, string $index = 'file'): array
    {
        if (!$request->validateUpload()) {
            throw ValidationException::withMessages(['file' => [__('nova-file-manager::errors.file.upload_validation')]]);
        }

        $receiver = new FileReceiver($index, $request, HandlerFactory::classFromRequest($request));

        if ($receiver->isUploaded() === false) {
            throw new UploadMissingFileException();
        }

        $save = $receiver->receive();

        if ($save->isFinished()) {
            return $this->saveFile($request, $save->getFile());
        }

        $handler = $save->handler();

        return [
            'done' => $handler->getPercentageDone(),
            'status' => true,
        ];
    }

    public function saveFile(UploadFileRequest $request, UploadedFile $file): array
    {
        if (!$request->validateUpload($file, true)) {
            throw ValidationException::withMessages(['file' => [__('nova-file-manager::errors.file.upload_validation')]]);
        }

        $folderPath = dirname($request->filePath());
        $filePath = $file->getClientOriginalName();
        $testPath = ltrim(str_replace('//', '/', "{$folderPath}/{$filePath}"), '/');

        event(new FileUploading($request->manager()->filesystem(), $request->manager()->getDisk(), $testPath));

        $path = $request->manager()->filesystem()->putFileAs(
            path: $folderPath,
            file: $file,
            name: $filePath,
        );

        event(new FileUploaded($request->manager()->filesystem(), $request->manager()->getDisk(), $path));

        return [
            'message' => __('nova-file-manager::messages.file.upload'),
        ];
    }
}
