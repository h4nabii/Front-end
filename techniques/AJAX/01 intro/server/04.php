<?php
    header("Access-Control-Allow-Origin: *");

    $username = $_POST['username'];
    $password = $_POST['password'];

    echo '前端传递的 post 数据:' . $username . $password;
?>
