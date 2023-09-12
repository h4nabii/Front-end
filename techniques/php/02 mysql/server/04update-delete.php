<?php

    //1.连接诶
    $con=mysqli_connect('localhost','root','','test8');
    if($con){
        //2.设置编码格式
        mysqli_query($con,'set names utf8');
        //3.sql语句
        //3.1 修改语句
        $sql="update userinfo set password='12345678' where id=1";
        // $sql="update userinfo set password='12345678' where username='wwww'";

        //3.2 删除语句
        //语法：$sql="delete from 表名 where id=1";
        // $sql="delete from userinfo where id=11 or id=12 or id=1";
        // $sql="delete from userinfo where id=11";

        //4.执行sql
        $res=mysqli_query($con,$sql);
        var_dump($res);
        // if(){}

    }else{
        echo '连接数据库失败';
    }
    //关闭
    mysqli_close($con);


?>
