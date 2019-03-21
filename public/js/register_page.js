const form = document.querySelector('#register-form');

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

	if (!validateEmail(this['email'].value)) {
		alert('Invalid email!');
		return;
	}
	if (!validateLogin(this['login'].value)) {
		alert('Invalid login! Use at least 4 characters (latin letters or digits)');
		return;
	}
	if (this['password_repeat'].value !== this.password.value) {
		alert('Passwords are not equal');
		return;
	}
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
