<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\ExistsInFilesystem;

class IndexRequest extends BaseRequest
{
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
                new ExistsInFilesystem($this),
            ],
            'page' => [
                'sometimes',
                'numeric',
                'min:1',
            ],
            'perPage' => [
                'sometimes',
                'numeric',
                'min:1',
            ],
            'search' => [
                'nullable',
                'string',
            ],
            'period' => [
                'nullable',
                'string',
            ],
            'sort' => [
                'nullable',
                'string',
                'in:date,date-desc,name,name-desc,size,size-desc',
            ],
        ];
    }
}
