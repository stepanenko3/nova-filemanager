<?php

namespace Stepanenko3\NovaFileManager\Entities;

class Text extends Entity
{
    public function meta(): array
    {
        $contents = $this->manager->filesystem()->get(
            path: $this->path,
        );

        return [
            'type' => 'text',
            'source' => $contents,
        ];
    }
}
