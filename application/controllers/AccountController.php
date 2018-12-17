<?php

namespace application\controllers;

use application\core\Controller;

class AccountController extends Controller
{
	public function loginAction()
	{
//		$_POST = null;
		if (!empty($_POST)) {
			$this->view->message('success', 'message');
		}

//
//			$this->view->location('/account/register');
//			var_dump($_POST);
        $this->view->render('Sign in');

	}

	public function registerAction()
	{
//		$this->view->layout = 'custom';


        if (!empty($_POST)) {
//            $this->view->message('success', 'message');
//            echo ($_POST);

//            echo '<script>';
//            echo 'console.log('. json_encode( $_POST ) .')';
//            echo '</script>';
//            $this->view->message('success', json_encode($_POST));
            if (!empty($_POST['email']) && !empty($_POST['login']))
            {
//                debug($_POST);
                $this->model->checkRegisterData($_POST['email'], $_POST['login']);
                $this->model->createUser($_POST['email'], $_POST['login'], $_POST['password']);
            }
        }
        $this->view->render('Sign up');
	}
}