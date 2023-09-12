## JavaScript 数据类型

### JS中的8种数据类型

1. `Number`，数值
2. `Boolean`，布尔（逻辑）
3. `String`，字符串
4. `Null`，无对象
5. `Undefined`，未定义
6. `BigInt`，大整数（Big Integer）（ES6）
7. `Symbol`，符号（ES6）
8. `Object`，对象

基础类型（除`Object`以外的类型）可以通过`typeof`关键字来判断

### 对象包装器

除了`Null`和`Undefined`以外的所有类型都有对应的对象包装器将原始值转换为相应的对象

可以使用对象包装器定义变量:

```javascript
let str = new String("new string");
```

当在原始值上访问属性时，JavaScript 会自动将值包装到相应的包装对象中，并访问对象上的属性。
[(MDN：JavaScript 数据类型和数据结构 #原始值 §3)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#%E5%8E%9F%E5%A7%8B%E5%80%BC)

于是

```javascript
"hello".substring(1, 3);
```

等价于

```javascript
new String("hello").substring(1, 3);
```

### new 关键字

[(MDN：new 运算符 #描述)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#%E6%8F%8F%E8%BF%B0)

`new` 关键字会进行如下的操作：

1. 创建一个空的简单 JavaScript 对象（即 `{}`）；
2. 为步骤 1 新创建的对象添加属性 `__proto__`，将该属性链接至构造函数的原型对象；
3. 将步骤 1 新创建的对象作为 `this` 的上下文；
4. 如果该函数没有返回对象，则返回 `this`。

### 判断对象为数组的方法

1. obj instanceof Array

   ```javascript
   let arr = [], obj = {};
   console.log(obj instanceof Array);
   console.log(arr instanceof Array);
   ```
   
2. Array.isArray(obj)
   
   ```javascript
   let arr = [], obj = {};
   console.log(Array.isArray(obj));
   console.log(Array.isArray(arr));
   ```
   
3. Array.prototype.isPrototypeOf(obj)

   ```javascript
   let arr = [], obj = {};
   console.log(Array.prototype.isPrototypeOf(obj));
   console.log(Array.prototype.isPrototypeOf(arr));
   ```

4. obj.constructor === Array
   
   ```javascript
   let arr = [], obj = {};
   console.log(obj.constructor === Array);
   console.log(arr.constructor === Array);
   ```

### 对象与数组的互相转换

#### 对象转数组



#### 数组转对象
