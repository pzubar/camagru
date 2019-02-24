<style>
    .remind-form {
        height: 100vh;
        display: flex;
        align-items: center;
        margin-top: -55px;
    }
</style>
<? if (isset($vars['isset_hash'])): ?>
    <div class="container">
        <div class="row justify-content-md-center remind-form">
            <div class="col-md-auto">
                <h3>Remind password</h3>
                <p style="margin-bottom: 0">Enter new password you would like to use</p>
                <form action="/account/remind-password" method="post" id="change-password-form">
                    <div class="form-group">
                        <input class="form-control" id="password" name="password" placeholder="Password" type="password"
                               required>
                    </div>
                    <input id="hash" name="hash" type="hidden" value="<? if (isset($vars)) {
                        echo $vars['hash'];
                    } ?>">
                    <button class="btn btn-info" type="submit">Change password</button>
                </form>
            </div>
        </div>
    </div>
    <script>
        const formChangePass = document.querySelector('#change-password-form');
        if (formChangePass)
            formChangePass.addEventListener("submit", function (e) {
                e.preventDefault();

                fetch(this.action, {
                    method: this.method,
                    body: new FormData(this),
                    redirect: "follow"
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw "Response status was not ok: " + response.status;
                        }
                        if (response.redirected) {
                            const url = response.url;

                            window.location.replace(url);
                        }
                        else
                            return response.json();
                    })
                    .then(function (response) {
                        if (response['status'] && response['status'] !== "success")
                            alert(response.message)
                    })
                    .catch(function (err) {
                        console.log('Fetch Error. ', err);
                    });
            }
    </script>

<? else: ?>
    <div class="container">
        <div class="row justify-content-md-center remind-form">
            <div class="col-md-auto">
                <h3>Remind password</h3>
                <p style="margin-bottom: 0">Enter e-mail and we'll send you a letter with instructions</p>
                <form action="/account/remind-password" method="post" id="register-form">
                    <div class="form-group">
                        <label for="email"></label>
                        <input class="form-control" id="email" type="text" name="email" placeholder="E-mail" required>
                    </div>
                    <button class="btn btn-info" type="submit">Reset password</button>
                </form>
            </div>
        </div>
    </div>
<?php endif ?>
