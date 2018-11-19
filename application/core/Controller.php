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

	public function __construct($route)
	{
		$this->route = $route;
		$this->view = new View($route);
	}
}