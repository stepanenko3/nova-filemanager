<?php

namespace Stepanenko3\NovaFileManager\Http\Controllers;

use Carbon\CarbonInterval;
use Closure;
use Composer\InstalledVersions;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Stepanenko3\NovaFileManager\FileManagerTool;

class ToolController extends Controller
{
    public function __invoke(
        NovaRequest $request,
    ): Response {
        /** @var ?\Stepanenko3\NovaFileManager\FileManagerTool $tool */
        $tool = collect(Nova::registeredTools())
            ->first(
                fn (Tool $tool) => $tool instanceof FileManagerTool,
            );

        return Inertia::render(
            component: 'NovaFileManager',
            props: [
                'config' => array_merge(
                    [
                        'upload' => config('nova-file-manager.upload'),
                        'outdated' => $this->updateChecker(),
                    ],
                    $tool?->options(),
                ),
            ],
        );
    }

    public function updateChecker(): Closure
    {
        return function () {
            if (!config('nova-file-manager.update_checker.enabled')) {
                return false;
            }

            return Cache::remember(
                key: 'nova-file-manager.update_checker',
                ttl: (int) CarbonInterval::days(config('nova-file-manager.update_checker.ttl_in_days'))->totalSeconds,
                callback: function () {
                    $current = InstalledVersions::getPrettyVersion(
                        packageName: 'stepanenko3/nova-filemanager',
                    );
                    $latest = Http::get('https://api.github.com/repos/stepanenko3/nova-filemanager/releases/latest')
                        ->json('tag_name');

                    return version_compare($current, $latest, '<');
                }
            );
        };
    }
}
