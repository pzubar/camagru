<?php
	
	namespace application\core;
	
	class Router
	{
		private $routes = [];
		private $params = [];
		private $queryParams = [];
		
		/**
		 * initializing routes from routes file
		 */
		public function __construct()
		{
			$routes = require ROOT . '/application/config/routes.php';
			foreach ($routes as $route => $val) {
				$this->add($route, $val);
			}
		}
		
		/**
		 * adding routes to Router object like regular expression
		 *
		 * @param $route - future route name (e.g. "" for index page etc.)
		 * @param $params - array from routes file to place into each route pair
		 */
		public function add(string $route, array $params)
		{
			$route = '#^' . $route . '$#';
			$this->routes[$route] = $params;
		}
		
		/**
		 * checking for regex matching of requested url to any route
		 * adding queryParams
		 * @return bool
		 */
		public function match()
		{
			$url = trim($_SERVER['REQUEST_URI'], '/');
			
			foreach ($this->routes as $route => $params) {
				if (preg_match($route, $url, $matches)) {
					$this->params = $params;
					$segments = explode('/', $url);
					$this->queryParams = array_slice($segments, 2);
					return true;
				}
			}
			return false;
		}
		
		/**
		 * running Router object
		 *
		 */
		public function run()
		{
			if ($this->match()) {
				$controller = $this->params['controller'];
				if (!isset($_SESSION['logged_user']) && $controller != 'main' && $controller !== 'account')
					View::redirect('/');
				$path = 'application\controllers\\' . ucfirst($this->params['controller']) . 'Controller';
				if (class_exists($path)) {
					$action = $this->params['action'] . 'Action';
					if (method_exists($path, $action)) {
						$controller = new $path($this->params);
						call_user_func_array(array($controller, $action), $this->queryParams);
					} else {
						View::errorCode(404);
					}
				} else {
					View::errorCode(404);
				}
			} else
				View::errorCode(404);
		}
	}