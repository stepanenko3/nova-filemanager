<?php

namespace Stepanenko3\NovaFileManager\Rules;

use Illuminate\Contracts\Validation\Rule;

class DiskExistsRule implements Rule
{
    public function passes(
        $attribute,
        $value
    ): bool {
        $inFilemanagerAvailableDisks = in_array(
            needle: $value,
            haystack: config('nova-file-manager.available_disks'),
            strict: true,
        );

        $inFilesystemsDisks = array_key_exists(
            key: $value,
            array: config('filesystems.disks')
        );

        return $value === null || ($inFilemanagerAvailableDisks && $inFilesystemsDisks);
    }

    public function message(): string
    {
        return __('validation.exists');
    }
}
