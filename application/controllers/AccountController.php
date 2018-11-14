<?php

namespace application\controllers;

use application\core\Controller;

class AccountController extends Controller
{
	public function loginAction()
	{
		echo 'Entry point';
	}

	public function registerAction()
	{
		echo 'AccountController registerAction()';
		var_dump($this->route);
	}
}