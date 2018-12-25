<?php

require 'application/Dev.php';

//define('ROOT', dirname(__FILE__));
//
//use application\core\Router;
//use application\lib\Db;
//
//spl_autoload_register(function ($class) {
//	$path = str_replace('\\', '/', $class . '.php');
//	if (file_exists($path)) {
//		require $path;
//	}
//});
//
//session_start();
//
//$router = new Router();
//$db = new Db();
//$router->run();
function sendMail($email, $message)
{
	$mail_subject = 'Camagru Notification'; // Give the email a subject
	$from_name = "Camagru Team";
	$from_mail = "unitcamagru@gmail.com";
	$hostname = substr(gethostname(), 0, 6);
	$encoding = "utf-8";
	
	// Set preferences for Subject field
	$subject_preferences = array(
		"input-charset" => $encoding,
		"output-charset" => $encoding,
		"line-length" => 76,
		"line-break-chars" => "\r\n"
	);
	
	$header = "Content-type: text/html; charset=" . $encoding . " \r\n";
	$header .= "From: " . $from_name . " <" . $from_mail . "> \r\n";
	$header .= "MIME-Version: 1.0 \r\n";
	$header .= "Content-Transfer-Encoding: 8bit \r\n";
	$header .= "Date: " . date("r (T)") . " \r\n";
	$header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);
	
	mail($email, $mail_subject, $message); // Send our email
}

sendMail("valeriya.zolotariova@gmail.com", "Привет! Тестирую отправку сообщений");