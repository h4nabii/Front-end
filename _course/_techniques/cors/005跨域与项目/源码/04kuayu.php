<?php

    //get请求 访问跨域的资源
    $res=file_get_contents("https://u.y.qq.com/cgi-bin/musicu.fcg?_=1588039173215&data={%22comm%22:{%22g_tk%22:819568952,%22uin%22:%22%22,%22format%22:%22json%22,%22inCharset%22:%22utf-8%22,%22outCharset%22:%22utf-8%22,%22notice%22:0,%22platform%22:%22h5%22,%22needNewCode%22:1,%22ct%22:23,%22cv%22:0},%22topList%22:{%22module%22:%22musicToplist.ToplistInfoServer%22,%22method%22:%22GetAll%22,%22param%22:{}}}");
    echo $res;

?>
