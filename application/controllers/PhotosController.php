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
//        debug(gd_info());
//        $this->view->render('New Photo');
//        debug('la');
        $dest = imagecreatefrompng('application/controllers/b.png');
        $src = imagecreatefromjpeg('application/controllers/a.jpg');
//
        imagealphablending($dest, false);
        imagesavealpha($dest, true);
//
        imagecopymerge($dest, $src, 10, 9, 0, 0, 181, 180, 100); //have to play with these numbers for it to work for you, etc.
//
//        header('Content-Type: image/png');
//        imagepng($dest);
        imagepng($dest, "application/images/photos/file.png");
//        debug($dest);
//        imagedestroy($dest);
//        imagedestroy($src);
    }


}