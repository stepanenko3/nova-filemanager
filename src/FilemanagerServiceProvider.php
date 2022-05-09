<?php

namespace Stepanenko3\NovaFilemanager;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Stepanenko3\NovaFilemanager\Http\Middleware\Authorize;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FilemanagerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            // Publish config
            $this->publishes([
                __DIR__ . '/../config/' => config_path(),
            ], 'config');
        }

        Nova::serving(function (ServingNova $event) {
            Nova::script('filemanager-field', __DIR__ . '/../dist/js/field.js');
            // Nova::style('filemanager-field', __DIR__.'/../dist/css/field.css');
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerRoutes();

        $this->mergeConfigFrom(
            __DIR__ . '/../config/nova-filemanager.php',
            'nova-filemanager'
        );
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function registerRoutes()
    {
        // Register nova routes
        Nova::router()->group(function ($router) {
            $path = config('nova-filemanger.path', 'filemanager');
            $router->get($path, fn () => inertia('NovaFilemanager', ['basePath' => $path]));
        });

        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
            ->namespace('Stepanenko3\NovaFilemanager\Http\Controllers')
            ->prefix('nova-vendor/stepanenko3/nova-filemanager')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
