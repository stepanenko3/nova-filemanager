<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\MissingInFilesystem;

class CreateFolderRequest extends BaseRequest
{
    public function authorize(): bool
    {
        return $this->canCreateFolder();
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
                'required',
                'string',
                'min:1',
                new MissingInFilesystem(
                    request: $this,
                ),
            ],
        ];
    }
}
