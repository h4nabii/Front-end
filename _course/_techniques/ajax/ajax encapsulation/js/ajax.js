//定义你封装的函数  myAjax(obj)  
//参数：obj={method:'请求方式get/post',url:'请求地址',data:{参数对象},success:''}
function myAjax(obj) {
    var xhr = new XMLHttpRequest();
    //先判断是否有参数传递 有参数 {username:qq,password:123} 转成'username=qq&password=123'
    var newStr = '';
    if (obj.data) {
        var str = '';
        for (var key in obj.data) {
            str += key + '=' + obj.data[key] + '&';
        }
        newStr = str.slice(0, str.length - 1);
    }

    //再判断请求方式是get/post
    if (obj.method.toLowerCase() == 'get') {
        xhr.open('get', obj.url + '?' + newStr, true)
        xhr.send();
    } else if (obj.method.toLowerCase() == 'post') {
        xhr.open('post', obj.url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(newStr);
    }
    //监听函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {//请求成功--有数据
                //回调函数的形式  把成功的结果返回给success函数  --实参xhr.responseText
                obj.success(xhr.responseText);
            }
        }
    }

}
