/***
 * 
 * 
 * 
 * 
 * 
 
nodejs中url模块的用法是什么

URL模块用于解析和处理URL字符串，提供了三个方法：

1、parse方法

    将url解析成对象，parse方法原型：

    url.parse(urlStr[, parseQueryString][, slashesDenoteHost])
    可传递三个参数，第一个必须
    urlStr：要解析成对象的url字符串
    parseQueryString：是否解析查询参数，默认为false
    slashesDenoteHost：是否以斜线解析主机名，默认为false

    只给第一个参数：

    var url = require('url');
    var testUrl1 = 'z.qingk.cn/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095?param1=111&param2=222'
    var urlParseUrl1 = url.parse(testUrl1)
    console.log(urlParseUrl1);
    结果：
    这里写图片描述

    第二个参数设为true
    也就是说要同时把url中?之后的查询参数解析成对象

    var url = require('url');
    var testUrl1 = 'z.qingk.cn/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095?param1=111&param2=222'
    var urlParseUrl1 = url.parse(testUrl1);
    console.log(urlParseUrl1);
    var urlParseUrl2 = url.parse(testUrl1,true);
    console.info(urlParseUrl2);
    结果：
    这里写图片描述
    第三个参数设置为true
    也就是当不知道url协议时，以//为依据识别host

    var testUrl2 = '//z.qingk.cn/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095?param1=111&param2=222';
    var urlParseUrl3 = url.parse(testUrl2,false,false);
    console.info(urlParseUrl3);
    var urlParseUrl4 = url.parse(testUrl2,false,true);
    console.info(urlParseUrl4);
    结果：
    这里写图片描述

2、format方法

    format就是parse的返过程，把对象转换成url字符串

    var testObj1 = {
                    protocol: null,
                    slashes: true,
                    auth: null,
                    host: 'z.qingk.cn',
                    port: null,
                    hostname: 'z.qingk.cn',
                    hash: null,
                    search: '?param1=111&param2=222',
                    query: 'param1=111&param2=222',
                    pathname: '/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095',
                    path: '/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095?param1=111&param2=222',
                    href: '//z.qingk.cn/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095?param1=111&param2=222'
                    };
    var rsUrl = url.format(testObj1);
    console.info(rsUrl)
    结果：

    //z.qingk.cn/information-info/tengzhou/e75bab8405254b04b2fab0a9f54e4838/dbvbotovboussowbwssvossdqaxqssxw/7519fbc4d85ea4c3589d8d751c507222/b011a8c5bbab4050953cb722bccb5095?param1=111&param2=222
    parse中每一种形式的url所生成的结果，format都可以进行逆过程的转换。

3、resolve方法
        
        返回从根目录指定到当前目录的绝对路径url。返回结果去除参数和锚点，返回结果标准url路径格式

        var url=require('url');  
        //指定相对路径  
        var url1=url.resolve('http://qingk.cn/one/two/three','four');  
        console.log(url1); //http://qingk.cn/one/two/four  
        //指定根目录的相对路径  
        var url3=url.resolve('http://qingk.cn/one/two/three','/four');  
        console.log(url3); //http://qingk.cn/four  
        //带参数的相对路径  
        var url2=url.resolve('http://qingk.cn/one/two/three?name=zhangsan','four');  
        console.log(url2); //http://qingk.cn/one/two/four  
        //非标准分隔符的原路径  
        var url4=url.resolve('http://qingk.cn\\one#name1','/four');  
        console.log(url4);//http://qingk.cn/four  
        //非标准分隔符的相对路径  
        var url5=url.resolve('http://qingk.cn/one','\\two\\three');  
        console.log(url5);//http://qingk.cn/two/three
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ***/