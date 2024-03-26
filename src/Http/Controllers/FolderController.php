<?php

namespace Stepanenko3\NovaFileManager\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;
use Stepanenko3\NovaFileManager\Events\FolderCreated;
use Stepanenko3\NovaFileManager\Events\FolderCreating;
use Stepanenko3\NovaFileManager\Events\FolderDeleted;
use Stepanenko3\NovaFileManager\Events\FolderDeleting;
use Stepanenko3\NovaFileManager\Events\FolderRenamed;
use Stepanenko3\NovaFileManager\Events\FolderRenaming;
use Stepanenko3\NovaFileManager\Http\Requests\CreateFolderRequest;
use Stepanenko3\NovaFileManager\Http\Requests\DeleteFolderRequest;
use Stepanenko3\NovaFileManager\Http\Requests\RenameFolderRequest;

class FolderController extends Controller
{
    public function create(
        CreateFolderRequest $request,
    ): JsonResponse {
        $path = trim($request->path);

        event(new FolderCreating(
            filesystem: $request->manager()->filesystem(),
            disk: $request->manager()->getDisk(),
            path: $path,
        ));

        $result = $request->manager()->mkdir(
            path: $path,
        );

        if (!$result) {
            throw ValidationException::withMessages(['folder' => [__('nova-file-manager::errors.folder.create')]]);
        }

        event(new FolderCreated(
            filesystem: $request->manager()->filesystem(),
            disk: $request->manager()->getDisk(),
            path: $path,
        ));

        return response()->json([
            'message' => __('nova-file-manager::messages.folder.create'),
        ]);
    }

    public function rename(
        RenameFolderRequest $request,
    ): JsonResponse {
        event(new FolderRenaming(
            filesystem: $request->manager()->filesystem(),
            disk: $request->manager()->getDisk(),
            from: $request->from,
            to: $request->to,
        ));

        $result = $request->manager()->rename(
            from: $request->from,
            to: $request->to,
        );

        if (!$result) {
            throw ValidationException::withMessages(['folder' => [__('nova-file-manager::errors.folder.rename')]]);
        }

        event(new FolderRenamed(
            filesystem: $request->manager()->filesystem(),
            disk: $request->manager()->getDisk(),
            from: $request->from,
            to: $request->to,
        ));

        return response()->json([
            'message' => __('nova-file-manager::messages.folder.rename'),
        ]);
    }

    public function delete(
        DeleteFolderRequest $request,
    ): JsonResponse {
        event(new FolderDeleting(
            filesystem: $request->manager()->filesystem(),
            disk: $request->manager()->getDisk(),
            path: $request->path,
        ));

        $result = $request->manager()->rmdir(
            path: $request->path,
        );

        if (!$result) {
            throw ValidationException::withMessages(['folder' => [__('nova-file-manager::errors.folder.delete')]]);
        }

        event(new FolderDeleted(
            filesystem: $request->manager()->filesystem(),
            disk: $request->manager()->getDisk(),
            path: $request->path,
        ));

        return response()->json([
            'message' => __('nova-file-manager::messages.folder.delete'),
        ]);
    }
}
