const player = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvasSize = {};

window.onload = function () {
	navigator.getMedia = (navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia);

	navigator.getMedia(
		{
			video: true,
			audio: false
		},
		function (stream) {
			if (navigator.mozGetUserMedia) {
				player.mozSrcObject = stream;
			} else {
				player.srcObject = stream;
			}
			player.play();
		},
		function (err) {

		}
	);

	renderCanvas();

	document.getElementById("snap").addEventListener("click", function () {
		const dataURL = canvas.toDataURL();
		fetch("/photos/create", {
			method: "POST",
			headers: {"Content-Type": "application/upload"},
			body: dataURL
		})
			.then(response => {
				if (!response.ok)
					throw new Error("Error!");
				return response.json();
			})
			.then(response => {
				const {status} = response;
				if (status !== "success")
					alert(response.message)
			})
			.catch(error => {
				// alert(error);
				console.log("Error ", error);
			})
	});


	player.addEventListener('play', () => {
		window.setInterval(function () {
			context.drawImage(player, 0, 0, canvasSize.width, canvasSize.height)
		}, 25);
	}, false);
};

function renderCanvas() {
	canvasSize.width = canvas.parentElement.offsetWidth;
	canvasSize.height = canvasSize.width * 0.5625;


	canvas.width = canvasSize.width;
	canvas.height = canvasSize.height;
}

window.onresize = function () {
	renderCanvas();
};