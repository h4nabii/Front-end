<?php

//   $uid = $_GET['uid'];
//   $age = $_POST['age'];

//   $uid = $_REQUEST['uid'];
//   $age = $_REQUEST['age'];

  $arr = $_REQUEST;
//   echo "your name:". $uid;
//   echo "<br />your age:" .$age;

   foreach($arr as $k=>$v){
       echo $k . "=>". $v ."<br />";
   }
?>
<html>
    <script>
           console.log(window.location.search);
        //    url=window.location.search.slice(1)
           url=location.search.slice(1)
           var arr=url.split('&')
           var obj={};
           for(var k in arr){
                  temp = arr[k].split('=')
                  obj[temp[0]]=temp[1]
           }
           console.log(obj);
    </script>
</html>
