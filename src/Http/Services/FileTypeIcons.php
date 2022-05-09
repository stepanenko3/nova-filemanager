<?php

namespace Stepanenko3\NovaFilemanager\Http\Services;

use Illuminate\Support\Str;

class FileTypeIcons
{
    public function __construct(
        private $iconSize,
    ) {
        //
    }

    public static function getInstance($iconSize = null)
    {
        if (!$iconSize) {
            $iconSize = config('nova-filemanager.iconSize');
        }

        return new self($iconSize);
    }

    /**
     * @param $mime
     * @return mixed
     */
    public function getIcon($mime)
    {
        if ($this->checkMime($mime, 'parentDir')) {
            return $this->parentDir();
        }

        if ($this->checkMime($mime, 'dir')) {
            return $this->dir();
        }

        if ($this->checkMime($mime, 'pdf')) {
            return $this->pdf();
        }

        if ($this->checkMime($mime, 'audio')) {
            return $this->audio();
        }

        if ($this->checkMime($mime, 'video')) {
            return $this->video();
        }

        if ($this->checkMime($mime, 'zip') || $this->checkMime($mime, 'rar') || $this->checkMime($mime, 'octet-stream')) {
            return $this->compress();
        }

        if ($this->checkMime($mime, 'excel')) {
            return $this->excel();
        }

        if ($this->checkMime($mime, 'word') || $this->checkMime($mime, 'doc') || $this->checkMime($mime, 'docx')) {
            return $this->pdf();
        }

        return $this->file();
    }

    /**
     * Check if mime has type.
     *
     * @param   string  $mime
     * @param   string  $type
     *
     * @return  bool
     */
    private function checkMime($mime, $type)
    {
        if (Str::contains($mime, $type)) {
            return true;
        }

        return false;
    }

    private function dir()
    {
        return '<svg width="' . $this->iconSize . '" height="' . $this->iconSize . '" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"/></svg>';
    }

    private function parentDir()
    {
        return '<svg width="' . $this->iconSize . '" height="' . $this->iconSize . '" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z" /><path d="M12.307 10.628v5a.32.32 0 0 1-.64 0v-5l-1.68 1.71a.323.323 0 0 1-.49-.42l2.25-2.25a.32.32 0 0 1 .45 0l2.25 2.25a.323.323 0 1 1-.42.49l-1.71-1.71-.01-.07z"/></svg>';
    }

    private function file()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/></svg>';
    }

    private function pdf()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/></svg>';
    }

    private function audio()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M8 14.54V6a1 1 0 0 1 .76-.97l12-3A1 1 0 0 1 22 3v12a4 4 0 1 1-2-3.46V4.28l-10 2.5V18a4 4 0 1 1-2-3.46zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>';
    }

    private function video()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M16 8.38l4.55-2.27A1 1 0 0 1 22 7v10a1 1 0 0 1-1.45.9L16 15.61V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1.38zm0 2.24v2.76l4 2V8.62l-4 2zM14 17V7H4v10h10z"/></svg>';
    }

    private function compress()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>';
    }

    private function excel()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"/></svg>';
    }

    private function word()
    {
        return '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' . $this->iconSize . '" height="' . $this->iconSize . '"><path class="heroicon-ui" d="M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z"/></svg>';
    }
}
