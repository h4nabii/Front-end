<?php
header("Content-type:text/html;charset=utf-8");
   $arr=array('name'=>'起航教育','student'=>"计量大学",'午饭'=>'牛肉面');
   echo $arr;
   echo "<hr>";
   echo "<pre>";
   echo print_r($arr);
   echo "</pre>";
   echo "<hr>";
   echo "<pre>";
   var_dump($arr);
   echo "</pre>";

   echo "<hr>";

    foreach($arr as $k=>$v){
        echo $k.'=>'.$v.'<br/>';
    }






?>
