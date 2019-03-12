<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .superposables-container {
            margin: 10px
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
        }

        .superposable-image {
            display: inline-block;
            border: 1px solid lightgrey;
            margin: 10px auto;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 3px;
        }

        .superposable-image img {
            max-width: 100%;
        }

        .superposable-image:first-child {
            border: 0;
            text-align: center;
            color: #ed969e;
        }

        #snap {
            margin-top: 10px;
        }

        .new-photos-container canvas {
            margin: 25px auto;
        }

        #remove-super-pos {
            cursor: pointer;
        }

        .superposable-image img {
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="container new-photos-container">
    <div class="row justify-content-md-center">
        <div class="col-md-10 col-sm-12">
            <div class="col-md-10">
                <video id="video" width="1600" height="900" autoplay style="display: none"></video>
                <canvas id="canvas"></canvas>
            </div>
            <div class="col-md-10">
                <h6>Superposable images:</h6>
                <div class="superposables-container">
                    <div class="col-md-2 col-xs-4 col-sm-4 superposable-image">
                        <i class="fas fa-2x fa-ban" id="remove-super-pos"></i>
                    </div>
					<?php foreach ($superposables as $val): ?>
                        <div class="col-md-2 col-xs-4 col-sm-4 superposable-image">
                            <img id="sp-<?php echo $val['id'] ?>"
                                 src="/images/superposables/<?php echo $val['filename'] ?>" alt="">
                        </div>
					<?php endforeach; ?>
                </div>
            </div>
            <div class="col-md-10">
                <button id="snap" class="btn btn-outline-primary btn-lg btn-block">Snap Photo</button>
            </div>
        </div>
        <div class="col-md-2 col-sm-12 photos-container" style="margin: 10px 0; max-height: 600px; overflow: auto">
            <h6>My photos:</h6>
			<?php foreach ($photos as $val): ?>
                <img id="sp-<?php echo $val['id'] ?>"
                     src="<?php echo $val['filename'] ?>" style="max-width: 100%; margin: 5px 0" alt="">
			<?php endforeach; ?>
        </div>
    </div>
</div>
<!--<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>-->
<script src="/public/js/new_photo.js"></script>
</body>
</html>
