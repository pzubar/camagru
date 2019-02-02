const player = document.getElementById('video');
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

const canvas = document.getElementById('canvas');
const canvasWidth = canvas.parentElement.offsetWidth;
const canvasHeight = canvasWidth * 0.5625;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const context = canvas.getContext('2d');

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
        context.drawImage(player, 0, 0, canvasWidth, canvasHeight)
    }, 25);
}, false);