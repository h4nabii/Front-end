<?php
    header("Access-Control-Allow-Origin: *");
    $username=$_GET['username'];
    $password=$_GET['password'];
    echo '后台返回的数据' . $username . $password;
?>
