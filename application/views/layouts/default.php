<!doctype html>
<html lang="en">
<head>
    <title><?php echo "Camagru" . (isset($title) ? (" | " . $title) : '') ?></title>
	<?php require_once 'header.php' ?>
    <style>
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #72ae73;
            color: white;
            text-align: center;
        }
    </style>
</head>
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
<div class="footer">
    <p><a href="https://github.com/pzubar">©pzubar</a> 2019</p>
</div>

</body>
</html>