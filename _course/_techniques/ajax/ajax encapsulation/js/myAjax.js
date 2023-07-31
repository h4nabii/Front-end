//封装的原生的ajax请求步骤4步：
//参数是对象object={method:'get/post',url:'',data:{key:value,...},success:'',error:''}
function myAjax(obj) {//obj=object
    // console.log(obj);         
    //1.创建xml对象
    var xhr = new XMLHttpRequest();
    //2.准备发送 xhr.open('get','url',true) 
    //2.1 判断是否有参数 有参数我们需要处理参数  data:{key:value} 但是我们get/post参数：uname=qq&mima=123
    //2.2 判断当前的请求方式get/post 如果get发送get请求 否则发送post请求
    var newStr = '';
    if (obj.data) {//判断有没有传递参数 data属性是否存在
        //获取obj.data属性--存在--说明有参数
        // console.log(obj.data);//{username: "aaa", password: "123"} -->username=aaa&password=123
        //遍历对象 for--in 
        var str = '';
        for (var key in obj.data) {
            // console.log(key,obj.data[key]);    
            str += '&' + key + '=' + obj.data[key];
        }
        // console.log(str);//&username=aaa&password=123  前面多了& 去掉
        newStr = str.slice(1);
        // console.log(newStr);//username=aaa&password=123      
    }
    //2.2 判断当前的请求方式get/post 如果get发送get请求 否则发送post请求
    if (obj.method.toLowerCase() == 'get') {//get请求 不区分大小写  
        xhr.open('get', obj.url + '?' + newStr, true);//xxxx.php? 没有参数多?不影响 
        //3.发送
        xhr.send();
    } else if (obj.method.toLowerCase() == 'post') {
        xhr.open('post', obj.url, true);
        //3.发送
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(newStr);
    }

    //4.监听函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // console.log(xhr.responseText);  
                //成功后 把请求的结果返回给myAjax方法里面的success()  函数 
                //获取obj.success()方法 把请求的结果 以函数的形式返回出去  
                obj.success(xhr.responseText);
            } else {
                //    console.log('失败');
                obj.error('失败');
            }
        }
    }
}
