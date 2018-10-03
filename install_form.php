<!DOCTYPE html>
<html>
	<head>
		<title>Installing database</title>
	</head>

	<body>
		<form action="config/config.php" method="post">
			<div id="top-bar">Database setup</div>
			<input type="text" name="DB_USER" value="<?php echo $_GET['msqlogin']; ?>" placeholder="mySQL Login" /><br />
			<input type="password" name="DB_PASSWORD" placeholder="mySQL Password" /><br />
			<input type="text" name="DB_NAME" value="" placeholder="Name of the new mySQL database" /><br />
			<input id="butt" type="submit" name="submit" value="OK" />
		</form>
	</body>

</html>
