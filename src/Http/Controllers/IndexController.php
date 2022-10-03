<?php


namespace Stepanenko3\NovaFilemanager\Http\Controllers;

use Stepanenko3\NovaFilemanager\Http\Requests\IndexRequest;
use Illuminate\Routing\Controller;

class IndexController extends Controller
{
    public function __invoke(IndexRequest $request)
    {
        $manager = $request->manager();
        $files = $manager->files();

        $paginator = $manager->paginate($files);

        return response()->json([
            'path' => $manager->path,
            'disk' => $manager->disk,
            'breadcrumbs' => $manager->breadcrumbs(),
            'directories' => $manager->directories(),
            'filters' => $manager->filters(),
            'files' => $paginator->toArray(),
            'pageLimits' => [
                5,
                15,
                25,
                50,
                100,
                200,
            ],
        ]);
    }
}
