<?php
	include('../config/database.php');
	include('../functions.php');

	if ($_POST["username"] == FALSE || $_POST["password"] == FALSE || $_POST["submit"] != "OK") {
		header("Location: create.php?error=input");
	}

	try {
		$db = new PDO($DB_DSN.';dbname='.$DB_NAME, $DB_USER, $DB_PASSWORD);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (PDOException $exeption) {
			echo 'User_Creation step_1 failed: ' . $exeption->getMessage();
			exit();
	}
	/*
	$conn = mysqli_connect("localhost", $cont[0], $cont[1], $cont[2]);
	if (!$conn) {
		echo "Debug info :: ";
		print_r($cont);
		?>
		<br>You, perhaps, have changed password and/or login and/or name of your mySQL database.<br>
		Please check the database.php file in the root of your server directory.<br>
<?php
		die("Connection failed: " . mysqli_connect_error());
	}*/

	$result = $db->query("SELECT username, email FROM users");

	if ($result) {
		while ($tmp = $result->fetch(PDO::FETCH_ASSOC)) {
			$users[] = $tmp;
		}
	}

	$username = $_POST["username"];
	$password = hash('whirlpool', $_POST["password"]);
	$email = $_POST["email"];
	$hash = hash(whirlpool, rand(0,1000));


	if (strlen($password) < 6) { 
		header("Location: create.php?error=invalid_password");
		exit();
	}

	foreach ($users as $val) {
		if ($val['username'] == $username) {
			header("Location: create.php?error=already_taken_name");
			exit();
		}
		if ($val['email'] == $email) {
			header("Location: create.php?error=already_taken_email");
			exit();
		}
	}

	$sql = $db->prepare("INSERT INTO users (username, password, email, hash)
		VALUES (?, ?, ?, ?);");

	$sql->execute($username, $password, $email, $hash);
	
	ft_sendmail($email, $username, $_POST["password"], $hash);

	header("Location: ../index.php?registrer=success");

?>