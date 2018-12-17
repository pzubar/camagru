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
            <h3>Sign up</h3>
            <form action="/account/register" method="post" id="register-form">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label for="login">Login</label>
                    <input class="form-control" id="login" type="text" name="login">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" id="password" name="password" type="password">
                </div>
                <div class="form-group">
                    <label for="password-confirm">Confirm password</label>
                    <input class="form-control" id="password-confirm" type="password">
                </div>
                <button class="btn btn-info" type="submit">Sign up</button>
            </form>
        </div>
    </div>
</div>

<!--<script src="/public/js/register_page.js"></script>-->