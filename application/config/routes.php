<?php

return array(

    '' => [
        'controller' => 'main',
        'action' => 'index'
    ],

    'account/login(/[a-z]+)?' => [
        'controller' => 'account',
        'action' => 'login',
    ],

	'account/register' => [
		'controller' => 'account',
		'action' => 'register',
	],

);