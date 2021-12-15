
<?php 
function Test_User_Input($Data) {
    $Data = trim($Data);
    $Data = stripslashes($Data);
    $Data = htmlspecialchars($Data);
   return $Data;
}
$message="";


if(isset($_POST['submitfin'])) {
	
	$_SESSION['string'] = substr(uniqid('', true), -5);
	$cod=$_SESSION['string'];
	$array=[];

	foreach($_POST['q5'] as $lastQVal) {
array_push($array, ",q5: ".$lastQVal );
	}

	$lastq=implode($array);
	$uglyresponses=Test_User_Input(json_encode($_POST['json']).$lastq);
	$responses=str_replace('&quot;', '', $uglyresponses);
	
	
	$connectdb;
		$sql = "INSERT INTO raspunsuri(q1, cod)
		VALUES(:q1, :coD)";
		$stmt = $connectdb->prepare($sql);
		$stmt->bindValue('q1',$responses);
		$stmt->bindValue('coD',$cod);
				
		$execute = $stmt->execute();
		if($execute){
		header('Location: thankyou.php');
		} else {
		echo "<p class='outputtext full'>There has been a problem, please try again!</p>";
		}
}


