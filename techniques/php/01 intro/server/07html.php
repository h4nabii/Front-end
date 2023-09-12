<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>页面布局--顶部</h2>
    <p>百度搜搜内容</p>
    <p>推荐内容</p>
    <!-- 动态获取新闻 -->
    <ul>
        <li><?php  echo '后台数据'; ?></li>
        <li><?php  echo '后台数据2'; ?></li>
        <li><?php  echo '后台数据3'; ?></li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
    </ul>

    <?php
        $arr=[10,20,30,40];
        echo '<div> <ul>
                <li>哈哈哈</li>
                <li>哈哈哈</li>
                <li>哈哈哈</li>
            </ul></div>';
    ?>

</body>
</html>
