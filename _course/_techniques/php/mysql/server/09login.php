<?php

    //定义接受的变量
    $uname=$_POST['username'];
    $mima=$_POST['password'];

    // echo '哈哈哈---后台数据'.$uname.$mima;
    //连接数据--查询语句
    $con=mysqli_connect('localhost','root','','test8');
    if($con){
        mysqli_query($con,'set names utf8');
        //sql语句--查询语句--条件查询
        $sql="select * from userinfo where username='$uname' and password='$mima'";

        $res=mysqli_query($con,$sql);
        //如果有数据--num_rows>0   没数据：num_rows=0
        if($res->num_rows > 0){
            echo '登录成功';
        }else{
            echo '账号或者密码错误';
        }

    }else{
        echo '连接失败';
    }
    mysqli_close($con);



?>
