<?php
    header("Access-Control-Allow-Origin: *");
    //模拟请求--等待时间
    sleep(3);//睡3秒之后--执行下面的内容
    echo '我是后台最新的数据';
?>
