<style>
    .login-form {
        height: 100vh;
        display: flex;
        align-items: center;
        margin-top: -55px;
    }
</style>

<div class="container">
    <div class="row justify-content-md-center login-form">

        <div class="col-md-auto">
            <h3>My Info</h3>
            Login: <?php if (isset($userInfo) && isset($userInfo['username']) && $userInfo['username']) echo $userInfo['username'] ?>
            <br>
            Email: <?php if (isset($userInfo) && isset($userInfo['email']) && $userInfo['email']) echo $userInfo['email'] ?>
            <br>
            <hr>
            <h4>Edit</h4>
            <p style="color: lightgrey">Leave input empty if you do not like to change</p>
            <form action="/account/settings" method="post" id="settings-form">
                <div class="form-group">
                    <input class="form-control" id="login" type="text" name="login" placeholder="New User Name">
                </div>
                <div class="form-group">
                    <input class="form-control" id="email" type="text" name="email" placeholder="New E-mail">
                </div>
                <div class="form-group">
                    <input class="form-control" id="password" name="password" placeholder="New Password" type="password"
                           style="display:none;" readonly>
                </div>
                <div class="form-group">
                    <input class="custom-checkbox" id="send-mail" name="send_mail"
                           type="checkbox"
                           checked="<?php if (isset($userInfo) && isset($userInfo['send_mail']) && $userInfo['send_mail']) echo true ?>">
                    Send notifications
                </div>
                <button class="btn btn-info form-control" type="submit">Sign up</button>
            </form>
        </div>
    </div>
</div>

<script>
	const form = document.querySelector('#settings-form');
	console.log(form);

	function validateEmail(email) {
		const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regExp.test(email);
	}

	function validatePassword(string) {
		const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;
		return regExp.test(string);
	}

	function validateLogin(string) {
		const regExp = /^([a-zA-Z0-9]){4,}$/;
		return regExp.test(string);
	}

	form.onsubmit = function (e) {
		e.preventDefault();
		if (this['email'].value)
			if (!validateEmail(this['email'].value)) {
				alert('Invalid email!');
				return;
			}
		if (this['login'].value)
			if (!validateLogin(this['login'].value)) {
				alert('Invalid login! Use at least 4 characters (latin letters or digits)');
				return;
			}
		if (this.password.value)
			if (!validatePassword(this.password.value)) {
				alert('Password is invalid! Use at least 6 characters, at least one latin letter and one or more digits');
				return;
			}
		fetch(this.action, {
			method: this.method,
			body: new FormData(this),
			redirect: "follow"
		}).then((response) => {
			if (!response.ok) {
				throw "Response status was not ok: " + response.status;
			}
			if (response.redirected)
				window.location.href = response.url;
			else
				return response.json();
		})
			.then(function (response) {
				if (response.status && response.status !== "success")
					alert(response.message)
			})
			.catch(function (err) {
				console.log('Fetch Error. ', err);
			});
	};

	window.onload = function () {
		const pass = document.getElementById("password");
		setTimeout(function () {
			pass.style.display = "block";
			pass.readOnly = false;
		}, 50);
	}
</script>