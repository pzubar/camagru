<!doctype html>
<html lang="en">
<?php require_once 'header.php' ?>
<body>
<nav class="navbar sticky-top navbar-light bg-light justify-content-between">
	<a class="navbar-brand" href="/">
		<img src="/public/img/camera.png" width="30" height="30" class="d-inline-block align-top" alt="">
		<span class="d-xs-none">
			<b>CAMAGRU</b>
		</span>
	</a>
	<div>
		<?php if (isset($_SESSION['logged_user'])): ?>
			<a href="/photos/new" class="btn btn-outline-info" role="button">Take a photo</a>
			<a href="/logout" class="btn btn-info" role="button">Sign out</a>
		<?php else: ?>
			<a href="/account/login" class="btn btn-outline-success my-2 my-sm-0" role="button">Sign in</a>
			<a href="/account/register" class="btn btn-success my-2 my-sm-0" role="button">Sign up</a>
		<?php endif; ?>
	</div>
</nav>
<?php echo $content ?>


</body>
</html>