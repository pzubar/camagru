<!doctype html>
<html lang="en">
<?php require_once 'header.php' ?>
<body>
<nav class="navbar sticky-top navbar-light bg-light justify-content-between">
	<a class="navbar-brand" href="/" style="display: flex">
		<img src="/public/img/camera.png" width="30" height="30" class="d-inline-block align-top" alt="">
		<span class="d-none d-sm-block">
			<b class="nav-title">CAMAGRU</b>
		</span>
	</a>
	<div class="nav-top-buttons">
		<?php if (isset($_SESSION['logged_user'])): ?>
			<a href="/account/settings" title="Settings"><i class="fas fa-2x fa-user"></i></a>
			<a href="/photos/new" title="Take a photo"><i class="fas fa-2x fa-camera-retro"></i></a>
			<a href="/logout" title="Sign out"><i class="fas fa-2x fa-sign-out-alt"></i></a>
		<?php else: ?>
			<a href="/account/login" class="btn btn-outline-success btn-sm" role="button">Sign in</a>
			<a href="/account/register" class="btn btn-success btn-sm" role="button">Sign up</a>
		<?php endif; ?>
	</div>
</nav>
<?php echo $content ?>


</body>
</html>