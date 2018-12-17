<?php
	
	namespace application\core;
	
	abstract class Controller
	{
		public $route;
		public $view;
		protected $model;
		
		public function __construct(array $route)
		{
			$this->route = $route;
			$this->view = new View($route);
			$this->model = $this->loadModel($route['controller']);
		}
		
		public function loadModel(string $name)
		{
			$path = 'application\models\\' . ucfirst($name);
			if (class_exists($path)) {
				return new $path;
			}

//		else {
//			View::errorCode(503);
//		}
//		debug($path);$path
			return null;
		}
	}