<?php

namespace Stepanenko3\NovaFileManager\Http\Requests;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Stepanenko3\NovaFileManager\Rules\DiskExistsRule;
use Stepanenko3\NovaFileManager\Rules\FileMissingInFilesystem;

class UploadFileRequest extends BaseRequest
{
    public function authorize(): bool
    {
        if (!$this->canUploadFile()) {
            return false;
        }

        $path = ltrim(
            string: dirname(
                path: $this->input('resumableFilename'),
            ),
            characters: '/.'
        );

        if (!empty($path) && !$this->canCreateFolder()) {
            return false;
        }

        return true;
    }

    public function authorizationActionAttribute(
        ?string $class = null,
    ): string {
        if (!$this->canUploadFile()) {
            return parent::authorizationActionAttribute();
        }

        return parent::authorizationActionAttribute(
            class: CreateFolderRequest::class,
        );
    }

    public function rules(): array
    {
        return [
            'disk' => [
                'sometimes',
                'string',
                new DiskExistsRule(),
            ],
            'path' => [
                'required',
                'string',
            ],
            'file' => array_merge(
                [
                    'required',
                    'file',
                    new FileMissingInFilesystem(
                        request: $this,
                    ),
                ],
                $this->element()->getUploadRules(),
            ),
        ];
    }

    public function validateUpload(
        ?UploadedFile $file = null,
        bool $saving = false,
    ): bool {
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
        $path = implode(
            separator: '/',
            array: array_filter([
                Str::finish(
                    value: $this->path,
                    cap: '/',
                ),
                ltrim(
                    string: $this->input('resumableFilename'),
                    characters: '/',
                ),
            ])
        );

        return str_replace('//', '/', $path);
    }
}
