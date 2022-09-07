<?php


namespace Stepanenko3\NovaFilemanager\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class PathExistsInDiskRule implements Rule
{
    public function __construct(
        public ?string $disk = null
    ) {
    }

    public function passes($attribute, $value): bool
    {
        return empty($value)
            || $value === '/'
            || empty($this->disk)
            || Storage::disk($this->disk)->exists($value);
    }

    public function message(): string
    {
        return __('validation.exists');
    }
}
