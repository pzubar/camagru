<?php

namespace application\controllers;

use application\core\Controller;
use Exception;

class PhotosController extends Controller
{
	public function newAction()
	{
		$superposables = $this->model->getSuperPosables();
		$photos = $this->model->getUserPhotos();

		$vars = [
			'superposables' => $superposables,
			'photos' => $photos
		];
		$this->view->render('Capture Photo', $vars);

	}

	public function removeAction()
	{
		if (isset($_POST['id'])) {
			try {
				$this->model->removePost($_POST['id']);
				$this->view->message('success', "Post removed");
			} catch (Exception $e) {
				$this->view->message('error', "Post was not removed: " . $e);
			}
		}
	}

	public
	function createAction()
	{
		if (!isset($_SESSION['logged_user']) || !$_SESSION['logged_user']['is_activated'])
			exit(json_encode(['status' => 'error', 'message' => 'You have not yet activated your account']));
		$fileName = $this->model->createPhoto();
		if (!$fileName)
			exit(json_encode(['status' => 'error', 'message' => 'Photo was not saved']));
		$userID = $_SESSION['logged_user']['id'];
		$this->model->savePhotoNameToUserTable($fileName, $userID);
		$this->view->location("/");
	}

	public
	function commentAction()
	{
		if (!isset($_SESSION['logged_user']))
			$this->view->message('redirect', "/account/login");
		if (!isset($_SESSION['logged_user']) || !$_SESSION['logged_user']['is_activated'])
			$this->view->message('error', 'You have not yet activated your account');
		if (isset($_POST['post-id']) && isset($_POST['comment'])) {
			try {
				if ($this->model->commentPost($_POST['comment'], $_POST['post-id'], $_SESSION['logged_user']['id']))
					$this->view->message('success', "Post commented");
				else
					$this->view->message('error', "Something went wrong");
			} catch (Exception $e) {
				$this->view->message('error', $e->getMessage());
			}
		}
	}

	public
	function likeAction()
	{
		if (!isset($_SESSION['logged_user']))
			$this->view->message('redirect', "/account/login");
		if (isset($_POST['id'])) {
			try {
				$result = $this->model->likePost($_POST['id']);
				$this->view->message('success', $result);
			} catch (Exception $e) {
				$this->view->message('error', $e->getMessage());
			}
		}
	}

}