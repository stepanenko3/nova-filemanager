<?php

namespace Stepanenko3\NovaFileManager\Entities;

class File extends Entity
{
    public function meta(): array
    {
        return [
            'type' => 'file',
        ];
    }
}
