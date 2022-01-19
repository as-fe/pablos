<?php 
/*Filters the input data
@param $Data - data input by the user
@return $Data - filtered input
*/ 
function Test_User_Input($Data) {
    $Data = trim($Data);
    $Data = stripslashes($Data);
    $Data = htmlspecialchars($Data);
   return $Data;
}
$message="";

/* Uploads photos to the "uploads" folder in root
@var $_FILES[q2]- change q2 to the number of the question with file input, or create an array of file inputs
@var $path - the output folder
@var $filename = uses the session generated string - needs either concatenation with $i or conditional clause for multiple file uploads

*/
function uploadFoto() {
 
	$maxAllowedFileSize = 10000000000;
	$path='uploads/';
	
	if (isset($_FILES['q2']['name'])){
	  
	foreach ($_FILES['q2']['name'] as $i => $name) {  
		$tmp_name = $_FILES['q2']['tmp_name'][$i];
		$error = $_FILES['q2']['error'][$i];
		$size = $_FILES['q2']['size'][$i];
		$type = $_FILES['q2']['type'][$i];
	   
		if ($error === UPLOAD_ERR_OK) {
			$extension = pathinfo($name, PATHINFO_EXTENSION);
			if (!in_array(strtolower($extension), array('jpg', 'jpeg', 'png'))) {
				echo "<script>alert('Error: file type not supported')</script>";
			} else if ($size > $maxAllowedFileSize ) {
				echo "<script>alert('Error: size to big');</script>";
				
			} else {
			
					$filename=$_SESSION['string']; 
					$newFileName = $path.$filename.'.'.$extension; 
					if (move_uploaded_file($tmp_name, $newFileName)) {
						return true;
				}
			}
		}
		$i++;
	}
	}
	
	}

/*
Submits the responses to the dB. Calls uploadFoto() to upload the selected file
1. Creates unique session string
2. Pushes the last question value to the responses array
3. Filters the input and json_encodes the array of responses
4. Prettifies the output by replacing &quot;
5. Inserts the responses to the dB with PDO and binded values
6. Uploads the photo to the folder
7. Redirects to thankyou page.

*/
if(isset($_POST['submitfin'])) {
	
	$_SESSION['string'] = substr(uniqid('', true), -5);
	$cod=$_SESSION['string'];
	$array=[];
	$qno=$_POST['qno'];

	foreach($_POST['q'.$qno] as $lastQVal) {
	array_push($array, ",q".$qno.": ".$lastQVal );
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
		
		uploadFoto();
		if($execute){
			
		header('Location: thankyou.php');
		} else {
		echo "<p class='outputtext full'>There has been an issue, please try again.</p>";
		}
}

