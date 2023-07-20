/*


一、querystring.parse(str[, sep[, eq[, options]]])

这个API将URL查询字符串解析为键和值的集合

str:URL查询字符串
sep:标明字符串中用于划分键值对的符号，默认为“&”
eq:用以标明查询字符串中键和值之间的符号，默认为“=”
例子如下：


const querystring = require('querystring');
const url = require('url');
var queryUrl="http://localhost:8888/bb?name=李浩&memo=helloworld&memo=helloC";
queryUrl=url.parse(queryUrl).query;
console.log(querystring.parse(queryUrl)) ;
----------------------------------------------------
// 输出 { name: '李浩', memo: [ 'helloworld', 'helloC' ] }
带参数的例子：


const querystring = require('querystring');
const url = require('url');
var queryUrl="http://localhost:8888/bb?name==李浩*memo==helloworld*memo==helloC";
queryUrl=url.parse(queryUrl).query;
console.log(querystring.parse(queryUrl,'*','==')) ; 
----------------------------------------------------
// 输出 { name: '李浩', memo: [ 'helloworld', 'helloC' ] }
二、querystring.stringify(obj[, sep[, eq[, options]]])

这个API从一个给定的对象中生成一个URL查询字符串，通过遍历对象“自己的属性”。

obj为给定的对象
sep为键值对之间的分隔符，默认为“&”
eq为键和值之间的连接符号，默认为“=”
例子如下：


const qs=require("querystring");
var obj={ name: '李浩', memo: [ 'helloworld', 'helloC' ] }
console.log(
 qs.stringify(obj)
)

 //输出 name=%E6%9D%8E%E6%B5%A9&memo=helloworld&memo=helloC;
 //API默认是对中文进行了编码，下面我们再说编码解码的API

带参数的例子：


const qs=require("querystring");
var obj={ name: '李浩', memo: [ 'helloworld', 'helloC' ] }
console.log(
 qs.stringify(obj,'@','==')
)
输出  name==%E6%9D%8E%E6%B5%A9@memo==helloworld@memo==helloC;

相信应该看出了带参数和不带参数的区别了吧

三、querystring.unescape(str)

这个API是对URL查询字符串中的URL进行解码的，例如上面我们进行stringify操作的时候，中文就会被编码，那么中文在URL中的时候也会被解析为编码后的样子，这个API一般配合querystring.parse()使用

我们就拿上面中文出现编码的URL查询字符串来举例

例子如下：


const qs = require("querystring");
var url = "name=%E6%9D%8E%E6%B5%A9&memo=helloworld&memo=helloC"
var normalStr = qs.unescape(url)
console.log(
 qs.parse(normalStr)
)
//输出 { name: '李浩', memo: [ 'helloworld', 'helloC' ] }
四、querystring.escape(str)

这个API相当于就是querystring.unescape(str)的逆向操作了，把中文编码，常和querystring.stringify（）连同使用


var obj = { name: '李浩', memo: ['helloworld', 'helloC'] };
console.log(
 qs.escape(
 qs.stringify(obj)
 )
)
// 输出 name%3D%25E6%259D%258E%25E6%25B5%25A9%26memo%3Dhelloworld%26memo%3DhelloC
//连同&和=一起编码了

****/
const qs = require('querystring');
console.log(qs)