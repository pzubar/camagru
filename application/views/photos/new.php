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
	</style>
</head>
<body>

<div class="container">
	<div class="row justify-content-md-center">
		<div class="col-md-10">
			<video id="video" width="1600" height="900" autoplay style="display: none"></video>
			<canvas id="canvas"></canvas>
		</div>
		<div class="col-md-10">

			<h6>Superposable images:</h6>
			<div class="superposables-container">
				<!--					--><?php //foreach ($photos as $val): ?>
				<?php
					$val = $photos[0];
					for ($i = 0; $i < 20; $i++): ?>
						<div class="col-md-2 superposable-image">
							<img id="sp-<?php echo $i ?>"
								 src="/images/superposables/<?php echo $val['filename'] ?>" alt="">
						</div>
					<?php endfor; ?>
			</div>
		</div>
		<div class="col-md-10">
			<button id="snap" class="btn btn-dark">Snap Photo</button>
		</div>
	</div>
</div>

<script src="/public/js/new_photo.js"></script>
</body>
</html>
