<?php

namespace Stepanenko3\NovaFilemanager;

use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class FilemanagerTool extends Tool
{
    public function boot()
    {
        Nova::script('nova-filemanager', __DIR__.'/../dist/js/tool.js');
    }

    public function menu(Request $request)
    {
        return MenuSection::make(__(config('nova-filemanager.navigation_label', 'Filemanager')))
            ->path('/filemanager');
    }
}
