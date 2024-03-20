<?php

namespace Stepanenko3\NovaFileManager\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;
use Stepanenko3\NovaFileManager\Support\Asset as AssetObject;

class Asset implements CastsAttributes
{
    public function get(
        Model $model,
        string $key,
        mixed $value,
        array $attributes,
    ): ?AssetObject {
        if ($value === null) {
            return null;
        }

        return new AssetObject(...json_decode($value, true, 512, JSON_THROW_ON_ERROR));
    }

    public function set(
        Model $model,
        string $key,
        mixed $value,
        array $attributes,
    ): ?string {
        if ($value === null) {
            return null;
        }

        if (is_array($value) || $value instanceof AssetObject) {
            return json_encode($value, JSON_THROW_ON_ERROR);
        }

        throw new InvalidArgumentException('Invalid value for Asset cast');
    }
}
