<?php

namespace Stepanenko3\NovaFileManager\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class DiskController extends Controller
{
    public function available(): JsonResponse
    {
        return response()->json(config('nova-file-manager.available_disks', []));
    }
}
