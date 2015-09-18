<?php
$file_url = "./swap/ansurCsvOutput.csv";
$csvOutput = $_POST['csvOutput'];
file_put_contents($file_url,$csvOutput);

header("Content-Description: File Transfer"); 
header("Content-Type: application/octet-stream"); 
header("Content-Disposition: attachment; filename=\"ANSUR_Download.csv\""); 

readfile ($file_url); 

?>