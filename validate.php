<?php

$fullname = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$is_complete = false;
$host = '';
$user = '';
$password = '';
$db = '';
$dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

if($fullname && $email && $subject && $message) {
	try {
		$pdo = new PDO($dsn, $user, $password);

		if($pdo) {
			echo "Connected to the $db database successfully!";
		}
	} catch(PDOException $e) {
		echo $e->getMessage();
	}
}