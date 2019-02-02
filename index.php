<?php

require 'application/Dev.php';

define('ROOT', dirname(__FILE__));

use application\core\Router;
use application\lib\Db;

date_default_timezone_set('Europe/Kiev');

spl_autoload_register(function ($class) {
	$path = str_replace('\\', '/', $class . '.php');
	if (file_exists($path)) {
		require $path;
	}
});

session_start();

$router = new Router();
$db = new Db();
$router->run();

///Volumes/Storage/cache/pzubar/Library/Containers/MAMP/php/etc/php.ini