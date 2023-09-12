<?php
header("Content-type:text/html;charset=utf-8");
    //1.连接诶
    $con=mysqli_connect('localhost','root','','test8');
    if($con){
        //2.设置编码格式
        mysqli_query($con,'set names utf8');

        $sql="insert into userinfo(username,password) values('chinaren','8899')";


        //4.执行sql
        $res=mysqli_query($con,$sql);
        // var_dump($res);
        if($res){
            echo '信息插入成功';
        }else{
            echo '数据信息插入失败---错误';
        }

    }else{
        echo '连接数据库失败';
    }
    //关闭
    mysqli_close($con);


?>
