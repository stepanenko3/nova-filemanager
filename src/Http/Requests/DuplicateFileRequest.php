<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\ExistsInFilesystem;

/**
 * @property ?string $disk
 * @property string $path
 */
class DuplicateFileRequest extends BaseRequest
{
    public function authorize(): bool
    {
        return $this->canDuplicateFile();
    }

    public function rules(): array
    {
        return [
            'disk' => ['sometimes', 'string', new DiskExistsRule()],
            'path' => ['required', 'string', new ExistsInFilesystem($this)],
        ];
    }
}
