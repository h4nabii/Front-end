<?php
    header("Access-Control-Allow-Origin: *");

    //定义接受的变量
    $username=$_GET['username'];
    $password=$_GET['password'];

    // echo '后台返回的数据'.$username.$password;
    //1.连接数据库---注册信息--不能重复添加账号
    //2.先判断是否存在这个账号   存在 告诉页面--已存在
    //3.当前的账号不存在  不存在 --插入语句 发送插入语句
    $con=mysqli_connect('localhost','root','','2002');
    if($con){
        //编码格式
        mysqli_query($con,'set names utf8');
        //先查询
        $sql="select * from userinfo where username='$username'";
        //发送
        $res=mysqli_query($con,$sql);
        //注意：查询语句 在php里面返回是对象  object  语法：获取对象的属性$res->num-rows
        if($res->num_rows > 0){
            // echo '账号已存在，请重新输入';
            echo 1;//数字1表示 账号存在
        }else{
            //账号不存在---表示-可以添加信息
            $sql2="insert into userinfo(username,password) values('$username','$password')";
            $res2=mysqli_query($con,$sql2);
            if($res2){
                // echo '注册成功';
                echo 2;//注册成功
            }
        }
    }
    else{
        echo '连接数据库失败';
    }
    mysqli_close($con);
?>
