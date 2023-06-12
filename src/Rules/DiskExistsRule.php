<?php

namespace Stepanenko3\NovaFileManager\Rules;

use Illuminate\Contracts\Validation\Rule;

class DiskExistsRule implements Rule
{
    public function passes($attribute, $value): bool
    {
        $inFilemanagerAvailableDisks = in_array($value, config('nova-file-manager.available_disks'), true);

        $inFilesystemsDisks = array_key_exists($value, config('filesystems.disks'));

        return $value === null || ($inFilemanagerAvailableDisks && $inFilesystemsDisks);
    }

    public function message(): string
    {
        return __('validation.exists');
    }
}
