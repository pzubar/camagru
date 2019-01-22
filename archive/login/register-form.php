<!DOCTYPE html>
<html>
	<head>
		<title>Sign up</title>
		<link rel="stylesheet" href="">
		<style>
		</style>
	</head>

	<body>
		<form action="account_creation.php" method="post">
			<div id="top-bar">Create your account<a href="../index.php" class="close">&otimes;</a></div>
			<?php
			?>
			<input type="text" name="username" placeholder="Username" /><br />
			<input type="password" name="password" placeholder="Password" /><br />
			<input type="email" name="email" placeholder="Email" /><br />
			<input id="button" type="submit" name="submit" value="OK" />
		</form>
	</body>
</html>