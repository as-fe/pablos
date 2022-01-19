<?php
require_once("dB.php");

/*
Redirects to given location
@param $new_location - destination of redirect
*/

function Redirect_to($new_location) {
	header("location:".$new_location);
	exit;
}
/*
Checks if user exists in the admin table and returns true or false based on result
*/
function checkuserexist($usern) {
	global $connectdb;
	$sql="SELECT username FROM admins WHERE username=:userN";
	$stmt=$connectdb->prepare($sql);
	$stmt->bindValue(':userN', $usern);
	$stmt->execute();
	$result=$stmt->rowcount();
	if($result==1) {
		return true;
	}else	{
		return false;
	}
}  

/*
Checks if username and password match in the dB and returns the values to be passed to the session cookie, otherwise returns null
*/

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
/*
Function to protect the dashboard from unauthorized access - returns true if session cookie exists or redirects to login page
*/
function confirm_log(){
	if(isset($_SESSION["user_id"])){
		return true;
		
	}else {
		
		Redirect_to("login.php");
	}
}
?>