<?php

 // gettype
 // settype
 
    //1.定义变量
    $str='hello world';//弱类型
    $str=123;
    echo $str;
    echo '<hr/>';

    //2.字符串数据类型
    // $str='hello';
    // echo gettype($str);//string

    // $num=100;
    // echo gettype($num);//integer

    // $n=10.2;
    // echo gettype($n);//double

    // $flag=true;
    // echo gettype($flag);//boolean

    //字符串和js里面有什么不同：
    //1.js里面拼接 +  但是php用.   2.'' "" 区别:""解析变量 然后输出  ''单引号直接输出内容
    $str="hello world";
    // echo $str;
    // echo '$str';
    // echo "$str";

    $eat='今天中午吃什么?';
    $food="吃的烤羊肉";
    // echo "小明说：".$eat.'我说：'.$food;
    echo "小明说：$eat 我说： $food";



?>