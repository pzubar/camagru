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

	/**
	 *
	 *
	 * @param $route array
	 *
	 */

    public function __construct(array $route)
    {
        $this->route = $route;
        $this->path = $route['controller'] . '/' . $route['action'];
    }

    public function render($title, $vars = [])
    {

        $file = 'application/views/' . $this->path . '.php';
        if (file_exists($file)) {
            ob_start();
            require $file;
            $content = ob_get_clean();
            require 'application/views/layouts/' . $this->layout . '.php';
        } else {
            echo 'No View found';
        }
    }
}