<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\ExistsInFilesystem;

class DeleteFolderRequest extends BaseRequest
{
    public function authorize(): bool
    {
        return $this->canDeleteFolder();
    }

    public function rules(): array
    {
        return [
            'disk' => [
                'sometimes',
                'string',
                new DiskExistsRule(),
            ],
            'path' => [
                'sometimes',
                'string',
                new ExistsInFilesystem(
                    request: $this,
                ),
            ],
        ];
    }
}
