<?php

namespace Stepanenko3\NovaFileManager\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Stepanenko3\NovaFileManager\FileManagerTool;

class Authorize
{
    public function handle(
        Request $request,
        Closure $next,
    ): Response | JsonResponse {
        $tool = collect(Nova::registeredTools())
            ->first([
                $this,
                'matchesTool',
            ]);

        return optional($tool)->authorize($request)
            ? $next($request)
            : abort(403);
    }

    public function matchesTool(
        Tool $tool,
    ): bool {
        return $tool instanceof FileManagerTool;
    }
}
