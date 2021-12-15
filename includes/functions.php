<?php
require_once("dB.php");

function Redirect_to($new_location) {
	header("location:".$new_location);
	exit;
}

function checkuserexist($usern) {
	global $connectdb;
	$sql="SELECT username FROM admins WHERE username=:userN";
	$stmt=$connectdb->prepare($sql);
	$stmt->bindValue(':userN', $usern);
	$stmt->execute();
	$result=$stmt->rowcount();
	if($result==1) {
		return true;
	}else
	{return false;
	}
}

function login_attempt($usern, $pass){
	global $connectdb;
	$sql="SELECT * FROM admins WHERE username=:usern AND password=:pass LIMIT 1";
	$stmt=$connectdb->prepare($sql);
	$stmt->bindValue(':usern', $usern);
	$stmt->bindValue(':pass', $pass);
	$stmt->execute();
	$result=$stmt->rowcount();
	if($result==1){
		return $founda=$stmt->fetch();
	}else {
		return null;
	}
}

function confirm_log(){
	if(isset($_SESSION["user_id"])){
		return true;
		
	}else {
		
		Redirect_to("login.php");
	}
}
?>