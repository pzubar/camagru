<?php
    session_start();

 	function ft_sendmail($email, $name, $password, $hash) {

 		$to = $email; // Send email to our user
		$mail_subject = 'Welcome to Camagru | Account Verification'; // Give the email a subject 
		$from_name = "Camagru Team";
		$from_mail = "pzubar@student.unit.ua";
		$hostname = substr(gethostname(), 0, 6);
		$encoding = "utf-8";

		// Set preferences for Subject field
		$subject_preferences = array(
			"input-charset" => $encoding,
			"output-charset" => $encoding,
			"line-length" => 76,
			"line-break-chars" => "\r\n"
		);

		$header = "Content-type: text/html; charset=".$encoding." \r\n";
		$header .= "From: ".$from_name." <".$from_mail."> \r\n";
		$header .= "MIME-Version: 1.0 \r\n";
		$header .= "Content-Transfer-Encoding: 8bit \r\n";
		$header .= "Date: ".date("r (T)")." \r\n";
		$header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);

		$message = "
		<html>
		<head>
			<title>Welcome to Camagru!</title>
		</head>
		<body>
			<h2>Hello, " . $name . "</h2>
			<p>Thanks for signing up in Camagru!</p>
			<p>Your account has been created. Please, confirm your account by following the verification link below.</p>
		<table>
		<tr>
		<th>Username</th>
		<th>Password</th>
		</tr>
		<tr>
		<td>" . $name . "</td>
		<td>" . $password . "</td>
		</tr>
		</table>
		<br>
		<p>Please click this link to activate your account:</p>
		<a href='http://".$hostname.":8080/camagru/index.php?email=".$email."&hash=".$hash."' target='_blank'>Click me!</a>
		</body>
		</html>
		";
		mail($to, $mail_subject, $message, $header); // Send our email
 	}
 	$hash = hash(whirlpool, rand(0,1000));

?>