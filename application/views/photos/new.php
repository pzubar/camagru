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

        .photo-remover {
            position: absolute;
            top: 0;
            right: 0;
            color: #6c757d;
            cursor: pointer
        }

        .photo-remover:hover {
            color: red;
        }

        #browse-files {
            margin-bottom: 10px;
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
                <input id="browse-files" type="file" onchange="downloadFiles()">
            </div>
            <div id="preview"></div>
            <div class="col-md-10">
                <h6>Superposable images:</h6>
                <div class="superposables-container">
                    <div class="col-md-2 col-xs-4 col-sm-4 superposable-image">
                        <i class="fas fa-2x fa-ban" id="remove-super-pos"></i>
                    </div>
					<?php if (isset($superposables)): ?>
						<?php foreach ($superposables as $val): ?>
                            <div class="col-md-2 col-xs-4 col-sm-4 superposable-image">
                                <img id="sp-<?php echo $val['id'] ?>"
                                     src="/images/superposables/<?php echo $val['filename'] ?>" alt="">
                            </div>
						<?php endforeach; ?>
					<?php endif; ?>
                </div>
            </div>
            <div class="col-md-10">
                <button id="snap" class="btn btn-outline-primary btn-lg btn-block">Snap Photo</button>
            </div>
        </div>
        <div class="col-md-2 col-sm-12 photos-container" style="margin: 10px 0; max-height: 600px; overflow: auto">
            <h6>My photos:</h6>
			<?php if (isset($photos)): ?>
				<?php foreach ($photos as $val): ?>
                    <div style="position: relative" id="<?php echo $val['id'] ?>">
                        <img src="<?php echo $val['filename'] ?>" style="max-width: 100%; margin: 5px 0" alt="">
                        <i class="fas fa-times-circle photo-remover" onclick="deletePhoto(event)"></i>
                    </div>
				<?php endforeach; ?>
			<?php endif; ?>
        </div>
    </div>
</div>
<script type="application/javascript" src="<?php echo '/public/js/new_photo.js' ?>"></script>
<script>
	function deletePhoto(e) {
		const {id} = e.target.parentNode;
		const formData = new FormData();

		formData.append('id', id);
		fetch('/photos/remove', {
			method: 'POST',
			body: formData,
		}).then((response) => {
			if (!response.ok) {
				throw "Response status was not ok: " + response.status;
			}
			else
				return response.json();
		}).then(result => {
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		}).catch(e => {
		})
	}
</script>
</body>
</html>
