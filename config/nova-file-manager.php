<?php

return [
    'path' => 'file-manager',

    'mime_types' => [
        'image' => [
            'image/',
            'svg',
        ],
        'audio' => [
            'audio/',
        ],
        'video' => [
            'video/',
        ],
        'pdf' => [
            'application/pdf',
        ],
        'archive' => [
            'zip',
            'rar',
            'tar',
            'gz',
            '7z',
            'pkg',
            'application/x-compressed',
        ],
        'text' => [
            'text/',
            'rtf',
            'json',
            'javascript',
            '/xml',
            'sql',
        ],
        'word' => [
            'wordprocessingml',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | File manager  filters
    |--------------------------------------------------------------------------
    | This option let you to filter your files by extensions.
    | You can create|modify|delete as you want.
     */

    'filters' => [
        'images' => ['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'tiff'],

        'documents' => ['json', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pps', 'pptx', 'odt', 'rtf', 'md', 'txt', 'css'],

        'videos' => ['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv', '3gp', 'h264'],

        'audios' => ['mp3', 'ogg', 'wav', 'wma', 'midi'],

        'archive' => ['zip', 'rar', 'tar', 'gz', '7z', 'pkg'],
    ],

    /*
    |--------------------------------------------------------------------------
    | File manager  default filter
    |--------------------------------------------------------------------------
    | This will set the default filter for all your File manager. You should use one
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
        // 'ftp',
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
    | Human readable file size
    |--------------------------------------------------------------------------
    |
    | If set to true, the tool will display the file size in a parsed and more
    | readable format. Otherwise, it will display the raw byte size.
    |
    | default: true
    */
    'human_readable_size' => env('NOVA_FILE_MANAGER_HUMAN_READABLE_SIZE', true),

    /*
    |--------------------------------------------------------------------------
    | Human readable timestamps
    |--------------------------------------------------------------------------
    |
    | If set to true, the tool will display datetime string in a human-readable
    | difference format. Otherwise, it will display the regular datetime value.
    |
    | default: true
    */
    'human_readable_datetime' => env('NOVA_FILE_MANAGER_HUMAN_READABLE_DATETIME', true),

    /*
    |--------------------------------------------------------------------------
    | Entities map
    |--------------------------------------------------------------------------
    |
    | Here you can override or define new entity types that can be used to map
    | the files in your storage.
    |
    | Should extend \Stepanenko3\NovaFileManager\Entities\Entity::class
    |
    */
    'entities' => [
        'image' => \Stepanenko3\NovaFileManager\Entities\Image::class,
        'video' => \Stepanenko3\NovaFileManager\Entities\Video::class,
        'text' => \Stepanenko3\NovaFileManager\Entities\Text::class,
        'default' => \Stepanenko3\NovaFileManager\Entities\File::class,
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
        'enabled' => env('NOVA_FILE_MANAGER_URL_SIGNING_ENABLED', false),
        'unit' => 'minutes',
        'value' => 10,
    ],

    /*
    |--------------------------------------------------------------------------
    | Update checker
    |--------------------------------------------------------------------------
    |
    | The tool provides a handy update checker that will notify you when a new
    | version is available. You can disable it if you don't want to receive
    | these notifications.
    |
    */
    'update_checker' => [
        'enabled' => env('NOVA_FILE_MANAGER_UPDATE_CHECKER_ENABLED', true),
        'ttl_in_days' => env('NOVA_FILE_MANAGER_UPDATE_CHECKER_TTL_IN_DAYS', 1),
    ],
];
