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
//
if (!file_exists(ROOT."config/success"))
{
//    echo  ROOT . '/views/install_form.php';
    if (file_exists(ROOT . '/views/install_form.php'))
        header('Location:' .'/views/install_form.php');
}
    //{
//    echo 'a';
//    header('Location: ' . ROOT . '/views/install_form.php');
//}

//var_dump($_SERVER);

//phpinfo();