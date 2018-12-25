<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 12/17/18
 * Time: 8:46 PM
 */

namespace application\models;


use application\core\Model;
include ROOT."/application/lib/Mail.php";

class Account extends Model
{
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
		
		$params = [
			'email' => $email,
			'login' => $login,
			'password' => password_hash($password, PASSWORD_BCRYPT, $options),
			'hash' => sha1($email . date("Y-m-d H:i:s") . $login)
		];
		$result = $this->db->query('INSERT INTO users (username, password, email, hash)
    		VALUES (:login, :password, :email, :hash) ', $params);
		return($result);
	}
	
	public function sendRegisterEmail(string $email, string $login, string $time) {
		$hash = sha1($email . $time . $login);
		sendMail($email, "
		<html lang='en'><head>
			<title>Welcome to Camagru!</title>
		</head>
		<body>
			<h2>Hello, " . $login . "</h2>
			<p>Thanks for signing up in Camagru!</p>
			<p>Your account has been created. Please, confirm your account by following the verification link below.</p>
		<p>Please click this link to activate your account:</p>
		<a href='http://localhost/account/login/auth/" . $hash . "' target='_blank'>Click me!</a>
		</body></html>");
	}
	
}