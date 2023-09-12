# CSS 简单入门

## 什么是CSS

### CSS基础语法？

```css
div /* 标签选择器 */
{
    /* 样式: 值; */ /* 注意全半角 */
    background-color: skyblue;
    color: white;
    /* ... */
}
```
width：宽
height：高
background-color：背景色

长度单位 :

1. px -> 像素（pixels）
2. % -> 百分比
   
   外容器1 -> 600px 当前容器 50% -> 300px
   外容器2 -> 400px 当前容器 50% -> 200px

### CSS样式的引入方式

1. 内联样式
   标签的style属性
2. 内部样式
   style标签
   区别：
   内部样式的代码可以复用、复合W3C的规范标准，进行让结构和样式分开处理。
3. 外部样式
   引入一个单独的CSS文件，name.css

通过link标签引入外部资源，rel属性指定资源跟页面的关系，href属性资源的地址。
通过@import方式引入外部样式 ( 这种方式有很多问题，不建议使用 )

### CSS中的颜色

1. 单词 : `red`, `blue`, `green`, `yellow`...

2. 十六进制RGB（RGBA）：`#000000`~`#ffffff`

3. RGB三原色：`rgb(255,255,255)`，每一位数的取值范围为`0`~`255`

获取颜色的工具：
提取颜色的下载地址：https://www.baidufe.com/fehelper
photoshop工具
