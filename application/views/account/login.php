<style>
    .login-form {
        height: 100vh;
        display: flex;
        align-items: center;
    }
</style>

<div class="container">
    <div class="row justify-content-md-center login-form">
        <div class="col-md-auto">
            <h3>Sign in</h3>
            <?php if (isset($vars['message']))
                echo '<b style="color: #1c7430">'.$vars['message'].'</b>'
                ?>
            <form action="/account/login" method="post">
                <div class="form-group">
                    <label for="login">Login</label>
                    <input class="form-control" id="login" type="text">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" id="password" type="password">
                </div>
                <button class="btn btn-outline-primary" type="submit">Sign In</button>
            </form>
            <hr>
            <p>Have no account? <a class="btn btn-link" href="/account/register">Sign up</a></p>
        </div>
    </div>
</div>