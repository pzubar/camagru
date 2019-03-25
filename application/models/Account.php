<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 12/17/18
 * Time: 8:46 PM
 */

namespace application\models;

use application\core\Model;
use Exception;

include ROOT . "/application/lib/Mail.php";

class Account extends Model
{
	/**
	 * checks if there is a user with such an email or login
	 * @param string $email
	 * @param string $login
	 * @return bool
	 */
	public function checkRegisterData(string $email, string $login)
	{
		$params = [
			'email' => $email,
			'login' => $login
		];
		$result = $this->db->row('SELECT id FROM users WHERE email = :email OR username = :login', $params);
		if (!empty($result))
			return true;
		return false;
	}

	public function createUser(string $email, string $login, string $password)
	{
		$options = [
			'cost' => 10,
		];

		$time = date("Y-m-d H:i:s");
		$params = [
			'email' => $email,
			'login' => $login,
			'password' => password_hash($password, PASSWORD_BCRYPT, $options),
			'hash' => hash("tiger192,4", $email . $time . $login)
		];
		$result = $this->db->query('INSERT INTO users (username, password, email, hash)
    		VALUES (:login, :password, :email, :hash) ', $params);
		$this->sendRegisterEmail($email, $login, $params['hash']);
		return ($result);
	}

	public function sendRegisterEmail(string $email, string $login, string $hash)
	{
		sendMail($email,
			"<h2>Welcome to Camagru!</h2>
				<h3>Hello, " . $login . "</h3>
				<p>Thanks for signing up to Camagru!</p>
				<p>Your account has been created. Please, confirm your account by following the verification link below.</p>
				<p>Please click this link to activate your account:</p>
				<a href='http://" . $_SERVER['HTTP_HOST'] . "/account/auth/" . $hash . "' target='_blank'>Click me!</a>"
		);
	}

	/**
	 * set users is_active parameter to true
	 *
	 * @param $hash - users's hash from query string
	 */
	public function activateUser(string $hash)
	{
		$params = [
			'hashcode' => $hash
		];
		$result = $this->db->query('UPDATE users SET is_activated = true WHERE hash = :hashcode', $params);
		if (isset($_SESSION['logged_user']))
			$_SESSION['logged_user']['is_activated'] = true;
	}

	public function loginUser(string $emailOrLogin, string $password)
	{
		$params = [
			'email' => $emailOrLogin
		];
		$result = $this->db->row('SELECT * FROM users WHERE email = :email OR username = :email LIMIT 1', $params);
		if (!$result)
			throw new Exception('There is no user with such an email or login');
		if (!password_verify($password, $result[0]['password']))
			throw new Exception('Wrong password');
		if (!$result[0]['is_activated'])
			throw new Exception('The account was not activated');

		$_SESSION['logged_user'] = $result[0];
		return $result;
	}

	public function remindPassword(string $email)
	{
		$params = [
			'email' => $email
		];
		$result = $this->db->row('SELECT * FROM users WHERE email = :email LIMIT 1', $params);
		if (!$result)
			throw new Exception('There is no user with such an email');
		$result = $result[0];
		sendMail($result['email'],
			"
				<h3>Hello, " . $result['username'] . "</h3>
				<p>You can now reset your password and change it</p>
				<p>Please click this link to activate your account:</p>
				<a href='http://" . $_SERVER['HTTP_HOST'] . "/account/remind-password/" . $result['hash'] . "' target='_blank'>Reset password</a>"
		);
	}

	public function changePassword(string $hash, string $newPassword)
	{
		$params = [
			'hashcode' => $hash,
			'password' => password_hash($newPassword, PASSWORD_BCRYPT, ['cost' => 10])
		];
		$result = $this->db->query('UPDATE users SET password = :password WHERE hash = :hashcode', $params);
		if (!$result) {
			throw new Exception('Something went wrong!');
		}
	}

	public function getUserInfo()
	{
		$params = [
			'id' => $_SESSION['logged_user']['id']
		];
		$result = $this->db->row('SELECT username, email, password, send_mail FROM users WHERE id = :id LIMIT 1', $params);

		return $result[0];
	}

	public function editUserInfo()
	{
		$userInfo = $this->getUserInfo();
		$userInfo['send_mail'] = $userInfo['send_mail'] === "1" ? "on" : "";

		$params = [
			'id' => $_SESSION['logged_user']['id'],
			'email' => (isset($_POST['email']) && $_POST['email'] !== "" && $_POST['email'] !== $userInfo['email'])
				? $_POST['email'] : $userInfo['email'],
			'username' => (isset($_POST['login']) && $_POST['login'] !== "" && $_POST['login'] !== $userInfo['username'])
				? $_POST['login'] : $userInfo['username'],
			'password' => (isset($_POST['password']) && $_POST['password'] !== "" && !password_verify($_POST['password'], $userInfo['password']))
				? password_hash($_POST['password'], PASSWORD_BCRYPT, ['cost' => 10]) : $userInfo['password'],
			'send_mail' => $_POST['send_mail'] === "on" ? "1" : "0"
		];
		$this->db->query('UPDATE users SET username = :username, password = :password, email = :email, send_mail = :send_mail WHERE id = :id', $params);
	}
}