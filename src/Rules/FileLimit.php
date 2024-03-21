<?php

namespace Stepanenko3\NovaFileManager\Rules;

use Illuminate\Contracts\Validation\Rule;

class FileLimit implements Rule
{
    public string $attribute;

    public function __construct(
        public int $min = 1,
        public ?int $max = null,
    ) {
        //
    }

    public function passes(
        $attribute,
        $value,
    ): bool {
        $this->attribute = $attribute;

        $value = collect(
            json_decode(
                json: $value,
                associative: true,
                depth: 512,
                flags: JSON_THROW_ON_ERROR
            ),
        );

        $total = $value->count();

        return max($this->min, 0) <= $total && max($this->max, 0) >= $total;
    }

    public function message(): string
    {
        return __(
            'validation.between.array',
            [
                'attribute' => $this->attribute,
                'min' => $this->min,
                'max' => $this->max,
            ]
        );
    }
}
