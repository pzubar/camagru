<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 14.11.2018
 * Time: 20:28
 */

namespace application\controllers;

use application\core\Controller;

class MainController extends Controller
{
	public function indexAction() {
		$result = $this->model->getPosts();
		$vars = [
			'news' => $result
		];
		$this->view->render('Главная строница', $vars);
	}

	public function logoutAction() {
		session_unset();
		$this->view::redirect('/');
	}
	
}