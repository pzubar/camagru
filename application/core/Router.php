<?php

namespace application\core;

class Router
{
    private $routes = [];
    private $params = [];

    public function __construct()
    {
        $arr = require ROOT.'/application/config/routes.php';
        foreach ($arr as $key => $val) {
            $this->add($key, $val);
        }
//        debug($this->routes);
    }

    public function add($route, $params) {
        $route = '#^' . $route . '$#';
        $this->routes[$route] = $params;
    }

    public function match() {
        $url = trim($_SERVER['REQUEST_URI'], '/');
        foreach ($this->routes as $route => $params) {
            if (preg_match($route, $url,$matches)) {
                $this->params = $params;
                return true;
            }
        }
        return false;
    }

    public  function run()
    {
        if ($this->match())
        {
            $path = 'application\controllers\\' . ucfirst($this->params['controller']) . 'Controller';
            if (class_exists($path)) {
                $action = $this->params['action'].'Action';
                if (method_exists($path, $action)) {
                    $controller = new $path;
                    $controller->$action();
                } else {
                    echo 'No action found: ' . $action;
                }
            } else {
                echo 'No controller found: ' . $path;
            }
        } else
            echo '404';


//        echo 'run Router';
//        //get query string
//        $uri = $this->getURI();
//        //check existing this query in routes.php
//        foreach ($this->routes as $uriPattern => $path) {
//
//            if (preg_match("~$uriPattern~", $uri))
//            {
//                //get which controller and action works on this query
//                $segments = explode('/', $path);
//
//                $controllerName = array_shift($segments).'Controller';
//                $controllerName = ucfirst($controllerName);
//
//                $actionName = 'action'.ucfirst(array_shift($segments));
//
//                $controllerFile = ROOT.'/controllers/'.$controllerName.'.php';
//                if (file_exists($controllerFile))
//                    include_once($controllerFile);
//
//                $controllerObject = new $controllerName;
//                $result = $controllerObject->$actionName();
//
//                if ($result != null)
//                    break;
//            }
//        }

    }
}