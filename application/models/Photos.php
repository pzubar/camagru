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
		if (!isset($_GET['id']))
			return '';
		$superposableId = $_GET['id'];
		$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

		if ($contentType === "application/upload") {
			$content = trim(file_get_contents("php://input"));
			$img = str_replace('data:image/png;base64,', '', $content);
			$img = str_replace(' ', '+', $img);
			$fileName = '/images/photos/' . md5(uniqid()) . '.png';
//			file_put_contents(ROOT . $fileName, base64_decode($img));
//			return $fileName;
			$dest = imagecreatefromstring(base64_decode($img));
			$src = imagecreatefrompng('/images/superposables/mask.png');
//

			imagealphablending($dest, false);
			imagesavealpha($dest, true);
//
			imagecopymerge($dest, $src, 10, 9, 0, 0, 128, 128, 100); //have to play with these numbers for it to work for you, etc.
//
//			header('Content-Type: image/png');
			imagepng($dest);
//			imagepng($dest, "/images/photos/file.png");
//        debug($dest);
			imagedestroy($dest);
			imagedestroy($src);

			return '';
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
		$this->db->query('INSERT INTO posts (author_id, filename, postdate)
    		VALUES (:author_id, :filename, :postdate)', $params);
	}

	public function getSuperPosables()
	{
		$result = $this->db->row('SELECT * FROM superposables', []);
		return $result;
	}

	public function getUserPhotos()
	{
		$result = $this->db->row('SELECT * FROM posts WHERE author_id = :uid', ['uid' => $_SESSION['logged_user']['id']]);
		return $result;
	}

	public function commentPost(string $comment, int $postId, int $userId)
	{
		$params = [
			'author_id' => $userId,
			'comment_text' => $comment,
			'postdate' => date("Y-m-d H:i:s"),
			'post_id' => $postId
		];
		$this->db->query('INSERT INTO comments (author_id, comment_text, postdate, post_id)
				VALUES (:author_id, :comment_text, :postdate, :post_id)', $params);
		return (true);
	}

	public function likePost($id)
	{
		$params = [
			'id' => (int)$id,
			'uid' => $_SESSION['logged_user']['id']
		];
		$result = $this->db->row('SELECT * FROM likes WHERE likes.post_id = :id AND likes.author_id = :uid', $params);
		if (isset($result[0])) {
			$id = $result[0]['id'];
			$this->db->query('DELETE FROM likes WHERE id = :id', ['id' => $id]);
		} else
			$this->db->query('INSERT INTO likes (author_id, post_id) VALUES (:uid, :id)', $params);
		return $result;
	}
}