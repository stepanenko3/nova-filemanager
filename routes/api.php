<?php

use Illuminate\Support\Facades\Route;
use Stepanenko3\NovaFilemanager\Http\Controllers\FilemanagerToolController;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
 */

Route::controller(FilemanagerToolController::class)
    ->group(function () {
        Route::get('data', 'getData');
        Route::get('{resource}/{attribute}/data', 'getDataField');
        Route::post('actions/move', 'move');
        Route::post('actions/create-folder', 'createFolder');
        Route::post('actions/delete-folder', 'deleteFolder');
        Route::post('actions/get-info', 'getInfo');
        Route::post('actions/remove-file', 'removeFile');
        Route::get('actions/download-file', 'downloadFile');
        Route::post('actions/rename', 'rename');
        Route::post('actions/duplicate', 'duplicate');

        Route::post('events/folder', 'folderUploadedEvent');

        Route::post('uploads/add', 'upload');
        Route::get('uploads/update', 'updateFile');
    });
