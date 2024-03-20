<?php

use Illuminate\Support\Facades\Route;
use Stepanenko3\NovaFileManager\Http\Controllers\ToolController;

Route::get('/', ToolController::class)->name('nova-file-manager.tool');
