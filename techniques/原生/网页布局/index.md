## 网页布局：HTML + CSS

### 常用布局类型

1. [圣杯布局](./圣杯布局.html)（标题 + 左中右三部分）

可以使用`float`属性或者`dislpay: flex`实现

框架

1. YUI：雅虎
2. KISSY：淘宝
3. jQuery

布局的关键：解决共性与个性的问题，将共性提取出来

高内聚，低耦合

### 常用布局模式

1. 静态布局
2. 流式布局
3. 自适应布局
4. 响应式布局
5. 弹性布局

### 常用布局手段

1. 浮动 `float`
   
   浮动会使元素脱离文档流，可能导致父元素高度塌陷
   
   解决方案：创建一个
   [BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
   （例如使用`overflow: hidden`）

2. 弹性盒 `display: flex`

> 注意`inline-black`会将空白节点一并显示出来导致元素间出现空白， 
> 一般不使用`inline-block`进行水平布局。
> 通过使用`font-size: 0`可以解决问题，但是会限制`html`的编写，
> 不能有需要显示的直接子文本节点，必须要用其他标签（如`span`）包裹）
