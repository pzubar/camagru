<?php

	if ($_POST["username"] == FALSE || $_POST["password"] == FALSE || $_POST["submit"] != "OK") {
		header("Location: login-form.php?error=input");
	}

	function ft_authorise($username, $password)
	{
		include('../config/database.php');
		try {
			$connect = new PDO($DB_DSN.';dbname='.$DB_NAME, $DB_USER, $DB_PASSWORD);
			$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch (PDOException $exeption) {
				echo 'Login step_1 failed: ' . $exeption->getMessage();
		}
		$users = array();
		if ($result = $connect->query("SELECT username, password FROM users")) {
			while ($tmp = $result->fetch(PDO::FETCH_ASSOC)) {
				$users[] = $tmp;
			}
		}
		foreach ($users as $val) {
			if ($val['username'] == $username && $val['password'] == $password) {
				$connect = null;
				return TRUE;
			}
		}
		$connect = null;
		return FALSE;
	}
	$password = hash('whirlpool', $_POST['password']);
	
	if (ft_authorise($_POST["username"], $password)) {
		session_start();
		$_SESSION['user'] = $_POST["username"];
		header('Location: login-form.php?all=ok');
		exit("OK\n");
	}
	header('Location: login-form.php?error=input');
?>