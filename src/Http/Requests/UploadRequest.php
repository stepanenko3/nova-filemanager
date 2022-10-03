<?php


namespace Stepanenko3\NovaFilemanager\Http\Requests;

use Stepanenko3\NovaFilemanager\Rules\DiskExistsRule;
use Stepanenko3\NovaFilemanager\Rules\PathExistsInDiskRule;

/**
 * @property string $disk
 * @property string $path
 * @property \Illuminate\Http\UploadedFile $file
 */
class UploadRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'disk' => ['required', 'string', new DiskExistsRule()],
            'path' => ['required', 'string', new PathExistsInDiskRule($this->get('disk'))],
            'file' => ['required', 'file'],
        ];
    }
}
