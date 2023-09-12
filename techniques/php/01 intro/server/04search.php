<?php
/*
 * @Description:
 * @Author: front end cabbage
 * @Date: 2023-07-17 11:12:34
 * @LastEditTime: 2023-07-17 11:32:49
 * @LastEditors: front end cabbage
 * @FilePath: \htg\code\04search.php
 */

// 预定义常量
// 预定义变量


    //请求方式：接受的url地址栏传递的参数
    //get请求  定义接受的变量 wd
    //网络请求:http请求 get/post
    //get请求    获取资源   （统一资源）
    //post请求   一般是传递数据form
    //put请求    修改修改
    //delete请求 删除某个的请求


    $code=$_GET['wd'];
    if($code){
        echo '查询的内容是很多很多----'.$code;
    }


?>
