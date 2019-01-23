<!doctype html>
<html lang="en">
<?php require_once 'header.php' ?>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="/">
        <img src="/public/img/camera.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Camagru
    </a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="my-2 my-lg-0">
		<?php if (isset($_SESSION['logged_user']))
			echo '
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a href="/photos/new" class="btn btn-outline-warning" role="button">Take a photo</a>
                    <a href="/logout" class="btn btn-outline-warning" role="button">Sign out</a>
                </div>';
		else
			echo '
                <a href="/account/login" class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in</a>
                <a href="/account/register" class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign up</a>
                '
		?>
    </div>
</nav>
<?php echo $content ?>


</body>
</html>