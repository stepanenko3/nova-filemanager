<?php

namespace Stepanenko3\NovaFileManager\Http\Controllers;

use Illuminate\Routing\Controller;
use Stepanenko3\NovaFileManager\Http\Requests\IndexRequest;

class IndexController extends Controller
{
    public function __invoke(
        IndexRequest $request,
    ) {
        $manager = $request->manager();

        $paginator = $manager
            ->paginate($manager->files());

        return response()->json([
            'path' => $manager->getPath(),
            'disk' => $manager->getDisk(),
            'breadcrumbs' => $manager->breadcrumbs(),
            'folders' => $manager->directories(),
            'files' => $paginator->items(),
            'pagination' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'from' => $paginator->firstItem(),
                'to' => $paginator->lastItem(),
                'total' => $paginator->total(),
                'links' => $paginator->linkCollection()->toArray(),
            ],
        ]);
    }
}
