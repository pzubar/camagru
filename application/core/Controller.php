<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 14.11.2018
 * Time: 19:54
 */

namespace application\core;

abstract class Controller
{
	public $route;
	public $view;

	public function __construct(array $route)
	{
		$this->route = $route;
		$this->view = new View($route);
		$this->loadModel($route['controller']);
	}
	
	public function loadModel(string $name) {
		$path = 'application\models\\'.ucfirst($name);
		if (class_exists($path)) {
			return new $path;
		} else {
			View::errorCode(503);
		}
		debug($path);
	}
}