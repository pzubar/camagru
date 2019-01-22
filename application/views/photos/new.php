<!--<!doctype html>-->
<!--<html lang="en">-->
<!--<head>-->
<!--    <meta charset="UTF-8">-->
<!--    <meta name="viewport"-->
<!--          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
<!--    <meta http-equiv="X-UA-Compatible" content="ie=edge">-->
<!--    <title>Document</title>-->
<!--</head>-->
<!--<body>-->
<!--    <video id="video" width="640" height="480" autoplay></video>-->
<!--    <button id="snap">Snap Photo</button>-->
<!--    <canvas id="canvas" width="640" height="480"></canvas>-->
<!--    <script>-->
<!--        const player = document.getElementById('video');-->
<!---->
<!--        navigator.getMedia = ( navigator.getUserMedia ||-->
<!--            navigator.webkitGetUserMedia ||-->
<!--            navigator.mozGetUserMedia ||-->
<!--            navigator.msGetUserMedia);-->
<!---->
<!--        navigator.getMedia(-->
<!--            {-->
<!--                video: true,-->
<!--                audio: false-->
<!--            },-->
<!--            function(stream) {-->
<!--                if (navigator.mozGetUserMedia) {-->
<!--                    player.mozSrcObject = stream;-->
<!--                } else {-->
<!--                    player.srcObject = stream;-->
<!--                }-->
<!--                player.play();-->
<!--                // is_video = true;-->
<!--            },-->
<!--            function(err) {-->
<!--                // is_video = false;-->
<!--                // captureButton.disabled = true;-->
<!--            }-->
<!--        );-->
<!---->
<!--        const canvas = document.getElementById('canvas');-->
<!--        const context = canvas.getContext('2d');-->
<!--        // Trigger photo take-->
<!--        document.getElementById("snap").addEventListener("click", function() {-->
<!--            context.drawImage(player, 0, 0, 640, 480);-->
<!--        });-->
<!---->
<!--    </script>-->
<!--</body>-->
<!--</html>-->
<?php
//    gd_info();
