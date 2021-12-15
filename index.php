<?php
session_start();
require_once('includes/dB.php');
require_once('includes/controller.php');



?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Pablo's - Magazin online Off-Road - Chestionar initial</title>
    <meta charset="UTF-8" />
    <meta name="Language" content="ro" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <link rel="stylesheet" href="css/pablos.css" type="text/css" />
    <script type="module" defer src="js/controller.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap"
      rel="stylesheet"
    />
    
  </head>
  <body>
  <a href="index.php" class="sigla"><img src="foto/logo.png" alt="sigla" class="fullimg"/></a>
  
    <?php echo $message; ?>
    <form method="post" id="qForm"  class="form">
   <input type="text" hidden name="json" id="json" >
      <div id="root"></div>
    </form>
    <div class="progress">
      <p class="indicatorprogres">
        <span id="locatie">0</span>/<span id="totalq">0</span>
      </p>
      <div class="frame">
        <div class="bar"></div>
      </div>
    </div>
  
  </body>
</html>
