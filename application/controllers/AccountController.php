<?php

namespace application\controllers;

use application\core\Controller;

class AccountController extends Controller
{
	public function loginAction()
	{
		if (!empty($_POST))
//			$this->view->message('success', 'message');
//			$this->view->location('/account/register');
			var_dump($_POST);
        $this->view->render('Sign in');
	}

	public function registerAction()
	{
//		$this->view->layout = 'custom';
        $this->view->render('Sign up');
	}
}