<?php

namespace Stepanenko3\NovaFileManager\Rules;

use Illuminate\Contracts\Validation\Rule;
use Stepanenko3\NovaFileManager\Http\Requests\BaseRequest;

class ExistsInFilesystem implements Rule
{
    public ?string $path = null;

    public function __construct(public BaseRequest $request)
    {
    }

    public function passes($attribute, $value): bool
    {
        $this->path = $value;

        return empty($value)
            || $value === '/'
            || $this->request->manager()->filesystem()->exists($value);
    }

    public function message(): string
    {
        return __(
            'nova-file-manager::validation.path.missing',
            ['path' => $this->path],
        );
    }
}
