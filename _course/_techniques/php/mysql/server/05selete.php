<?php

    $con=mysqli_connect('localhost','root','','test8');
    if($con){
       //编码格式
       mysqli_query($con,'set names utf8');
       //sql语句 $sql = "select 【信息】 from 【哪张表】 where 【查询条件】";
       //1.1 查询数据里面表的所有的数据信息
       $sql="select * from userinfo";
       //1.2 查询id=1的这个条数据的所有信息
    //    $sql="select * from userinfo where id=10";
    //    //1.3 查询表里面所有的用户名字
    //    $sql="select username from userinfo";
    //    //1.4 查询表里面的所有的名字和密码
    //     //  $sql="select username,password,.. from userinfo";
    //    $sql="select username,password from userinfo";
    //    $sql="select username,password from userinfo where id=1";
    //    //1.5 登录 查询条件同时满足多个  and  并且 
    //    $sql="select * from userinfo where username='admin' and password='123'";
    //    //1.6 或者 既满足什么又满足 查询名字叫张三 或者李四的信息
    //    $sql="select * from userinfo where username='张三' or username='李四2'";
          
       //执行sql语句
       $res=mysqli_query($con,$sql);
        var_dump($res);//查询到数据到返回是一个结果集合(object)
        //集合的对象--转成数组--显示到页面
        if($res->num_rows > 0){//->箭头 是获取$res对象的属性    >0 表示行数>0  表示有数据
            //$arr=mysqli_fetch_all($result,MYSQLI_ASSOC);
            $arr=$res->fetch_array(MYSQLI_ASSOC);
            echo "<pre>";
            print_r($arr);
            echo "</pre>";
            $arr1=$res->fetch_array(MYSQLI_ASSOC);
            echo "<pre>";
            print_r($arr1);
            echo "</pre>";
        }else{
            echo '查无数据';
        }


    }else{
        echo '数据库链接失败';
    }

    mysqli_close($con);




?>