<?php

return [

    'edition' => 'pro',

    'license_key' => env('STATAMIC_LICENSE_KEY'),

    'cp' => [
        'enabled' => true,
    ],

    'routes' => [
        'enabled' => true,
    ],

    'sites' => [
        'default' => [
            'name' => 'Default Site',
            'locale' => 'en_US',
            'url' => '/',
        ],
    ],

];
