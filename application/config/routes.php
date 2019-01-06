<?php
	
	return array(
		
		'' => [
			'controller' => 'main',
			'action' => 'index'
		],
		
		'account/login' => [
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
		
		'feed' => [
			'controller' => 'feed',
			'action' => 'feed',
		],
	
	);