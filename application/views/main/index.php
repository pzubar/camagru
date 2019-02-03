<style>
	.post-container img {
		max-width: 100%;
	}
</style>

<?php
	foreach ($news as $val):?>
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="card col-md-12 post-container">
					<h6><?php echo $val['username'] ?></h6>
					<p><small><?php echo $val['postdate'] ?></small></p>
					<img src='<?php echo $val['filename'] ?>'>
				</div>
			</div>
		</div>
	<?php endforeach;
?>
