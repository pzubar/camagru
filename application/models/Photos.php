<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 2/2/19
 * Time: 5:06 PM
 */

namespace application\models;

use application\core\Model;

class Photos extends Model
{

	/**
	 * check if something was uploaded
	 * creates a new photo, saves into server and return its name
	 * @return string fileName (name of created photo) or empty string in case of error
	 */
	public function createPhoto()
	{
		$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

		if ($contentType === "application/upload") {
			$content = trim(file_get_contents("php://input"));
			$img = str_replace('data:image/png;base64,', '', $content);
			$img = str_replace(' ', '+', $img);
			$fileName = '/images/photos/' . md5(uniqid()) . '.png';
			file_put_contents(ROOT . $fileName, base64_decode($img));
			return $fileName;
		} else
			return '';
	}

	public function savePhotoNameToUserTable(string $fileName, string $userId)
	{
		$params = [
			'author_id' => $userId,
			'filename' => $fileName,
			'postdate' => date("Y-m-d H:i:s")
		];
		$this->db->query('INSERT INTO posts (author_id, filename, postdate, likes_count)
    		VALUES (:author_id, :filename, :postdate, 0)', $params);
	}

}