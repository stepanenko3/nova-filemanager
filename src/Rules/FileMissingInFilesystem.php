<?php

namespace Stepanenko3\NovaFileManager\Rules;

use Illuminate\Contracts\Validation\Rule;
use Stepanenko3\NovaFileManager\Http\Requests\UploadFileRequest;

class FileMissingInFilesystem implements Rule
{
    public function __construct(
        public UploadFileRequest $request,
    ) {
        //
    }

    public function passes(
        $attribute,
        $value,
    ): bool {
        return $this->request
            ->manager()
            ->filesystem()
            ->missing(
                $this->request->filePath(),
            );
    }

    public function message(): string
    {
        return __(
            'nova-file-manager::validation.path.exists',
            [
                'path' => $this->request->filePath(),
            ],
        );
    }
}
