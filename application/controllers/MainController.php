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
		$postsNum = $this->model->getPostsNum();
		$this->view->render('Home', ['postsNum' => $postsNum]);
	}

	public function postsAction() {

		$result = $this->model->getPosts('1');
		exit(json_encode(['status' => 'success', 'message' => json_encode($result)]));
	}

	public function logoutAction() {
		session_unset();
		$this->view::redirect('/');
	}
	
}