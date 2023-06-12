<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\PathDoesNotExistInDiskRule;
use Stepanenko3\NovaFileManager\Rules\PathExistsInDiskRule;

/**
 * @property ?string $disk
 * @property string $oldPath
 * @property string $newPath
 */
class RenameFolderRequest extends BaseRequest
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
