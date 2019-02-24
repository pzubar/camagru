const formNode = document.querySelector('#login-page-form');

formNode.onsubmit = function (e) {
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
			if (response.redirected)
				window.location.reload();
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

