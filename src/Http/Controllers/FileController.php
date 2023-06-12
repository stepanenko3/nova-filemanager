<?php

namespace Stepanenko3\NovaFileManager\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;
use Stepanenko3\NovaFileManager\Contracts\Filesystem\Upload\Uploader;
use Stepanenko3\NovaFileManager\Events\FileDeleted;
use Stepanenko3\NovaFileManager\Events\FileDeleting;
use Stepanenko3\NovaFileManager\Events\FileDuplicated;
use Stepanenko3\NovaFileManager\Events\FileDuplicating;
use Stepanenko3\NovaFileManager\Events\FileRenamed;
use Stepanenko3\NovaFileManager\Events\FileRenaming;
use Stepanenko3\NovaFileManager\Events\FileUnzipped;
use Stepanenko3\NovaFileManager\Events\FileUnzipping;
use Stepanenko3\NovaFileManager\Http\Requests\DeleteFileRequest;
use Stepanenko3\NovaFileManager\Http\Requests\DuplicateFileRequest;
use Stepanenko3\NovaFileManager\Http\Requests\RenameFileRequest;
use Stepanenko3\NovaFileManager\Http\Requests\UnzipFileRequest;
use Stepanenko3\NovaFileManager\Http\Requests\UploadFileRequest;

class FileController extends Controller
{
    public function upload(UploadFileRequest $request, Uploader $uploader): JsonResponse
    {
        return response()->json(
            $uploader->handle($request)
        );
    }

    public function rename(RenameFileRequest $request): JsonResponse
    {
        $manager = $request->manager();

        event(new FileRenaming(
            filesystem: $manager->filesystem(),
            disk: $manager->getDisk(),
            from: $request->from,
            to: $request->to,
        ));

        $result = $manager->rename(
            from: $request->from,
            to: $request->to,
        );

        if (!$result) {
            throw ValidationException::withMessages(['from' => [__('nova-file-manager::errors.file.rename')]]);
        }

        event(new FileRenamed(
            filesystem: $manager->filesystem(),
            disk: $manager->getDisk(),
            from: $request->from,
            to: $request->to,
        ));

        return response()->json([
            'message' => __('nova-file-manager::messages.file.rename'),
        ]);
    }

    public function delete(DeleteFileRequest $request): JsonResponse
    {
        $manager = $request->manager();

        foreach ($request->paths as $path) {
            event(new FileDeleting(
                filesystem: $manager->filesystem(),
                disk: $manager->getDisk(),
                path: $path,
            ));

            $result = $manager->delete(
                path: $path,
            );

            if (!$result) {
                throw ValidationException::withMessages(['paths' => [__('nova-file-manager::errors.file.delete')]]);
            }

            event(new FileDeleted(
                filesystem: $manager->filesystem(),
                disk: $manager->getDisk(),
                path: $path,
            ));
        }

        return response()->json([
            'message' => __('nova-file-manager::messages.file.delete'),
        ]);
    }

    public function duplicate(DuplicateFileRequest $request): JsonResponse
    {
        $manager = $request->manager();

        event(new FileDuplicating(
            filesystem: $manager->filesystem(),
            disk: $manager->getDisk(),
            path: $request->path,
        ));

        $result = $manager->duplicate(
            path: $request->path,
        );

        if (!$result) {
            throw ValidationException::withMessages(['path' => [__('nova-file-manager::errors.file.duplicate')]]);
        }

        event(new FileDuplicated(
            filesystem: $manager->filesystem(),
            disk: $manager->getDisk(),
            path: $request->path,
        ));

        return response()->json([
            'message' => __('nova-file-manager::messages.file.duplicate'),
        ]);
    }

    public function unzip(UnzipFileRequest $request): JsonResponse
    {
        $manager = $request->manager();

        event(new FileUnzipping(
            filesystem: $manager->filesystem(),
            disk: $manager->getDisk(),
            path: $request->path,
        ));

        $result = $manager->unzip(
            path: $request->path,
        );

        if (!$result) {
            throw ValidationException::withMessages(['path' => [__('nova-file-manager::errors.file.unzip')]]);
        }

        event(new FileUnzipped(
            filesystem: $manager->filesystem(),
            disk: $manager->getDisk(),
            path: $request->path,
        ));

        return response()->json([
            'message' => __('nova-file-manager::messages.file.unzip'),
        ]);
    }
}
