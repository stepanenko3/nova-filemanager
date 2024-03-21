<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\ExistsInFilesystem;
use Stepanenko3\NovaFileManager\Rules\MissingInFilesystem;

class RenameFolderRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'disk' => [
                'sometimes',
                'string',
                new DiskExistsRule(),
            ],
            'from' => [
                'required',
                'string',
                new ExistsInFilesystem(
                    request: $this,
                ),
            ],
            'to' => [
                'required',
                'string',
                new MissingInFilesystem(
                    request: $this,
                ),
            ],
        ];
    }
}
