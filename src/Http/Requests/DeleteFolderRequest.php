<?php


namespace Stepanenko3\NovaFilemanager\Http\Requests;

use Stepanenko3\NovaFilemanager\Rules\DiskExistsRule;
use Stepanenko3\NovaFilemanager\Rules\PathExistsInDiskRule;

/**
 * @property-read ?string $disk
 * @property-read string $path
 */
class DeleteFolderRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'disk' => ['sometimes', 'string', new DiskExistsRule()],
            'path' => ['sometimes', 'string', new PathExistsInDiskRule($this->get('disk'))],
        ];
    }
}
