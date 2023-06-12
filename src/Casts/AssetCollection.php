<?php

namespace Stepanenko3\NovaFileManager\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Support\Collection;
use InvalidArgumentException;
use Stepanenko3\NovaFileManager\Support\Asset;

class AssetCollection implements CastsAttributes
{
    /**
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param string $value
     *
     * @throws \JsonException
     *
     * @return \Illuminate\Support\Collection<\Stepanenko3\NovaFileManager\Support\Asset>
     */
    public function get($model, string $key, $value, array $attributes): Collection
    {
        if ($value === null) {
            return collect();
        }

        return collect(json_decode($value, true, 512, JSON_THROW_ON_ERROR))
            ->map(fn (array $file) => new Asset(...$file));
    }

    /**
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param \Illuminate\Support\Collection<\Stepanenko3\NovaFileManager\Support\Asset> $value
     */
    public function set($model, string $key, $value, array $attributes): string
    {
        if ($value instanceof Collection) {
            return $value->toJson();
        }

        throw new InvalidArgumentException('Invalid value for asset cast.');
    }
}
