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

		$superPosables = $this->model->getSuperPosables();
//		debug($superPosables);
		$vars = [
			'photos' => $superPosables
		];
		$this->view->render('New Photo', $vars);

	}


	public function createAction()
	{
//		exit(json_encode(['status' => 'error', 'message' => json_encode($_SESSION)]));
		if (!isset($_SESSION['logged_user']) || !$_SESSION['logged_user']['is_activated'])
			exit(json_encode(['status' => 'error', 'message' => 'You have not yet activated your account']));
		$fileName = $this->model->createPhoto();
		if (!$fileName)
			exit(json_encode(['status' => 'error', 'message' => 'Photo was not saved']));
		$userID = $_SESSION['logged_user']['id'];
		$this->model->savePhotoNameToUserTable($fileName, $userID);
//		exit(json_encode(['status' => 'error', 'message' => json_encode($_SESSION)]));
	}

}