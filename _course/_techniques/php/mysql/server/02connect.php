<?php


    //1.创建连接  mysqli_connect('域名','账号','密码','数据库名字','端口号');

    // mysql_connect("ip地址/域名",'root','')


    $con=mysqli_connect('localhost','root','','test8');
    //连接成功object  连接失败 bool(false)
    if($con){
        //2.设置编码格式 页面显示和数据库同步编码utf8
        mysqli_query($con,'set names utf8');
        //3.sql语句
        //插入语句：insert into 表名(字段1,字段2,…) values(值1,值2,…)
        $sql="insert into userinfo(username,password) values('smith888','888')";

        //4.执行sql语句
        $result=mysqli_query($con,$sql);
        var_dump($result);//bool(true)

    }else{
        echo '连接数据库失败';
    }
    //5.关闭数据库
    mysqli_close($con);
    //....下面不能使用了----

    //$sql=''
    // mysqli_query()

?>
