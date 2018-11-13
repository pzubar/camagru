<?php

require 'application/Dev.php';

define('ROOT', dirname(__FILE__));

use application\core\Router;

spl_autoload_register(function($class) {
    $path = str_replace('\\', '/', $class.'.php');
    if (file_exists($path)) {
        require $path;
    }
});

$router = new Router();

//$router->run();
//
//if (!file_exists(ROOT."config/success"))
//{
//    if (file_exists(ROOT . '/views/install_form.php'))
//        header('Location: ' . '/install');
//}
//die;
    //{
//    echo 'a';
//    header('Location: ' . ROOT . '/views/install_form.php');
//}

//var_dump($_SERVER);

//phpinfo();