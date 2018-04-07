<?php
	header("Content-Type:text/xml; charset=utf-8");//注意，由于你是以xml形式传递过来的，所以这里必须写。
	echo "<?xml version='1.0' encoding='utf-8'?>".
	     "<root>".
		 "<name>{$_REQUEST['name']}</name>".
		 "<address>{$_REQUEST['address']}</address>".
		 "<comment>{$_REQUEST['comment']}</comment>".
		 "</root>";
?>
