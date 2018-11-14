<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 14.11.2018
 * Time: 21:04
 */

namespace application\core;


class View
{

	public $path;
	public $layout = 'default';
	public $route;

	public function __construct($route)
	{
		$this->route = $route;
		$this->path = $route['controller'] . '/' . $route['action'];
//		debug($this->path);
	}

	public function render($title, $vars = [])
	{
		require 'application/views/layouts/'.$this->layout.'.php';
	}
}