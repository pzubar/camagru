<?php
	include('../config/database.php');
	/*
	if (isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
		$email = $_GET['email'];
		$hash = $_GET['hash'];
		ft_activate($email, $hash);
	} else {
		header("Location: ../.php?error=verification");
	}
	*/
	function ft_activate ($email, $hash) {
		include('../config/database.php');
		try {
			$connect = new PDO($DB_DSN.';dbname='.$DB_NAME, $DB_USER, $DB_PASSWORD);
			$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$connect->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
			} catch (PDOException $exeption) {
				//header("Location: ../.php?error=db_filechange"."$exeption->getMessage()");
				echo("ERROR");
				exit();
		}
		
		$query = $connect->prepare("SELECT email, hash, active FROM users WHERE email = ? AND hash= ? AND active='0'");
		$query->execute($email, $hash);

		$match  = $squery->fetchAll(\PDO::FETCH_ASSOC);
		var_dump($match);

	}

	ft_activate
?>