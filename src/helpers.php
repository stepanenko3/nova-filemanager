<?php

use Illuminate\Support\Str;

if (!function_exists('getFileType')) {
    function getFileType(string $mime): string
    {
        $types = config('nova-filemanager.mime_types', []);

        foreach($types as $type => $contents) {
            if (Str::contains($mime, $contents)) {
                return $type;
            }
        }

        return 'file';
    }
}

if (!function_exists('str')) {
    /**
     * Get a new stringable object from the given string.
     *
     * @param  string|null  $string
     * @return \Illuminate\Support\Stringable|mixed
     */
    function str($string = null)
    {
        if (func_num_args() === 0) {
            return new class {
                public function __call($method, $parameters)
                {
                    return Str::$method(...$parameters);
                }

                public function __toString()
                {
                    return '';
                }
            };
        }

        return Str::of($string);
    }
}
