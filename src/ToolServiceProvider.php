<?php

namespace Stepanenko3\NovaFileManager;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Http\Middleware\Authenticate;
use Laravel\Nova\Nova;
use Stepanenko3\NovaFileManager\Contracts\Filesystem\Upload\Uploader as UploaderContract;
use Stepanenko3\NovaFileManager\Contracts\Services\FileManagerContract;
use Stepanenko3\NovaFileManager\Filesystem\Upload\Uploader;
use Stepanenko3\NovaFileManager\Http\Middleware\Authorize;
use Stepanenko3\NovaFileManager\Services\FileManagerService;

class ToolServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadTranslationsFrom(
            path: __DIR__ . '/../lang',
            namespace: 'nova-filemanager',
        );

        $this->loadJsonTranslationsFrom(
            path: __DIR__ . '/../lang',
        );

        $this->mergeConfigFrom(
            __DIR__ . '/../config/nova-file-manager.php',
            'nova-file-manager',
        );

        $this->publishes(
            [
                __DIR__ . '/../config' => config_path(),
            ],
            'nova-file-manager-config'
        );

        $this->app->booted(function (): void {
            $this->routes();
        });

        Nova::serving(function (): void {
            Nova::style(
                'nova-file-manager',
                __DIR__ . '/../dist/css/tool.css'
            );
            Nova::script(
                'nova-file-manager',
                __DIR__ . '/../dist/js/tool.js'
            );

            Nova::translations(__DIR__ . '/../lang/' . app()->getLocale() . '.json');
        });
    }

    public function register(): void
    {
        $this->app->singleton(
            abstract: UploaderContract::class,
            concrete: Uploader::class,
        );

        $this->app->singleton(
            abstract: FileManagerContract::class,
            concrete: function (Application $app, array $args = []) {
                /** @var \Illuminate\Http\Request $request */
                $request = $app->make('request');

                $disk = $args['disk'] ?? $request->input('disk');
                $path = $args['path'] ?? $request->input('path', \DIRECTORY_SEPARATOR);
                $page = (int) ($args['page'] ?? $request->input('page', 1));
                $perPage = (int) ($args['perPage'] ?? $request->input('perPage', 15));
                $search = $args['search'] ?? $request->input('search');
                $filter = $args['filter'] ?? $request->input('filter');
                $sort = $args['sort'] ?? $request->input('sort');
                $period = $args['period'] ?? $request->input('period');

                return FileManagerService::make(
                    disk: $disk,
                    path: $path,
                    page: $page,
                    perPage: $perPage,
                    search: $search,
                    filter: $filter,
                    sort: $sort,
                    period: $period,
                );
            }
        );
    }

    protected function routes(): void
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Nova::router(
            [
                'nova',
                Authenticate::class,
                Authorize::class,
            ],
            config('nova-file-manager.path', 'file-manager'),
        )
            ->group(__DIR__ . '/../routes/inertia.php');

        Route::middleware([
            'nova:api',
            Authorize::class,
        ])
            ->prefix('nova-vendor/nova-file-manager')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
