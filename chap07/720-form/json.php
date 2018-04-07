<?php
	header("Content-Type:html/text; charset=utf-8");
	echo '{ "name": "' . $_POST['name'] . '" , "address" :  "' . $_POST['address'] . '" , "comment" :  "' . $_POST['comment'] . '" }';
?>
