<?php
    header("Access-Control-Allow-Origin: *");

    $username = $_GET['username'];
    $password = $_GET['password'];

    echo '前端请求是 get 参数如下：' . $username . " " . $password . "\n";
    echo "输出内容：{$username} {$password}";
?>
