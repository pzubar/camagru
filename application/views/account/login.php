<style>
    .login-form {
        height: 100vh;
        display: flex;
        align-items: center;
    }
</style>

<div class="container">
	<?php if (isset($vars['message']))
		echo '<p style="color: #1c7430;text-align: center;">' . $vars['message'] . '</p>'
	?>
    <div class="row justify-content-md-center login-form">
        <div class="col-md-auto">
            <h3>Sign in</h3>
			
            <form action="/account/login" method="post">
                <div class="form-group">
                    <input class="form-control" id="login" type="text" placeholder="User Name or E-mail">
                </div>
                <div class="form-group">
                    <input class="form-control" id="password" type="password" placeholder="Password">
                </div>
                <button class="btn btn-outline-primary form-control" type="submit">Sign In</button>
            </form>
            <hr>
            <p>Have no account? <a class="btn btn-link" href="/account/register">Sign up</a></p>
        </div>
    </div>
</div>