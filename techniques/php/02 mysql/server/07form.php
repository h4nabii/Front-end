<?php
header("Content-type:text/html;charset=utf-8");
    //登录接口
    //1.获取前端传递的数据
    $uname=$_POST['uname'];
    $upwd=$_POST['upwd'];
    // echo $uname.$upwd;
    //2.连接数据库--查询当前输入的账号密码是否在数据库存在 --存在-登录成功 --不存在-账号或密码错误
    $con=mysqli_connect('localhost','root','','test8');
    if($con){
        mysqli_query($con,'set names utf8');
        //sql语句--查询语句--条件查询
        $sql="select * from userinfo where username='$uname' and password='$upwd'";

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