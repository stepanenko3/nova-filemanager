<?php


namespace Stepanenko3\NovaFilemanager\Filesystem\Upload;

use Stepanenko3\NovaFilemanager\Contracts\Filesystem\Upload\Uploader as UploaderContract;
use Stepanenko3\NovaFilemanager\Events\FileUploaded;
use Stepanenko3\NovaFilemanager\Http\Requests\UploadRequest;
use Illuminate\Http\UploadedFile;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;

class Uploader implements UploaderContract
{
    /**
     * @throws \Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException
     * @throws \Pion\Laravel\ChunkUpload\Exceptions\UploadFailedException
     */
    public function handle(UploadRequest $request, string $index = 'file'): array
    {
        $receiver = new FileReceiver($index, $request, HandlerFactory::classFromRequest($request));

        if ($receiver->isUploaded() === false) {
            throw new UploadMissingFileException;
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

    public function saveFile(UploadRequest $request, UploadedFile $file): array
    {
        $path = $file->storeAs(
            $request->path,
            $file->getClientOriginalName(),
            [
                'disk' => $request->disk,
            ],
        );

        event(new FileUploaded($request->disk, $path));

        return [
            'message' => __('Uploaded successfully'),
        ];
    }
}
