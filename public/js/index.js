window.onload = function () {
	fetch("posts", {
	})
		.then(response => {
			if (!response.ok)
				throw new Error("Error!");
			return response.json();
		})
		.then(response => {
			debugger;
		})
		.catch(error => {
			console.log("Error ", error);
		})
};