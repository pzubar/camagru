<?php
	
	return array(
		
		'' => [
			'controller' => 'main',
			'action' => 'index'
		],
		
		'logout' => [
			'controller' => 'main',
			'action' => 'logout'
		],
		
		'account/login(/[a-z-]*)?' => [
			'controller' => 'account',
			'action' => 'login',
		],
		
		'account/auth/[a-z0-9]+' => [
			'controller' => 'account',
			'action' => 'auth',
		],
		
		'account/register' => [
			'controller' => 'account',
			'action' => 'register',
		],
		
		'photos/new' => [
			'controller' => 'photos',
			'action' => 'new',
		],

        'photos/create' => [
            'controller' => 'photos',
            'action' => 'create',
        ],
	
	);