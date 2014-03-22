<?php
$uploaddir = dirname( $_SERVER["SCRIPT_FILENAME"] ) . "/pix/";

$filename = basename($_FILES['bild']['name']);
$ext = substr($filename, -4);

if( $ext != '.jpg' &&  $ext != '.gif' &&  $ext != '.png' &&  $ext != '.docx' ) {
   die("es dürfen nur jpg, png oder gif Dateien hochgeladen werden, nicht " . substr($filename, -3) );
}

$uploadfile = $uploaddir . $filename;

if (move_uploaded_file($_FILES['bild']['tmp_name'], $uploadfile)) {
  echo "Datei erfolgreich hochgeladen nach <a href='bilder/'>bilder/</a>\n";
} else {
  echo "Problem beim Speichern der Datei.\n";
}

echo '<pre>debugging info:';
print_r($_FILES);
print '</pre>';

?>
