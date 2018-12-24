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
			$this->view->render('Sign in');
			
		}
		
		public function registerAction()
		{
			if (!empty($_POST)) {
				if (!empty($_POST['email']) && !empty($_POST['login'])) {
					if ($this->model->checkRegisterData($_POST['email'], $_POST['login'])) {
						$this->view->message('fail', 'User with such a login or email already exists');
					} else {
						$this->model->createUser($_POST['email'], $_POST['login'], $_POST['password']);
						$this->model->sendRegisterEmail($_POST['email'], $_POST['login']);
						$this->view->redirect('/account/login?register=success');
					}
				}
			}
			$this->view->render('Sign up');
		}
	}