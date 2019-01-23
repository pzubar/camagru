<?php

namespace application\controllers;

use application\core\Controller;

class PhotosController extends Controller
{
    public function newAction()
    {
//  https://time2hack.com/2018/08/upload-files-to-php-backend-using-fetch-formdata/!!!
//        $result = $this->model->getNews();
//        $vars = [
//            'news' => $result
//        ];
//        debug(gd_info());
            $this->view->render('New Photo');
//        debug('la');
//        $dest = imagecreatefrompng('application/controllers/b.png');
//        $src = imagecreatefromjpeg('application/controllers/a.jpg');
//
//        imagealphablending($dest, false);
//        imagesavealpha($dest, true);
//
//        imagecopymerge($dest, $src, 10, 9, 0, 0, 181, 180, 100); //have to play with these numbers for it to work for you, etc.
//
//        header('Content-Type: image/png');
//        imagepng($dest);
//        imagepng($dest, "application/images/photos/file.png");
//        debug($dest);
//        imagedestroy($dest);
//        imagedestroy($src);
    }

    public function createAction() {
//        if (empty($_POST)) {
//           exit(json_encode(['status'=> 'success', 'message' => '123']));
//        }

        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

        if ($contentType === "application/upload") {
            //Receive the RAW post data.
            $content = trim(file_get_contents("php://input"));

            $decoded = json_decode($content, true);
            exit(json_encode(['status'=> 'success', 'message' => json_encode($decoded)]));
            //If json_decode failed, the JSON is invalid.
            if(! is_array($decoded)) {

            } else {
                // Send error back to user.
            }
        }

    }

}