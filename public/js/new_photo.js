window.onload = function () {
	const player = document.getElementById('video');
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');
	const superposable = {
		img: null,
		isDraggable: false,
		scale: 1,
		id: null
	};
	/**
	 * superposable center position
	 * @type {{x: number, y: number}}
	 */
	const currentPos = {
		x: 0,
		y: 0
	};
	const canvasSize = {};

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
	const snapButton = document.getElementById("snap");
	if (snapButton)
		snapButton.addEventListener("click", function () {
			snapButton.disabled = true;
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
					const {status, url} = response;
					if (url)
						window.location.replace("/");
					else if (status !== "success")
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
	if (superposablesContainer)
		superposablesContainer.onclick = function (event) {
			const target = event.target;
			if (target.tagName !== 'IMG')
				return;
			setSuperPosToCanvas(target);
		};

	function setSuperPosToCanvas(img) {
		currentPos.x = canvas.width / 2;
		currentPos.y = canvas.height / 2;
		superposable.img = img;
		superposable.id = img.id;
	}

	function addSuperPosable() {
		if (!superposable.img)
			return;
		const {x, y} = currentPos;
		const {img, scale} = superposable;
		const width = img.width * scale;
		const height = img.height * scale;

		context.drawImage(img, x - (width / 2), y - (height / 2), width, height);
	}

	canvas.onmousedown = function (e) {
		const rect = canvas.getBoundingClientRect();
		const mouseX = e.pageX - rect.left;
		const mouseY = e.pageY - rect.top;
		const {x, y} = currentPos;
		const {width, height} = superposable.img;
		const halfWidth = width * superposable.scale / 2;
		const halfHeight = height * superposable.scale / 2;

		if (mouseX >= (x - halfWidth) &&
			mouseX <= (x + halfWidth) &&
			mouseY >= (y - halfHeight) &&
			mouseY <= (y + halfHeight)) {
			superposable.isDraggable = true;
		}
	};

	canvas.onmouseup = function () {
		superposable.isDraggable = false;
	};

	canvas.onmouseout = function () {
		superposable.isDraggable = false;
	};

	canvas.onmousemove = function (e) {
		if (!superposable.isDraggable)
			return;

		const rect = canvas.getBoundingClientRect();
		currentPos.x = e.pageX - rect.left;
		currentPos.y = e.pageY - rect.top;
	};

	// canvas.onclick = function (e) {
	// 	const rect = canvas.getBoundingClientRect();
	// 	const {x, y} = currentPos;
	//
	// 	console.log(x, shiftX, y, shiftY);
	// };
	canvas.onmousewheel = function (e) {
		const delta = e.wheelDelta;

		if (delta > 0 && superposable.scale <= 3)
			superposable.scale += 0.1;
		else if (delta < 0 && superposable.scale >= 0.3)
			superposable.scale -= 0.1;
	};

	function renderCanvas() {
		canvasSize.width = canvas.parentElement.offsetWidth;
		canvasSize.height = canvasSize.width * 0.5625;
		canvas.width = canvasSize.width;
		canvas.height = canvasSize.height;
	}

	window.onresize = renderCanvas;
};
