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
		$mesaj="You have been subscribed to our mailing list.";
	} else {
		$mesaj="There has been a problem, please try again.";
	}
}


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Survey app - Thank you</title>
    <meta charset="UTF-8">
<meta name="Language" content="ro">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
     <link rel="stylesheet" href="css/pablos.css" type="text/css">
	 
   <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap" rel="stylesheet">
    
</head>
<body>
<a href="index.php" class="sigla"><img src="foto/logo.png" alt="sigla atelier custom web" class="fullimg"/></a>
 
<div class="full oh panou " id="raspuns" data-name="fin">
<h1>Thank you</h1>
	   <p>We have received your responses and recorded them with number:</p>

<p class="cod"><?php echo $_SESSION['string']; ?></p>

<p>Want to be in the loop? Subscribe to our newsletter!</p>
<form method="post">
<input type="email" placeholder="Email" name="inscrierenl" id="inscrierenl" class="inputemail ">
<input type="submit" class="butonnextchest " id="nl" name="insnl" value="Subscribe me" >

<p><?php
echo $mesaj; ?></p>
</form>
</div>     




</body>
</html>