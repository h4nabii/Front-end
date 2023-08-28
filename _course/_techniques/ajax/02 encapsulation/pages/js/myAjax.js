//封装的原生的ajax请求步骤4步：
//参数是对象object={method:'get/post',url:'',data:{key:value,...},success:'',error:''}
function myAjax(obj) {

    // 1. 创建 XHR 对象
    let xhr = new XMLHttpRequest();

    // 2. 准备发送 xhr.open('get', 'url', true)
    // 2.1 判断是否有参数，有参数我们需要处理参数 data:{key:value}
    // 2.2 判断当前的请求方式，如果为 get 发送 get 请求，否则发送 post 请求
    let queryString = "";

    // 2.1 判断是否有参数，有参数我们需要处理参数 data:{key:value}
    if (obj.data) {
        queryString = "?" + Object.entries(obj.data).map(([key, value]) => `${key}=${value}`).join("&");
    }

    // 2.2 判断当前的请求方式，如果为 get 发送 get 请求，否则发送 post 请求
    if (obj.method.toLowerCase() === "get") {
        xhr.open("get", obj.url + queryString, true);
        // 3. 发送 get数据
        xhr.send();
    } else if (obj.method.toLowerCase() === "post") {
        xhr.open("post", obj.url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        // 3. 发送 post 数据
        xhr.send(queryString);
    }

    // 4. 监听函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                obj.success && obj.success(xhr.response);
            } else {
                obj.error && obj.error(new Error("AJAX 请求失败"));
            }
        }
    };
}
