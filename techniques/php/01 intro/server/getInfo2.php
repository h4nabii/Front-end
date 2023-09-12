<?php
header("Content-type:text/html;charset=utf-8");

  $uid = $_REQUEST['uid'];
  if($uid==='admin'){
     echo "可以注册";
  }else{
     echo '已注册';
  }
?>
