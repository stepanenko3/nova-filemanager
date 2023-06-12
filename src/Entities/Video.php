<?php

namespace Stepanenko3\NovaFileManager\Entities;

class Video extends Entity
{
    public function meta(): array
    {
        return [
            'type' => 'video',
        ];
    }
}
