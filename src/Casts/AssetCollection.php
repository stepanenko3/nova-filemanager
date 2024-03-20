<?php

namespace Stepanenko3\NovaFileManager\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use InvalidArgumentException;
use Stepanenko3\NovaFileManager\Support\Asset;

class AssetCollection implements CastsAttributes
{
    public function get(
        Model $model,
        string $key,
        mixed $value,
        array $attributes,
    ): Collection {
        if ($value === null) {
            return collect();
        }

        return collect(json_decode($value, true, 512, JSON_THROW_ON_ERROR))
            ->map(fn (array $file) => new Asset(...$file));
    }

    public function set(
        Model $model,
        string $key,
        $value,
        array $attributes,
    ): string {
        if ($value instanceof Collection) {
            return $value->toJson();
        }

        throw new InvalidArgumentException('Invalid value for asset cast.');
    }
}
