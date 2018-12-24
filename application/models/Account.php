<?php
/**
 * Created by PhpStorm.
 * User: pzubar
 * Date: 12/17/18
 * Time: 8:46 PM
 */

namespace application\models;


use application\core\Model;

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
			'password' => password_hash($password, PASSWORD_BCRYPT, $options)
		];
		$result = $this->db->query('INSERT INTO users (username, password, email)
    		VALUES (:login, :password, :email) ', $params);
		debug($result);
	}
	
}