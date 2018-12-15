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
            <form action="/account/login" method="post">
                <div class="form-group">
                    <label for="login">Login</label>
                    <input class="form-control" id="login" type="text">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" id="password" type="password">
                </div>
                <button class="btn" type="submit">Sign In</button>
            </form>
        </div>
    </div>
</div>