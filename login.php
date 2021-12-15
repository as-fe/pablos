<?php
session_start();
require_once('includes/dB.php');
require_once('includes/functions.php');
 $mesaj="test";
if(isset($_SESSION["user_id"])) {
Redirect_to("dashboard.php");
}else {
if(isset($_POST["submit"])){
$usern=$_POST["usern"];
$pass=$_POST["pass"];

if (empty($usern)||empty($pass)) {
	Redirect_to("login.php");
$mesaj="trebuie sa completati campurile";
}else {
	$founda=login_attempt($usern, $pass);
	if($founda) {
		$_SESSION["user_id"]=$founda["id_admin"];
		Redirect_to("dashboard.php");
	}else {
		$mesaj="db problem";
		Redirect_to("login.php");
		
	}
}

}
}


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Login</title>
    <meta charset="UTF-8">
<meta name="Language" content="ro">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
     <link rel="stylesheet" href="css/pablos.css" type="text/css">
	 
   <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap" rel="stylesheet">
    
</head>
<body>
<a href="index.php" class="sigla"><img src="foto/logo.png" alt="sigla" class="fullimg"/></a>
 
<div class="full oh panou " id="raspuns" data-name="fin">
<h4>Welcome back!</h4>

<form method="POST">

<label for="usern"><span class="fieldinfo">Username:</span></label>

<input type="text" class="inputselect" name="usern" id="usern">

<label for="pass"><span class="fieldinfo">Password:</span></label>

<input type="password" class="inputselect" name="pass" id="pass">




<input type="submit" name="submit" class="butonadmin" value="Log in">
</form>

</div>
    
    




</body>
</html>