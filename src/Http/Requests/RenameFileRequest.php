<?php


namespace Stepanenko3\NovaFilemanager\Http\Requests;

use Stepanenko3\NovaFilemanager\Rules\DiskExistsRule;
use Stepanenko3\NovaFilemanager\Rules\PathDoesNotExistInDiskRule;
use Stepanenko3\NovaFilemanager\Rules\PathExistsInDiskRule;

/**
 * @property-read ?string $disk
 * @property-read string $oldPath
 * @property-read string $newPath
 */
class RenameFileRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'disk' => ['sometimes', 'string', new DiskExistsRule()],
            'oldPath' => ['required', 'string', new PathExistsInDiskRule($this->get('disk'))],
            'newPath' => ['required', 'string', new PathDoesNotExistInDiskRule($this->get('disk'))],
        ];
    }
}
