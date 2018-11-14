<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 04.11.2018
 * Time: 22:19
 */

class InstallController
{
    public function actionView()
    {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            include_once(ROOT . '/config/install.php');
            die;
        }
        include_once(ROOT . '/views/install_form.php');
        die;
    }
}