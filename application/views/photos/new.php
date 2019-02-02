<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-md-6">
            <video id="video" width="100%" height="100%" autoplay style="display: none"></video>
            <canvas id="canvas" width="640" height="480"></canvas>
            <button id="snap" class="btn btn-dark">Snap Photo</button>
        </div>
    </div>
</div>

<script>
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
    const context = canvas.getContext('2d');
    document.getElementById("snap").addEventListener("click", function () {
        // context.drawImage(player, 0, 0, 640, 480);
        const dataURL = canvas.toDataURL();
        fetch("/photos/create", {
            method: "POST",
            headers: {"Content-Type": "application/upload"},
            body: dataURL
        })
            .then(response => response.json())
            .then(response => {
                alert('succes')
            })
            .catch(error => {
                alert('error');
            })
    });

    player.addEventListener('play', () => {
        window.setInterval(function () {
            context.drawImage(player, 0, 0, 640, 480)
        }, 25);
    }, false);
</script>
</body>
</html>
<?php
//    gd_info();
