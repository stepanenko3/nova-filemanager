<?php

namespace Stepanenko3\NovaFilemanager\Traits;

use Illuminate\Support\Str;
use Stepanenko3\NovaFilemanager\Services\MimeTypes;

trait FileFunctions
{
    public function getFileType(string $mime): string
    {
        $types = [
            'dir' => ['directory'],

            'image' => ['image/'],

            'audio' => ['audio/'],

            'video' => ['video/'],

            'pdf' => ['application/pdf'],

            'compressed' => ['zip', 'rar', 'tar', 'gz', '7z', 'pkg'],

            'text' => [
                'text/',
                'rtf',
                'json',
                'javascript',
                '/xml',
                'sql',
            ],

            'word' => ['wordprocessingml'],
        ];

        foreach($types as $type => $contents) {
            if (Str::contains($mime, $contents)) {
                return $type;
            }
        }

        return 'file';
    }

    /**
     * Generates an id based on file.
     */
    public function generateId(string $path): string
    {
        return md5(trim($path));
    }

    private function getCorrectMimeFileType(?string $extension, string $mime): string
    {
        $types = MimeTypes::checkMimeType($extension);

        if (count($types) > 0) {
            return reset($types);
        }

        // If no type

        return $mime;
    }

    private function getDimensions(string $path, string $mime): string|bool
    {
        if (env('FILEMANAGER_DISK') != 'public') {
            return false;
        }

        if (Str::contains($mime, 'image')) {
            [$width, $height] = getimagesize($path);

            if (!empty($width) && !empty($height)) {
                return $width . 'x' . $height;
            }
        }

        return false;
    }

    public function checkPerms(string $path): string
    {
        clearstatcache(false, $path);

        return decoct(fileperms($path) & 0777);
    }

    public function cleanSlashes(?string $str): string
    {
        return preg_replace('/([^:])(\/{2,})/', '$1/', $str);
    }

    public function fixFilename(string $str): string
    {
        if (!mb_detect_encoding($str, 'UTF-8', true)) {
            $str = utf8_encode($str);
        }

        if (function_exists('transliterator_transliterate')) {
            $str = transliterator_transliterate('Any-Latin; Latin-ASCII', $str);
        } else {
            $str = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $str);
        }

        $str = preg_replace("/[^a-zA-Z0-9\.\[\]_| -]/", '', $str);

        $str = str_replace(['"', "'", '/', '\\'], '', $str);
        $str = strip_tags($str);

        return trim($str);
    }

    public function fixDirname(string $str): string
    {
        return str_replace(['.', '~', '/', '\\'], '', $str);
    }
}
