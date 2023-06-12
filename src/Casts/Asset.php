<?php

namespace Stepanenko3\NovaFileManager\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;
use Stepanenko3\NovaFileManager\Support\Asset as AssetObject;

class Asset implements CastsAttributes
{
    /**
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param null|string $value
     *
     * @throws \JsonException
     */
    public function get($model, string $key, $value, array $attributes): ?AssetObject
    {
        if ($value === null) {
            return null;
        }

        return new AssetObject(...json_decode($value, true, 512, JSON_THROW_ON_ERROR));
    }

    /**
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param null|array|AssetObject $value
     *
     * @throws \JsonException
     */
    public function set($model, string $key, $value, array $attributes): ?string
    {
        if ($value === null) {
            return null;
        }

        if (is_array($value) || $value instanceof AssetObject) {
            return json_encode($value, JSON_THROW_ON_ERROR);
        }

        throw new InvalidArgumentException('Invalid value for Asset cast');
    }
}
