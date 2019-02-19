<?php

	namespace application\controllers;

	use application\core\Controller;
	use Exception;

	class AccountController extends Controller
	{
		public function loginAction($message = null)
		{
			if (isset($_SESSION['logged_user']))
				$this->view::redirect('/');
			if (!empty($_POST) && !empty($_POST['login']) && !empty($_POST['password'])) {
				try {
					$this->model->loginUser($_POST['login'], $_POST['password']);
				} catch (Exception $exception) {
					$this->view->message('error', $exception->getMessage());
				}
				$this->view->message('success', 'message');
			}
			if ($message) {
				if ($message === "check-email")
					$message = "Check your email, we sent an account confirmation letter!";
				else if ($message === "activation-success")
					$message = "Your account was successfully activated";
				else {
					$this->view->errorCode(404);
				}
			}
			$this->view->render('Sign in', ['message' => $message]);
		}

		public function registerAction()
		{
			if (isset($_SESSION['logged_user']))
				$this->view::redirect('/');
			if (!empty($_POST)) {
				if (!empty($_POST['email']) && !empty($_POST['login'])) {
					if ($this->model->checkRegisterData($_POST['email'], $_POST['login'])) {
						$this->view->message('fail', 'User with such a login or email already exists');
					} else {
						$this->model->createUser($_POST['email'], $_POST['login'], $_POST['password']);
						$this->view->redirect('/account/login/check-email');
					}
				}
			}
			$this->view->render('Sign up');
		}

		public function authAction($hash = null)
		{
			if ($hash) {
				$this->model->activateUser($hash);
				$this->view->redirect('/account/login/activation-success');
			} else
				$this->view::redirect('/');
		}

		public function remindPasswordAction()
		{
			if (isset($_SESSION['logged_user']))
				$this->view::redirect('/');
			$this->view->render('Remind password');
		}


	}