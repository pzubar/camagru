<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 04.11.2018
 * Time: 21:43
 */
ini_set('display_errors', 1);
error_reporting(E_ALL);
//
define('ROOT', dirname(__FILE__));
require_once(ROOT.'/components/Router.php');

$router = new Router();
$router->run();

if (!file_exists(ROOT."config/success"))
{
    if (file_exists(ROOT . '/views/install_form.php'))
        header('Location: ' . '/install');
}
die;
    //{
//    echo 'a';
//    header('Location: ' . ROOT . '/views/install_form.php');
//}

//var_dump($_SERVER);

//phpinfo();