<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 14.11.2018
 * Time: 20:28
 */

namespace application\controllers;

use application\core\Controller;
use application\lib\Db;

class MainController extends Controller
{
	public function indexAction() {


		
//		$params = [
//			'id' => '3; DELETE FROM user',
//		];
//
//		$db = new Db();
////		$q = '2; DELETE FROM user';
//		$data = $db->row('SELECT name FROM user WHERE id = :id', $params);
////		$result
//		debug($data);
		$result = $this->model->getNews();
		$vars = [
			'news' => $result
		];
		$this->view->render('Главная строница', $vars);
	}

	public function contactAction() {
		echo 'Contacts';
	}
}