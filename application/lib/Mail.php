<?php
	
	function sendMail($email, $message)
	{
		$mail_subject = 'Camagru Notification'; // Give the email a subject
		$from_name = "Camagru Team";
		$from_mail = "pzubar-camagru@gmail.com";
		$encoding = "utf-8";
		
		$header = "Content-type: text/html; charset=" . $encoding . " \r\n";
		$header .= "From: " . $from_name . " <" . $from_mail . "> \r\n";
		$header .= "MIME-Version: 1.0 \r\n";
		$header .= "Content-Transfer-Encoding: 8bit \r\n";
		$header .= "Date: " . date("r (T)") . " \r\n";
		
		mail($email, $mail_subject, $message, $header);
	}