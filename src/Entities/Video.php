<?php


namespace Stepanenko3\NovaFilemanager\Entities;

class Video extends Entity
{
    public function meta(): array
    {
        return [
            'type' => 'video',
        ];
    }
}
