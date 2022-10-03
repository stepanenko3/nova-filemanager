<?php


namespace Stepanenko3\NovaFilemanager\Http\Controllers;

use Stepanenko3\NovaFilemanager\Events\FolderCreated;
use Stepanenko3\NovaFilemanager\Events\FolderDeleted;
use Stepanenko3\NovaFilemanager\Events\FolderRenamed;
use Stepanenko3\NovaFilemanager\Http\Requests\CreateFolderRequest;
use Stepanenko3\NovaFilemanager\Http\Requests\DeleteFolderRequest;
use Stepanenko3\NovaFilemanager\Http\Requests\RenameFolderRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;

class FolderController extends Controller
{
    public function create(CreateFolderRequest $request): JsonResponse
    {
        $result = $request->manager()->mkdir(
            $path = trim($request->get('path'))
        );

        if (!$result) {
            throw ValidationException::withMessages([
                'folder' => [__('Folder already exists !')],
            ]);
        }

        event(new FolderCreated($request->manager()->disk, $path));

        return response()->json([
            'message' => __('Folder created successfully.'),
        ]);
    }

    public function rename(RenameFolderRequest $request): JsonResponse
    {
        $oldPath = $request->get('oldPath');
        $newPath = $request->get('newPath');

        $result = $request->manager()->rename($oldPath, $newPath);

        if (!$result) {
            throw ValidationException::withMessages([
                'folder' => [__('Could not rename folder !')],
            ]);
        }

        event(new FolderRenamed($request->manager()->disk, $oldPath, $newPath));

        return response()->json([
            'message' => __('Folder renamed successfully.'),
        ]);
    }

    public function delete(DeleteFolderRequest $request): JsonResponse
    {
        $path = $request->get('path');
        $disk = $request->get('disk');

        $result = $request->manager()->rmdir($request->path);

        if (!$result) {
            throw ValidationException::withMessages([
                'folder' => [__('Could not delete folder !')],
            ]);
        }

        event(new FolderDeleted($disk, $path));

        return response()->json([
            'message' => __('Folder deleted successfully.'),
        ]);
    }
}
