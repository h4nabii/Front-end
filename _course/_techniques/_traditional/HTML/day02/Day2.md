### 什么是 HTML 和 CSS ？

`HTML（HyperText Markup Language）`是制作网站的标记语言

浏览器把代码解析后的样子就是我们看到的网站

一个网站是由多个网页组成的。每一个网页是一个`.html`文件

### 代码编辑器：VSCode

VS Code 下载地址：<https://code.visualstudio.com/>

编辑器基本使用与设置

- 设置：文件-> 首选项 -> 设置  ( 大小、是否换行 word wrap )
- 创建文件、创建文件夹、重命名和删除、搜索
    * ctrl + s : 保存
    * ctrl + a : 全选
    * ctrl + x、ctrl + c、ctrl + v : 剪切、复制、粘贴
    * ctrl + z、ctrl + y : 撤销、前进
    * shift + end : 从头选中一行
    * shift + home : 从尾部选中一行
    * shift + alt + ↓ : 快速复制一行
    * alt + ↑ / ↓ : 快速移动一行
    * ctrl + d : 选则相同元素的下一个
    * tab : 向后缩进
    * shift + tab : 向前缩进
- 多光标 : alt + 鼠标左键

### Chrome浏览器

Chrome下载地址：<https://www.google.cn/intl/zh-CN/chrome/>

百度统计浏览器市场份额： <https://tongji.baidu.com/data/browser>    chrome : 68.88%

### 深入了解网站开发？

- UI设计师：设计稿
- web前端开发工程师(H5开发)
- 设计稿 -> 代码
- 数据库里的数据 -> 显示到页面
- HTML + CSS
- HTML：结构
- CSS：样式
- Web后端开发工程师

### web三大核心技术

1. HTML
2. CSS
3. JavaScript

### HTML基本结构和属性

HTML ： 超文本 标记 语言

超文本 : 文本内容 + 非文本内容 ( 图片、视频、音频等 )

标记 : <标签>

语言 : 标记语言

标记也叫做标签：
`<header>`
`<footer>`

写法分成两种：

- 单标签   `<header/>`

- 双标签   `<header></header>`

创建标签的快捷键：_name_ + `tab` → _\<name\><\/name\>_

标签可以上下排列，也可以组合嵌套。

HTML常见标签：http://www.html5star.com/manual/html5label-meaning/

标签的属性：来修饰标签的，设置当前标签的一些功能。

<标签 属性="值" 属性2="值2">

### HTML初始代码？

每个.html文件都有的代码叫做初始代码 ， 要符合html文件的规范写法。

! + tab键 : 快速的创建html的初始代码

<!DOCTYPE html>           文档声明 : 告诉浏览器这是一个html文件
<html lang="en"> html文件的最外层标签：包裹着所有html标签代码 lang="en"表示是一个英文网站 lang="zh-CN"表示一个中文网站
    <head>
        <meta charset="UTF-8">    元信息：是编写网页中的一些辅助信息 charset="UTF-8"国际编码，让网页不出现乱码的情况
        <title>Document</title>   设置网页的标题
    </head>
    <body>
        显示网页内容的区域
    </body>
</html>

网页前端代码，最终是以浏览器解析结果为准

ie
firefox
chrome
opera
safari

浏览器是有兼容问题的

### HTML注释？

写法：<!-- 注释的内容 -->  在浏览器中看不到，只能在代码中看到注释的内容。

意义：
1. 把暂时不用的代码注释起来，方便以后使用。
2. 对开发人员进行提示。

快捷添加注释与删除注释：
1. ctrl + /
2. shift + alt + a

### 标题与段落？

标题 -> 双标签 : <h1></h1>   ...  <h6></h6>

在一个网页中，h1标题最重要，并且一个.html文件中只能出现一次h1标签。

h5、h6标签在网页中不经常使用。

段落 -> 双标签 : <p></p>

### 文本修饰标签？

    强调 -> 双标签 : <strong></strong>、<em></em>
    
        区别：
            1. 写法和展示效果是有区别的，一个加粗、一个斜体
            2. strong的强调性更强，em的强调性稍弱。
    
    下标 : <sub></sub>
    上标 : <sup></sup>
    
    删除文本 : <del></del>
    插入文本 : <ins></ins>
    注：一般情况下，删除文本都是和插入文本配合使用的。

### 图片标签？

    img -> 单标签
    src : 引入图片的地址。
    alt : 当图片出现问题的时候，可以显示一段友好的提示文字。
    title : 提示信息
    width、height : 图片的大小

### 路径的引入？

    相对路径
    绝对路径

### 链接标签？

    a -> 双标签  <a></a>
    href属性 : 链接的地址
    target属性 : 可以改变链接打开的方式，默认情况下：在当前页面打开 _self 新窗口打开 _blank
    
    base -> 单标签 ：作用就是改变链接的默认行为的。

### 锚点？

    两种做法
    1. #号 + id属性
    2. #号 + name属性（注意name属性加给的是a标签）

### 特殊字符？

    1. & + 字符
    2. 解决冲突啊 左右尖括号、添加多个空格的实现
    3. &lt; &gt; &nbsp;

### 列表标签？

    1. 无序列表 -> ul li 符合嵌套的规范
    2. 有序列表 -> ol li 一般用的比较少，可以用无序列表来实现
    3. 定义列表 -> dl dt dd 列表项需要添加标题和对标题进行描述的内容
    
    注：列表之间可以互相嵌套，形成多层级的列表。

### 表格标签？

    table、tr、th、td、caption 等
    
    注：之前是有嵌套关系的，要符合嵌套规范。
    
    语义化标签：tHead、tBody、tFood
    
    注：在一个table中，tBody是可以出现多次的，但是tHead、tFood只能出现一次。
    
    align : left、center、right
    valign : top、middle、bottom

### 表单标签？

    form、input、textarea、select、label ..
    input(单标签)标签有一个type属性，决定是什么控件。
    还有一些常见的属性：
    checked、disabled、name、for ...

### div和span？

    div : 做一个区域划分的块
    span : 对文字进行修饰的内联

### CSS基础语法？

    选择器 { 属性1 : 值1 ; 属性2 : 值2 }
    
    width : 宽
    height : 高
    background-color : 背景色
    
    长度单位 :
    1. px -> 像素
    2. % -> 百分比    
       外容器1 -> 600px 当前容器 50% -> 300px
       外容器2 -> 400px 当前容器 50% -> 200px

### CSS样式的引入方式？

    1. 内联样式
       style属性
    2. 内部样式
       style标签
       区别：
       内部样式的代码可以复用、复合W3C的规范标准，进行让结构和样式分开处理。
    3. 外部样式
       引入一个单独的CSS文件，name.css
       
       通过link标签引入外部资源，rel属性指定资源跟页面的关系，href属性资源的地址。
       通过@import方式引入外部样式 ( 这种方式有很多问题，不建议使用 )

### CSS中的颜色表示法？

    1. 单词表示法 : red blue green yellow ...
    
    2. 十六进制表示法：#000000 #ffffff
       0 1 2 3 4 5 6 7 8 9
       0 1
       0 1 2 3 4 5 6 7 8 9 a b c d e f
    
    3. rgb三原色表示法：rgb(255,255,255);
       取值范围 0 ~ 255
    
    获取颜色的工具：
    提取颜色的下载地址：https://www.baidufe.com/fehelper
    photoshop工具