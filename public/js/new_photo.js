const player = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const superposable = {
	img: null,
	isDraggable: false
};
const currentPos = {
	x: 0,
	y: 0
};
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
				console.log("Error ", error);
			})
	});

	player.addEventListener('play', () => {
		window.setInterval(function () {
			context.drawImage(player, 0, 0, canvasSize.width, canvasSize.height);
			addSuperPosable()
		}, 25);
	}, false);

	const superposablesContainer = document.querySelector(".superposables-container");
	superposablesContainer.onclick = function (event) {
		const target = event.target;
		if (target.tagName !== 'IMG')
			return;
		setSuperPosToCanvas(target);
	};

	function setSuperPosToCanvas(img) {
		const id = img.id;
		currentPos.x = canvas.width / 2;
		currentPos.y = canvas.height / 2;
		superposable.img = img;
	}

	function addSuperPosable() {
		if (!superposable.img)
			return;
		const {x, y} = currentPos;
		context.drawImage(superposable.img, x - superposable.img.width / 2, y - superposable.img.height / 2);
	}

	canvas.onmousedown = function (e) {
		const rect = canvas.getBoundingClientRect();
		const mouseX = e.pageX - rect.left;
		const mouseY = e.pageY - rect.top;
		// debugger;
		const {x, y} = currentPos;
		const {width, height} = superposable.img;

		// debugger;
		// if (mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= x + height)
		// 	superposable.isDraggable = true

		const halfWidth = superposable.img.width / 2;
		const halfHeight = superposable.img.height / 2;
		// debugger;
		if (mouseX >= (currentPos.x - halfWidth) &&
			mouseX <= (currentPos.x + halfWidth) &&
			mouseY >= (currentPos.y - halfHeight) &&
			mouseY <= (currentPos.y + halfHeight)) {
			superposable.isDraggable = true;
		}
		// debugger;
	};

	canvas.onmouseup = function (e) {
		superposable.isDraggable = false;
	};
	canvas.onmouseout = function(e) {
		superposable.isDraggable = false;
	};
	canvas.onmousemove = function(e) {
		const rect = canvas.getBoundingClientRect();
		if (superposable.isDraggable) {
			currentPos.x = e.pageX - rect.left;
			currentPos.y = e.pageY - rect.top;
		}
	};
};

function renderCanvas() {
	canvasSize.width = canvas.parentElement.offsetWidth;
	canvasSize.height = canvasSize.width * 0.5625;


	canvas.width = canvasSize.width;
	canvas.height = canvasSize.height;
}

window.onresize = renderCanvas;