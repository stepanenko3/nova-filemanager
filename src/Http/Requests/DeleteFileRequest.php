<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\ExistsInFilesystem;

class DeleteFileRequest extends BaseRequest
{
    public function authorize(): bool
    {
        return $this->canDeleteFile();
    }

    public function rules(): array
    {
        return [
            'disk' => [
                'sometimes',
                'string',
                new DiskExistsRule(),
            ],
            'paths' => [
                'required',
                'array',
            ],
            'paths.*' => [
                'required',
                'string',
                new ExistsInFilesystem(
                    request: $this,
                ),
            ],
        ];
    }
}
