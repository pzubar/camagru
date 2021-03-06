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
		 * @param $route array
		 */
		
		public function __construct(array $route)
		{
			$this->route = $route;
			$this->path = $route['controller'] . '/' . $route['action'];
		}
		
		public function render($title, $vars = [])
		{
			extract($vars);
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
		
		public static function redirect($url)
		{
			header('location: ' . $url);
			exit;
		}
		
		public static function errorCode($code)
		{
			$file = 'application/views/layouts/errors/' . $code . '.php';
			
			http_response_code($code);
			if (file_exists($file))
				require $file;
			exit;
		}

		public function message($status, $message) {
			exit(json_encode(['status'=>$status, 'message'=>$message]));
		}

		public function location($url) {
			exit(json_encode(['url'=>$url]));
		}
		
	}