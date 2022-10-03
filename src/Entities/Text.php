<?php


namespace Stepanenko3\NovaFilemanager\Entities;

class Text extends Entity
{
    public function meta(): array
    {
        $contents = $this->fileSystem->get($this->path);

        return [
            'type' => 'text',
            'source' => $contents,
        ];
    }
}
