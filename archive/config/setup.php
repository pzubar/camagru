<?php
	include('config/database.php');

	if (!file_exists('config/database.php') || !$DB_USER || !$DB_PASSWORD || !$DB_NAME) {
		header('Location: ./install_form.php?msqlogin=root');
	} else {
		return(1);
	}
	
?>