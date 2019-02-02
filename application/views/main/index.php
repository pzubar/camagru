<!--<p>Главная страница</p>-->

<!--    --><?php //foreach ($news as $val):?>
<!--        --><?php //echo $val['filename']?>
<!--    --><?php //endforeach; ?>
<?php
foreach ($news as $val):?>
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col-md-auto">
				<h6><?php echo $val['username']?></h6>
				<p><?php echo $val['postdate']?></p>
				<img src='<?php echo $val['filename']?>'>
			</div>
		</div>
	</div>
<?php endforeach; ?>
