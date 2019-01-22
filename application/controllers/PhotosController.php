<?php
namespace application\controllers;

use application\core\Controller;

class PhotosController extends Controller
{
    public function newAction() {
//        $result = $this->model->getNews();
//        $vars = [
//            'news' => $result
//        ];
        $this->view->render('New Photo');
    }


}