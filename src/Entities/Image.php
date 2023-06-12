<?php

namespace Stepanenko3\NovaFileManager\Entities;

use Exception;

class Image extends Entity
{
    public function meta(): array
    {
        $contents = $this->manager->filesystem()->get(
            path: $this->path,
        );

        try {
            $image = imagecreatefromstring($contents);
            $width = imagesx($image) ?? null;
            $height = imagesy($image) ?? null;

            return [
                'type' => 'image',
                'width' => $width,
                'height' => $height,
                'aspectRatio' => getAspectRatio($width, $height),
            ];
        } catch (Exception $e) {
            return [
                'type' => 'image',
                'source' => $contents,
            ];
        }
    }
}
