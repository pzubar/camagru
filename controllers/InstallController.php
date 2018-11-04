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
        include_once (ROOT.'/views/install_form.php');
        return true;
    }
}