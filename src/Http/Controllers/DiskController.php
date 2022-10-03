<?php


namespace Stepanenko3\NovaFilemanager\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class DiskController extends Controller
{
    public function available(): JsonResponse
    {
        return response()->json(config('nova-filemanager.available_disks', []));
    }
}
