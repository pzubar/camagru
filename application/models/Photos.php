<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 2/2/19
 * Time: 5:06 PM
 */

namespace application\models;

use application\core\Model;

include ROOT . "/application/lib/Mail.php";

class Photos extends Model
{

	/**
	 * check if something was uploaded
	 * creates a new photo, saves into server and return its name
	 * @return string fileName (name of created photo) or empty string in case of error
	 */
	public function createPhoto()
	{
		if (!isset($_GET['id']) || !isset($_GET['x']) || !isset($_GET['y']) || !isset($_GET['h']) || !isset($_GET['w']))
			return '';
		$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
		$result = $this->db->row('SELECT filename FROM superposables WHERE id = :id', ['id' => $_GET['id']]);
		if (!isset($result[0]))
			return '';
		if ($contentType === "application/upload") {
			$content = trim(file_get_contents("php://input"));
			$img = str_replace('data:image/png;base64,', '', $content);
			$img = str_replace(' ', '+', $img);
			$dst = imagecreatefromstring(base64_decode($img));
			$src = imagecreatefrompng(ROOT . '/images/superposables/' . $result[0]['filename']);
			$thumb = imagecreatetruecolor($_GET['w'], (int)$_GET['h']);
			$filename = "/images/photos/" . md5(uniqid()) . ".png";

			imagealphablending($dst, false);
			imagesavealpha($dst, true);
			imagealphablending($thumb, false);
			imagesavealpha($thumb, true);
			imagecopyresized($thumb, $src, 0, 0, 0, 0, $_GET['w'], $_GET['h'], 128, 128);
			$this->_mergePictures($dst, $thumb, (int)$_GET['x'], (int)$_GET['y'], 0, 0,
				(int)$_GET['w'], (int)$_GET['h'], 100);
			$width = imagesx($dst);
			$height = imagesy($dst);
			$result = imagecreatetruecolor($width / 2, $height / 2);
			imagecopyresampled($result, $dst, 0, 0, 0, 0, $width / 2, $height / 2, $width, $height);
			imagepng($result, ROOT . $filename, 0, NULL);
			imagedestroy($dst);
			imagedestroy($thumb);
			imagedestroy($src);
			return $filename;
		} else
			return '';
	}

	private function _mergePictures($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h, $pct)
	{
		$cut = imagecreatetruecolor($src_w, $src_h);

		imagecopy($cut, $dst_im, 0, 0, $dst_x, $dst_y, $src_w, $src_h);
		imagecopy($cut, $src_im, 0, 0, $src_x, $src_y, $src_w, $src_h);
		imagecopymerge($dst_im, $cut, $dst_x, $dst_y, 0, 0, $src_w, $src_h, $pct);
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
		$result = $this->db->row('SELECT * FROM posts WHERE author_id = :uid ORDER BY posts.postdate DESC',
			['uid' => $_SESSION['logged_user']['id']]);
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
		$id = $this->db->row('SELECT author_id FROM posts WHERE id = :post_id', ['post_id' => $postId]);
		$user = $this->db->row('SELECT * FROM users WHERE id = :id', ['id' => $id[0]["author_id"]]);
		if (isset($user[0]) && $user[0]['send_mail'])
			sendMail($user[0]['email'], "
			<h3>Hello, " . $user[0]['username'] . "</h3>
			<p>Your post was just commented, visit <a href='http://" . $_SERVER['HTTP_HOST'] . "' target='_blank'>Camagru</a> to read the comment</p>
			");

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

	public function removePost($id)
	{
		$params = [
			'id' => (int)$id,
		];
		$result = $this->db->query('DELETE FROM posts WHERE id = :id', $params);
		return $result;
	}
}