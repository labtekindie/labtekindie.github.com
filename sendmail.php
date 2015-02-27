<?php
define('DS',DIRECTORY_SEPARATOR);
require_once(ASSET_PATH.'PHPMailer'.DS.'class.phpmailer.php'); // path to the PHPMailer class

function sendEmail($email,$pesan,$subject,$from_name){
	$mail = new PHPMailer();  // create a new object
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true;  // authentication enabled
	$mail->Host = 'ssl://smtp.googlemail.com';
	$mail->Port = 465;
	$from = GMAIL_USER;
	$mail->Username = $from
	$mail->Password = GMAIL_PASS;
	//$mail->Host = "mail.ans4175.com";
	//$mail->Port = 25;
	//$mail->Username = "realita@ans4175.com"; // SMTP username
	//$mail->Password = "realita.umkm"; // SMTP password 
	//$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
	$mail->SetFrom($from, $from_name);  
	$mail->Subject  = $subject;
	$mail->Body = $pesan;
	$mail->AddAddress($email);
	if(!$mail->Send()) {
		$error = 'Mail error: '.$mail->ErrorInfo; 
		//return false;
	} else {
		$error = 'Message sent!';
		//return true;
	}
	echo $error;
}

var_dump($_POST)