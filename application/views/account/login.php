<style>
    .login-form {
        height: 100vh;
        display: flex;
        align-items: center;
		margin-top: -55px;
    }
	p {
		margin-bottom: 0;
	}
</style>

<div class="container">
	<?php if (isset($vars['message']))
		echo '<p style="color: #1c7430;text-align: center;">' . $vars['message'] . '</p>'
	?>
    <div class="row justify-content-md-center login-form">
        <div class="col-md-auto">
            <h3>Sign in</h3>
			
            <form action="/account/login" method="post" id="login-page-form">
                <div class="form-group">
                    <input class="form-control" id="login" type="text" name="login" required placeholder="User Name or E-mail">
                </div>
                <div class="form-group">
                    <input class="form-control" id="password" type="password" name="password" required placeholder="Password">
					<p><a href="/account/remind-password">Forgot password?</a></p>
                </div>

                <button class="btn btn-outline-primary form-control" type="submit">Sign In</button>
            </form>
            <hr>
            <p>Have no account? <a class="btn btn-link" href="/account/register">Sign up</a></p>
        </div>
    </div>
</div>

<script src="/public/js/login_page.js"></script>
