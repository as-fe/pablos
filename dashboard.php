<?php
session_start();
require_once('includes/dB.php');
require_once('includes/functions.php');

confirm_log();
 function totalcomp(){
	global $connectdb;
$sql="SELECT COUNT(*) FROM raspunsuri";
$stmt=$connectdb->query($sql);
$totalrows=$stmt->fetch();
$totalcomms=array_shift($totalrows);
echo $totalcomms;
}

function totalinsc(){
	global $connectdb;
$sql="SELECT COUNT(*) FROM inscrieri";
$stmt=$connectdb->query($sql);
$totalrows=$stmt->fetch();
$totalcomms=array_shift($totalrows);
echo $totalcomms;
}
?>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Dashboard</title>
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
<h1 class="center">Hello</h1>
	   <p class="center">Answers:</p>
<p class="cod"><?php htmlentities(totalcomp()); ?></p>

<p class="center">Subscribes:</p>
<p class="cod"><?php htmlentities(totalinsc()); ?></p>

<a class="butonadmin" href="logout.php"> Logout</a>
</div>     




</body>
</html>