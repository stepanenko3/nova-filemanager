<?php


namespace Stepanenko3\NovaFilemanager\Http\Controllers;

use Stepanenko3\NovaFilemanager\Contracts\Filesystem\Upload\Uploader;
use Stepanenko3\NovaFilemanager\Events\FileDeleted;
use Stepanenko3\NovaFilemanager\Events\FileRenamed;
use Stepanenko3\NovaFilemanager\Http\Requests\DeleteFileRequest;
use Stepanenko3\NovaFilemanager\Http\Requests\DownloadFileRequest;
use Stepanenko3\NovaFilemanager\Http\Requests\RenameFileRequest;
use Stepanenko3\NovaFilemanager\Http\Requests\UploadRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class FileController extends Controller
{
    public function upload(UploadRequest $request, Uploader $uploader): JsonResponse
    {
        return response()->json(
            $uploader->handle($request)
        );
    }

    public function rename(RenameFileRequest $request): JsonResponse
    {
        $manager = $request->manager();
        $result = $manager->rename($request->oldPath, $request->newPath);

        if (!$result) {
            throw ValidationException::withMessages([
                'oldPath' => [__('Could not rename file !')],
            ]);
        }

        event(new FileRenamed($manager->disk, $request->oldPath, $request->newPath));

        return response()->json([
            'message' => __('File renamed successfully.'),
        ]);
    }

    public function delete(DeleteFileRequest $request): JsonResponse
    {
        $manager = $request->manager();

        $result = $manager->delete($request->path);

        if (!$result) {
            throw ValidationException::withMessages([
                'path' => [__('Could not delete file !')],
            ]);
        }

        event(new FileDeleted($manager->disk, $request->path));

        return response()->json([
            'message' => __('File deleted successfully.'),
        ]);
    }

    public function download(DownloadFileRequest $request): BinaryFileResponse
    {
        return response()->download(Storage::disk($request->disk)->path($request->path));
    }
}
