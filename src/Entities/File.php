<?php


namespace Stepanenko3\NovaFilemanager\Entities;

class File extends Entity
{
    public function meta(): array
    {
        return [
            'type' => 'file',
        ];
    }
}
