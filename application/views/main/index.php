<style>
	.post-container img {
		max-width: 100%;
	}

	.post-container {
		margin: 10px;
		padding: 0;
	}

	.post-meta {
		padding: 10px;
	}

	.post-author {
		font-size: 1em;
		font-weight: bold;
	}

	.post-date {
		color: #5a6268;
	}
</style>

<?php
	foreach ($posts as $val):?>
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="card col-md-12 post-container">
					<div class="post-meta">
						<div class="post-author">
							<?php echo $val['username'] ?>
						</div>
						<span class="post-date">
							<small>
								<?php echo $val['postdate'] ?>
							</small>
						</span>
					</div>
					<img src='<?php echo $val['filename'] ?>'>
				</div>
			</div>
		</div>
	<?php endforeach;
?>
