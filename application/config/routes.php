<?php
return array(
	'' => [
		'controller' => 'main',
		'action' => 'index'
	],

	'posts(\?.*)' => [
		'controller' => 'main',
		'action' => 'posts'
	],

	'logout' => [
		'controller' => 'main',
		'action' => 'logout'
	],

	'account/settings' => [
		'controller' => 'account',
		'action' => 'settings',
	],

	'account/login(/[a-z-]*)?' => [
		'controller' => 'account',
		'action' => 'login',
	],

	'account/auth/[a-z0-9]+' => [
		'controller' => 'account',
		'action' => 'auth',
	],

	'account/remind-password(/[a-z0-9]+)?' => [
		'controller' => 'account',
		'action' => 'remindPassword',
	],

	'account/register' => [
		'controller' => 'account',
		'action' => 'register',
	],

	'photos/new' => [
		'controller' => 'photos',
		'action' => 'new',
	],

	'photos/create(\?.*)?' => [
		'controller' => 'photos',
		'action' => 'create',
	],

	'photos/comment' => [
		'controller' => 'photos',
		'action' => 'comment',
	],

	'photos/like' => [
		'controller' => 'photos',
		'action' => 'like',
	],

	'photos/remove' => [
		'controller' => 'photos',
		'action' => 'remove',
	]
);