<!DOCTYPE html>

<html lang=de>

<head>
<meta charset=utf-8>
<title>Kontakt</title>
<link rel="stylesheet" href="stylesheet.css" />
</head>

<body>

<div class="kontakt">

    <h1>Kontaktformular</h1>

<?php

  echo '<pre>';
    var_dump($_GET);
    echo '</pre>';

    $first_name     = $_GET['first_name'];
    $last_name      = $_GET['last_name'];
    $email          = $_GET['email'];
    $phone          = $_GET['phone'];

    echo("<h1>Deine Nachricht</h1>");
    echo("<p>Folgende Nachricht ist bei uns eingelangt:</p>");
    echo("<p>$first_name $last_name</p>");
    echo("<p>$email</p>")
    echo("<p>$phone</p>");
    echo("<p>$Nachricht</p>")
    echo("<p class=\"gap\"><strong>Danke für deine Anfrage!</strong></p>");
?>

</div>

</body>
</html>