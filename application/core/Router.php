<?php

namespace application\core;

class Router
{
    private $routes;

    public function __construct()
    {
//        $routesPath = ROOT.'/config/routes.php';
//        $this->routes = include($routesPath);
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
        //get query string
        $uri = $this->getURI();
        //check existing this query in routes.php
        foreach ($this->routes as $uriPattern => $path) {

            if (preg_match("~$uriPattern~", $uri))
            {
                //get which controller and action works on this query
                $segments = explode('/', $path);

                $controllerName = array_shift($segments).'Controller';
                $controllerName = ucfirst($controllerName);

                $actionName = 'action'.ucfirst(array_shift($segments));

                $controllerFile = ROOT.'/controllers/'.$controllerName.'.php';
                if (file_exists($controllerFile))
                    include_once($controllerFile);

                $controllerObject = new $controllerName;
                $result = $controllerObject->$actionName();

                if ($result != null)
                    break;
            }
        }

    }
}