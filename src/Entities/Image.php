<?php


namespace Stepanenko3\NovaFilemanager\Entities;

class Image extends Entity
{
    public function meta(): array
    {
        $contents = $this->fileSystem->get($this->path);
        $image = imagecreatefromstring($contents);
        $width = imagesx($image) ?? null;
        $height = imagesy($image) ?? null;

        return [
            'type' => 'image',
            'width' => $width,
            'height' => $height,
            'aspectRatio' => getAspectRatio($width, $height),
        ];
    }
}
