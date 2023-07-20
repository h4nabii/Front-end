/* 

一、os模块——提供基本的系统操作方法

Node.js的os模块提供一些操作系统相关的实用方法，导入该模块：

const os = require('os');

属性

方法

常量


二、util模块——提供实用工具

util模块主要用于支持Node.js内部API的需求。

提供的大部分实用工具可用于应用程序与模块开发。导入该模块：

const util = require('util');

util.inspect(object[, options])

返回对象的字符串表示，主要用于调试。

以下代码用于查看util对象的所有属性：

const util = require('util');

console.log(util.inspect(util, { showHidden: true, depth: null }));

util.format(format[, ...args])

返回一个格式化后的字符串。

util.format('%s:%s', '蓝天白云'); // 返回: '蓝天白云:%s‘

util.format('%s:%s', '环境优美', '绿水青山', '蓝天白云'); // 返回'环境优美:绿水青山 蓝天白云‘

util.format(1, 2, 3); // 返回'1 2 3'

三、path模块——处理和转换文件路径

提供了一些工具方法，用于处理文件与目录的路径。导入该模块：

const path = require('path');

不同风格的路径

path模块最大的用处是解决多平台目录路径问题。

path模块默认会根据Node.js应用程序运行的操作系统的不同而变化。

要想在任何操作系统上处理Windows文件路径时获得一致的结果，可以使用path模块的path.win32属性。

Node.js在Windows系统上遵循单驱动器工作目录的理念。

属性

path.delimiter：提供平台特定的路径分隔符，Windows上是“;”，POSIX上是“:”。

path.sep：提供平台特定的路径分段分隔符。Windows上是“\”，POSIX上是“/”。

方法

path.normalize(path)：对路径进行规范化，并解析“..”和“.” 。

path.dirname(path)：返回路径的目录名，类似于UNIX中的dirname命令。

path.basename(path[, ext])：返回路径中的最后一部分，可选的ext参数表示文件扩展名。

path.extname(path)：返回路径中文件的后缀名，即路径中最后一个“.”之后的部分。

path.parse(path)：返回完整路径的一个对象。

path.format(pathObject)：从一个对象表示的路径返回一个字符串表示的路径。

path.resolve([...paths])：将一个路径或路径片段的序列解析为一个绝对路径。

path.relative(from, to)：返回从参数from到to的相对路径（基于当前工作目录)。

path.join([...paths])：使用平台特定的分隔符将路径片段序列连接到一起，并规范生成的路径。

path.isAbsolute(path)：判定路径是否为一个绝对路径。 











一、url模块——URL处理与解析

url模块提供了一些实用方法，用于URL处理与解析。。导入该模块：

const url = require('url');

url模块的两套API

Node.js特有的API（传统的URL API）主要用于兼容已有应用程序。

const url = require('url');

const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')

新的应用程序应使用WHATWG API。

const { URL } = require('url');

const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

WHATWG API的URL类提供的方法和属性

URL类根据WHATWG URL标准实现。首先使用构造方法new URL(input[, base])创建URL对象，然后使用URL类提供的属性和方法来进行操作。

主要属性和方法列举如下。

url.protocol：获取及设置URL的协议（protocol）部分。

url.host：获取及设置URL的主机（host）部分，包括端口。

url.hostname：获取及设置URL的主机名（hostname）部分。

url.port：获取及设置URL的端口（port）部分。

url.pathname：获取及设置URL的路径（path）部分。

url.search：获取及设置URL的序列化查询（query）部分。

url.hash#：获取及设置URL的hash部分。例如http://example.org/foo#bar。

url.href：获取及设置序列化的URL，返回值与url.toString和url.toJSON的返回值相同。

url.toString()：返回序列化的URL。

url.toJSON()：返回序列化的URL，URL对象使用JSON.stringify()序列化时将自动调用该方法。

WHATWG API的URLSearchParams类提供的方法

提供对URL查询字符串部分进行处理的方法。

const { URL, URLSearchParams } = require('url');

const myURL = new URL('https://example.org/?abc=123');

console.log(myURL.searchParams.get('abc'));

// 输出 123

传统的URL API

使用url.parse(urlString[, parseQueryString[, slashesDenoteHost]]) 解析URL字符串并创建一个URL对象。

使用传统的URL API提供的方法来进行操作。

二、querystring模块——URL查询字符串处理和解析

提供一些实用方法用于解析与格式化URL查询字符串。导入该模块：

const querystring = require('querystring');

querystring.parse(str[, sep[, eq[, options]]]) 将一个URL查询字符串解析成一个键值对的集合（相当于反序列化）。示例：解析查询字符串foo=bar&abc=xyz&abc=123的结果如下：

{

foo: 'bar',

abc: ['xyz', '123']

}

querystring.stringify(obj[, sep[, eq[, options]]]) 将一个对象转换成URL查询字符串，是querystring.parse的逆运算。参数obj是要序列化成URL查询字符串的对象。示例：

调用：querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });

返回：“foo=bar&baz=qux&baz=quux&corge=”

querystring.unescape(str)用于对字符串进行解码，通常提供给querystring.parse()使用。

querystring.escape(str) 用于对字符串进行URL编码，主要提供给querystring.stringify() 使用。















*/