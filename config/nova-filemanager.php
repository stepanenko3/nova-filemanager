<?php

return [
    'path' => 'filemanager',

    'mime_types' => [
        'image' => ['image/'],

        'audio' => ['audio/'],

        'video' => ['video/'],

        'pdf' => ['application/pdf'],

        'compressed' => ['zip', 'rar', 'tar', 'gz', '7z', 'pkg'],

        'text' => [
            'text/',
            'rtf',
            'json',
            'javascript',
            '/xml',
            'sql',
        ],

        'word' => ['wordprocessingml'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Filemanager  filters
    |--------------------------------------------------------------------------
    | This option let you to filter your files by extensions.
    | You can create|modify|delete as you want.
     */

    'filters' => [
        'images' => ['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'tiff'],

        'documents' => ['json', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pps', 'pptx', 'odt', 'rtf', 'md', 'txt', 'css'],

        'videos' => ['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv', '3gp', 'h264'],

        'audios' => ['mp3', 'ogg', 'wav', 'wma', 'midi'],

        'compressed' => ['zip', 'rar', 'tar', 'gz', '7z', 'pkg'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Filemanager  default filter
    |--------------------------------------------------------------------------
    | This will set the default filter for all your Filemanager. You should use one
    | of the keys used in filters in lowercase. If you have a key called Documents,
    | use 'documents' as your default filter. Default to false
     */
    'filter' => false,

    /*
    |--------------------------------------------------------------------------
    | Default Disk
    |--------------------------------------------------------------------------
    |
    | Can be used to set the default disk used by the tool.
    | When no disk is selected, the tool will use the default public disk.
    |
    | default: public
    */
    'default_disk' => env('NOVA_FILE_MANAGER_DISK', 'public'),

    /*
    |--------------------------------------------------------------------------
    | Available disks
    |--------------------------------------------------------------------------
    |
    | Can be used to specify the filesystem disks that can be available in the
    | tool. Note that the default disk (in this case "PUBLIC") is required to
    | be in this array.
    |
    | The disks should be defined in the filesystems.php config.
    |
    */
    'available_disks' => [
        'public',
        'upload',
        // 's3',
        //  'ftp',
        // ... more disks
    ],

    /*
    |--------------------------------------------------------------------------
    | Show hidden files
    |--------------------------------------------------------------------------
    |
    | Toggle whether the tool should show the files and directories which name
    | starts with "."
    |
    | default: false
    */
    'show_hidden_files' => env('NOVA_FILE_MANAGER_SHOW_HIDDEN_FILES', false),

    /*
    |--------------------------------------------------------------------------
    | Entities map
    |--------------------------------------------------------------------------
    |
    | Here you can override or define new entity types that can be used to map
    | the files in your storage.
    |
    | Should extend \Bbs\NovaFilemanager\Entities\Entity::class
    |
    */
    'entities' => [
        'image' => \Stepanenko3\NovaFilemanager\Entities\Image::class,
        'video' => \Stepanenko3\NovaFilemanager\Entities\Video::class,
        'text' => \Stepanenko3\NovaFilemanager\Entities\Text::class,
        'default' => \Stepanenko3\NovaFilemanager\Entities\File::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | URL Signing
    |--------------------------------------------------------------------------
    |
    | When using a cloud filesystem disk (e.g. S3), you may wish to provide
    | signed url through the tool. You can enable the setting, and adjust the
    | signing configuration.
    |
    | Uses: Storage::temporaryUrl()
    */
    'url_signing' => [
        'enabled' => env('NOVA_FILE_MANAGER_ENABLED_URL_SIGNING', false),
        'unit' => 'minutes',
        'value' => 10,
    ],
];
