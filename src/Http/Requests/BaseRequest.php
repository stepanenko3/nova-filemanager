<?php


namespace Stepanenko3\NovaFilemanager\Http\Requests;

use Stepanenko3\NovaFilemanager\Contracts\FilemanagerContract;
use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest
{
    protected ?FilemanagerContract $manager = null;

    public function authorize(): bool
    {
        return true;
    }

    public function manager(): FilemanagerContract
    {
        return app(FilemanagerContract::class);
    }
}
