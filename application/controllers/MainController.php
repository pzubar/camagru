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
//		echo 'Index Page';
		$this->view->render('Главная строница');
	}

	public function contactAction() {
		echo 'Contacts';
	}
}