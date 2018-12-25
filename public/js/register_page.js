const form = document.querySelector('#register-form');

function validateEmail(email) {
	const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regExp.test(email);
}

function validateLoginPassword(string) {
	const regExp = /^[a-zA-Z0-9]+$/;
	return string.length >= 5 && string.length <= 9 && regExp.test(string);
}

form.onsubmit = function (e) {
	e.preventDefault();
	if (!validateEmail(this[0].value)) {
		alert('Invalid email!');
		return;
	}
	if (!validateLoginPassword(this[1].value)) {
		alert('Invalid login!');
		return;
	}
	if (!validateLoginPassword(this[2].value)) {
		alert('Password is invalid!');
		return;
	}
	fetch(this.action, {
		method: this.method,
		body: new FormData(this),
	}).then(
		function (response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
					response.status);
				return;
			}
			response.json().then(function (data) {
				alert(data);
				console.log(data);
			});
		}
		)
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
};
