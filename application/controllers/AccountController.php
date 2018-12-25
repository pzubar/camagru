<?php
	
	namespace application\controllers;
	
	use application\core\Controller;
	
	
	class AccountController extends Controller
	{
		public function loginAction($message = null)
		{
			if (!empty($_POST)) {
				$this->view->message('success', 'message');
			}
			if ($message === "check-email")
				$message = "Check your email, we sent an account confirmation letter!";
			else {
//				$this->view->redirect('/404');
				$this->view->errorCode(404);
			}
			$this->view->render('Sign in', ['message'=>$message]);
			
		}
		
		public function registerAction()
		{
			if (!empty($_POST)) {
				if (!empty($_POST['email']) && !empty($_POST['login'])) {
					if ($this->model->checkRegisterData($_POST['email'], $_POST['login'])) {
						$this->view->message('fail', 'User with such a login or email already exists');
					} else {
						$this->model->createUser($_POST['email'], $_POST['login'], $_POST['password']);
						$this->model->sendRegisterEmail($_POST['email'], $_POST['login'], date("Y-m-d H:i:s"));
						$this->view->redirect('/account/login/check-email');
					}
				}
			}
			$this->view->render('Sign up');
		}
	}