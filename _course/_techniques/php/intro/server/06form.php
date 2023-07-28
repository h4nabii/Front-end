<?php
    //后端定义 接受表单数据
    // $uname=$_GET['username'];
    // $upwd=$_GET['password'];

    //post
    $uname = $_POST['username'];
    $upwd = $_POST['password'];

    // echo "你输入的账号和密码为：$uname $upwd";
    //本地假设：账号=admin  密码=123
    if($uname=='admin' && $upwd==123){
        echo '登录成功--进入首页';
    }else{
        echo '账号或者密码错误';
    }
?>
