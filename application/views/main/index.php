<style>
    .post-container img {
        width: 100%;
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

<script>
	window.postsNum = <?php if (isset($postsNum)) {
		echo $postsNum;
	}   ?>;
	<?php if (isset($_SESSION['logged_user'])): ?>
	window.$uId = <?php echo $_SESSION['logged_user']['id'] ?>;
	window.$uName = "<?php echo $_SESSION['logged_user']['username'] ?>";
	<?php endif; ?>
</script>
<div id="wrapper" style="height: calc(100vh - 60px); overflow: auto;">
    <div id="publications-container">
    </div>
</div>

<script src="/public/js/index.js"></script>
