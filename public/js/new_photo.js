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
	const faceDetector =  (window.FaceDetector) ? new window.FaceDetector() : undefined;
	var scale = 1;
	/**
	 * superposable center position
	 * @type {{x: number, y: number}}
	 */
	const currentPos = {
		x: 0,
		y: 0
	};
	const canvasSize = {};

	navigator.mediaDevices.getUserMedia({ video: true, audio: true })
		.then(stream => {
			player.srcObject = stream;
			player.play();
		})
		.catch(error => {
			console.log(error);
		});

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
			addSuperPosable();
		}, 25);
	}, false);

	const superposablesContainer = document.querySelector(".superposables-container");
	if (superposablesContainer)
		superposablesContainer.onclick = function (event) {
			const target = event.target;

			if (target.id === 'remove-super-pos') {
				superposable.img = null;
				superposable.id = null;
				return;
			}
			if (target.tagName !== 'IMG')
				return;
			setSuperPosToCanvas(target);
		};

	function setSuperPosToCanvas(img) {
		superposable.img = null;
		superposable.id = null;
		if (faceDetector)
			faceDetector.detect(canvas)
				.then(faces => {
					console.log(faces);
					if (!faces || !faces.length)
						return;
					const {boundingBox} = faces[0];
					const {x, y, width, height} = boundingBox;
					superposable.img = img;
					superposable.id = img.id;
					superposable.scale = width / img.width + 0.5;
					currentPos.x = x + width / 2;
					currentPos.y = y + height / 2;
				})
				.catch((error) => {console.log(error)});
		else {
			currentPos.x = canvas.width / 2;
			currentPos.y = canvas.height / 2;
			superposable.img = img;
			superposable.id = img.id;
		}
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
		if (!superposable.img)
			return;
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

	canvas.onmousewheel = function (e) {
		const delta = e.wheelDelta;

		if (delta > 0 && superposable.scale <= 4)
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

