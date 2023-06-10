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
            'folders' => $manager->directories(),
            'files' => $paginator->items(),
            'filters' => $manager->filters(),
            'pagination' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'from' => $paginator->firstItem(),
                'to' => $paginator->lastItem(),
                'total' => $paginator->total(),
                'links' => $paginator->linkCollection()->toArray(),
            ],
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
