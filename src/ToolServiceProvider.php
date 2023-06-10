<?php


namespace Stepanenko3\NovaFilemanager;

use Stepanenko3\NovaFilemanager\Contracts\FilemanagerContract;
use Stepanenko3\NovaFilemanager\Contracts\Filesystem\Upload\Uploader as UploaderContract;
use Stepanenko3\NovaFilemanager\Filesystem\Upload\Uploader;
use Stepanenko3\NovaFilemanager\Http\Middleware\Authorize;
use Stepanenko3\NovaFilemanager\Services\FilemanagerService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->app->booted(function () {
            $this->routes();
        });

        $this->mergeConfigFrom(__DIR__ . '/../config/nova-filemanager.php', 'nova-filemanager');
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'nova-filemanager');

        $this->publishes([
            __DIR__ . '/../config/nova-filemanager.php' => config_path('nova-filemanager.php'),
        ], 'config');

        Nova::serving(static function (ServingNova $event) {
            Nova::translations(__DIR__ . '/../lang/en.json');

            Nova::script('nova-filemanager', __DIR__ . '/../dist/js/tool.js');
            Nova::style('nova-filemanager', __DIR__ . '/../dist/css/tool.css');
        });

        Inertia::version(static function () {
            return md5_file(__DIR__ . '../dist/mix-manifest.json');
        });

        $this->publish();
    }

    protected function routes(): void
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Nova::router(['nova', Authorize::class], config('nova-filemanager.path', 'filemanager'))
            ->group(__DIR__ . '/../routes/inertia.php');

        Route::middleware(['nova:api', Authorize::class])
            ->prefix('nova-vendor/nova-filemanager')
            ->group(__DIR__ . '/../routes/api.php');
    }

    public function register(): void
    {
        $this->app->singleton(UploaderContract::class, Uploader::class);
        $this->app->singleton(FilemanagerContract::class, function (Application $app, array $args = []) {
            /** @var \Illuminate\Http\Request $request */
            $request = $app->make('request');

            $disk = $args['disk'] ?? $request->input('disk');
            $path = $args['path'] ?? $request->input('path', DIRECTORY_SEPARATOR);
            $page = (int) ($args['page'] ?? $request->input('page', 1));
            $perPage = (int) ($args['perPage'] ?? $request->input('perPage', 15));
            $search = $args['search'] ?? $request->input('search');
            $filter = $args['filter'] ?? $request->input('filter');
            $sort = $args['sort'] ?? $request->input('sort');
            $filterByDate = $args['filterByDate'] ?? $request->input('filterByDate');

            return FilemanagerService::make(
                disk: $disk,
                path: $path,
                page: $page,
                perPage: $perPage,
                search: $search,
                filter: $filter,
                sort: $sort,
                filterByDate: $filterByDate,
            );
        });
    }

    public function publish(): void
    {
        if ($this->app->runningInConsole()) {
            $this->mergeConfigFrom(__DIR__ . '/../config/nova-filemanager.php', 'nova-filemanager');

            $this->publishes(
                [
                    __DIR__ . '/../config' => config_path(),
                ],
                'nova-filemanager-config'
            );
        }
    }
}
