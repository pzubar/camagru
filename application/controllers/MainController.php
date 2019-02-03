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
		$this->view->render('Home');
	}

	public function postsAction() {
		$result = $this->model->getPosts();
//		$vars = [
//			'posts' => $result
//		];
		exit(json_encode(['status' => 'success', 'message' => json_encode($result)]));
	}

	public function logoutAction() {
		session_unset();
		$this->view::redirect('/');
	}
	
}