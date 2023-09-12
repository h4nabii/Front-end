<?php

    $fun=$_GET['callback'];//callback=demo  demo函数名字

    //当前php文件接收请求--处理数据
    $obj='{msg:"ok",data:"数据"}';

    //返回给
    echo "$fun($obj)";

?>
