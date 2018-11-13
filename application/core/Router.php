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

//    Returns request string
    private function getURI()
    {
        if (!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
        return '';
    }

    public  function run()
    {
        if ($this->match())
            echo 'OK';
        else
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