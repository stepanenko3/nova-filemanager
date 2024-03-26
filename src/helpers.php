<?php

use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

if (!function_exists('get_file_type')) {
    function get_file_type(string $mime): string
    {
        $types = config('nova-file-manager.mime_types', []);

        foreach ($types as $type => $contents) {
            if (Str::contains($mime, $contents)) {
                return $type;
            }
        }

        return 'file';
    }
}
if (!function_exists('str')) {
    function str(?string $string = null): Stringable | string
    {
        if (func_num_args() === 0) {
            return new class () {
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
