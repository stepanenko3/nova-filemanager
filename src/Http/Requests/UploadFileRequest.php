<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\FileMissingInFilesystem;

/**
 * @property null|string $disk
 * @property string $path
 * @property UploadedFile $file
 */
class UploadFileRequest extends BaseRequest
{
    public function authorize(): bool
    {
        if (!$this->canUploadFile()) {
            return false;
        }

        $path = ltrim(dirname($this->input('resumableFilename')), '/.');

        if (!empty($path) && !$this->canCreateFolder()) {
            return false;
        }

        return true;
    }

    public function authorizationActionAttribute(?string $class = null): string
    {
        if (!$this->canUploadFile()) {
            return parent::authorizationActionAttribute();
        }

        return parent::authorizationActionAttribute(CreateFolderRequest::class);
    }

    public function rules(): array
    {
        return [
            'disk' => ['sometimes', 'string', new DiskExistsRule()],
            'path' => ['required', 'string'],
            'file' => array_merge(
                ['required', 'file', new FileMissingInFilesystem($this)],
                $this->element()->getUploadRules(),
            ),
        ];
    }

    public function validateUpload(?UploadedFile $file = null, bool $saving = false): bool
    {
        if (!$this->element()->hasUploadValidator()) {
            return true;
        }

        $file ??= $this->file('file');

        return call_user_func(
            $this->element()->getUploadValidator(),
            $this,
            $file,
            $saving,
        );
    }

    public function filePath(): string
    {
        $path = implode('/', array_filter([
            Str::finish($this->path, '/'),
            ltrim($this->input('resumableFilename'), '/'),
        ]));

        return str_replace('//', '/', $path);
    }
}
