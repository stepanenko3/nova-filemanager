<?php

use Illuminate\Support\Facades\Route;
use Stepanenko3\NovaFileManager\Http\Controllers\DiskController;
use Stepanenko3\NovaFileManager\Http\Controllers\FileController;
use Stepanenko3\NovaFileManager\Http\Controllers\FolderController;
use Stepanenko3\NovaFileManager\Http\Controllers\IndexController;

Route::as('nova-filemanager.')->middleware('nova')->group(static function (): void {
    Route::prefix('disks')->as('disks.')->group(static function (): void {
        Route::get('{resource?}', [DiskController::class, 'available'])->name('available');
    });

    Route::get('{resource?}', IndexController::class)->name('data');

    Route::prefix('files')->as('files.')->group(function (): void {
        Route::post('upload/{resource?}', [FileController::class, 'upload'])->name('upload');
        Route::post('rename/{resource?}', [FileController::class, 'rename'])->name('rename');
        Route::post('delete/{resource?}', [FileController::class, 'delete'])->name('delete');
        Route::post('unzip/{resource?}', [FileController::class, 'unzip'])->name('unzip');
        Route::post('duplicate/{resource?}', [FileController::class, 'duplicate'])->name('duplicate');
    });

    Route::prefix('folders')->as('folders.')->group(function (): void {
        Route::post('create/{resource?}', [FolderController::class, 'create'])->name('create');
        Route::post('rename/{resource?}', [FolderController::class, 'rename'])->name('rename');
        Route::post('delete/{resource?}', [FolderController::class, 'delete'])->name('delete');
    });
});
