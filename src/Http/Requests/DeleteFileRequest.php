<?php


namespace Stepanenko3\NovaFilemanager\Http\Requests;

use Stepanenko3\NovaFilemanager\Rules\DiskExistsRule;
use Stepanenko3\NovaFilemanager\Rules\PathExistsInDiskRule;

/**
 * @property-read ?string $disk
 * @property-read string $path
 */
class DeleteFileRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'disk' => ['sometimes', 'string', new DiskExistsRule()],
            'path' => ['required', 'string', new PathExistsInDiskRule($this->get('disk'))],
        ];
    }
}
