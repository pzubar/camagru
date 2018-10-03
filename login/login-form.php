<!DOCTYPE html>
<html>
	<head>
		<title>Sign in</title>
		<link rel="stylesheet" href="">
		<style>
		</style>
	</head>

	<body>
		<form action="user_authorization.php" method="post">
        <a href="../index.php" class="close">&otimes;</a>
            <div id="top-bar">Sign into your account here:</div>
			
			<?php
			/*
				if ($_GET['loginErr'] == 1)
					echo "<div class=\"errvis\">Check the input fields!</div>";
				else if ($_GET['loginErr'] == 2)
					echo "<div class=\"errvis\">User with same account login exists. Please change your login!</div>";
				else if ($_GET['loginErr'] == 3)
					echo "<div class=\"errvis\">ACHTUNG!!!</div>";
				else
					echo "<div class=\"errhide\">Check the input fields!</div>";
			*/
			?>
			<input type="text" name="username" placeholder="Username" /><br />
			<input type="password" name="password" placeholder="Password" /><br />
			<input id="button" type="submit" name="submit" value="OK" />
		</form>
	</body>
</html>