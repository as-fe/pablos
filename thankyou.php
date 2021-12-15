<?php
session_start();
require_once('includes/dB.php');
 $mesaj="";
function Test_User_Input($Data) {
    $Data = trim($Data);
    $Data = stripslashes($Data);
    $Data = htmlspecialchars($Data);
   return $Data;
}
if(isset($_POST['insnl'])) {
$email=filter_var($_POST["inscrierenl"], FILTER_SANITIZE_STRING);

$connectdb;
		$sql = "INSERT INTO inscrieri(email)
		VALUES(:email)";
		$stmt = $connectdb->prepare($sql);
		$stmt->bindValue('email',$email);

		$execute = $stmt->execute();
	if($execute){
		$mesaj="You have successfully subscribed to our newsletter!";
	} else {
		$mesaj="There has been a problem, please try again!";
	}
}


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Thank you!</title>
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
<h1>Thankyou</h1>
	   <p>Here is your voucher code:</p>

<p class="cod">VLO-<?php echo $_SESSION['string']; ?></p>

<p>Want to stay in touch?</p>
<form method="post">
<input type="email" placeholder="Your email" name="inscrierenl" id="inscrierenl" class="inputemail ">
<input type="submit" class="butonnextchest " id="nl" name="insnl" value="Salveaza" >

<p><?php echo $mesaj; ?></p>
</form>
</div>     




</body>
</html>