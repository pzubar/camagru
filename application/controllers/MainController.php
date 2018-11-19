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

		$vars = [
			'name' => 'John',
			'age' => 88,
		];

		$db = new Db();
		$data = $db->column('SELECT name FROM user WHERE id = 1');
//		$result
		debug($data);
		$this->view->render('Главная строница', $vars);
	}

	public function contactAction() {
		echo 'Contacts';
	}
}