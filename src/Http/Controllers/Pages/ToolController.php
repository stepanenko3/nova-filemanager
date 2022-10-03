<?php


namespace Stepanenko3\NovaFilemanager\Http\Controllers\Pages;

use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ToolController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('NovaFilemanager', [
            'config' => [
                'upload' => config('nova-filemanager.upload'),
            ],
        ]);
    }
}
