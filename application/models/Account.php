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
		$result = $this->db->row('SELECT id FROM users WHERE email = :login OR username = :login', $params);
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
				<a href='http://" . $_SERVER['HTTP_HOST'] . "/account/auth/" . $hash . "' target='_blank'>Click me!</a></body></html>"
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
			throw new Exception('There is no user with such a email or login');
		if (!password_verify($password, $result[0]['password']))
			throw new Exception('Wrong password');

		$_SESSION['logged_user'] = $result[0];
		return $result;
	}

}