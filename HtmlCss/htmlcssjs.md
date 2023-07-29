# 绪论

## 参考资料

- 知乎文章
    - 知乎资料：https://zhuanlan.zhihu.com/p/87667349
- 廖雪峰的博客
- W3School 
- 菜鸟教程
- mdn web docs：https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

## 入门须知

本教程默认读者已经拥有 Java 基础，并希望入门 Web 开发，选用本教程可以帮助您节约一定的时间和精力，摆脱大量讲解过细的资料，从而高速入门 Web 开发。

## 内容概述

Web 页面开发一般涉及如下三种语言：HTML、CSS 和 JavaScript 语言，本教程将提供快速入门这三门语言的途径，下面先看看三种语言在 WEB 开发中的基本作用：

在页面开发中，我们采用 HTML 语言来定义页面的内容，即页面上的表格、标题、文字内容、表单等元素。

CSS 语言用来定义 HTML 内容的样式，即该元素的位置、大小、颜色和形状等属性。

JavaScript 语言则用于定义对应的 HTML 内容所执行的行为，如弹窗、页面元素变化、网络交互等。

以一个登录界面的开发为例，HTML 负责定义其中的文字和表单，CSS 则负责定义这些文字和表单的对齐方式、显示大小和颜色等属性，JavaScript 则负责实现点击提交后的浏览器行为。

该教程旨在于通过介绍 HTML、CSS 和 JavaScript 三种语言的基本思想和使用方法，帮助读者快速入门前端开发。

# 页面内容定义

## HTML 开发框架

在页面开发中，我们采用 HTML 语言来定义页面的内容，现行 HTML 文档一般采用以下框架书写：

```html
<!DOCTYPE html> <!-- 文档类型声明 -->
<html lang="en">    <!-- 文档语言声明 -->
<head>
    <meta charset="UTF-8">  <!-- 指定文档字符集 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>你指定的标题</title>

    <!-- 其它设置写在这里 -->

</head>
<body>
    <!-- 文档主体内容 -->
</body>
</html>
```

`<head>` 标签中用于定义一些配置和导入代码，`<body>` 标签中用于定义 HTML 的主体部分。

`<title>` 标签中填写显示在浏览器上方标签中的标题。

## HTML 编写规范

尽管 HTML 内部的语法检查并不完全严格，但本教程仍建议读者在开发 HTML 文档时必须遵循以下编写规范：

- HTML 元素必须正确嵌套。
- HTML 元素必须始终关闭。
- HTML 元素标识符必须小写。
- HTML 文档必须有一个根元素。
- HTML 属性标识符必须小写。
    > wrong：`<table Width="100%">`
- HTML 属性值必须引号包围。
    > wrong：`<table width=100%>`
- 不允许只写属性标识符而不进行赋值。
    > wrong：`<table width>`

## HTML 基本标签使用

- 标题标签：用 `<h1>` 到 `<h6>` 来表示标题：
    ```html 
    <h1>header1</h1>
    <h2>header2</h2>
    <h3>header3</h3>
    ```
- 水平线标签：直接使用 `<hr>` 标签表示水平线。
- 图片标签：使用 `<img>` 标签来表示图片。`img` 标签有四个常用的可选属性（属性都是一并写在尖括号中）
  - `src`：相对路径、绝对路径或是网络路径
  - `width`：宽度
  - `height`：高度
  - `alt`：如果图片无法渲染，将用 `alt` 指定的文本代替。
    ```html 
    <img src = "/target/src/", width="300px", height="200px", alt="alt text">
    ```
    > 宽度和高度仅指定其中一者则等比例缩放。
- 段落标签：用 `<p>` 标签表示一段文字段落
    ```html
    <p>
    段落内容
    </p> 
    ```
- 换行标签：用 `<br />` 表示换行。
- 超链接标签：用 `<a>` 标签定义超链接，通过 `href` 属性来指定目标跳转网站，通过 `target` 属性来指定重定向操作（`_blank` 打开新网页，`_self` 在该网页直接打开），而标签内部写设置超链接的内容：
  - 可以是一段文字
    ```html
    <a href="http://www.w3school.com.cn">This is a link</a>
    ```
  - 也可以是其它内容，比如图片：
    ```html
    <a href="#" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
    ```
    > 此处 `#` 用来表示跳转目标为当前这个网页

还有以下更多 HTML 元素：

- `<abbr>`：定义缩写
- `<b>`：粗体文本
- `<blockquote>`：成块引用
- `<code>`：定义计算机代码
- `<del>`：定义被删除的文本
- `<em>`：定义强调文本
- `<i>`：定义斜体文本
- `<q>`：定义较短引用
- `<sup>`：定义上标文本
- `<sub>`：定义下标文本
- `<u>`：定义下划线文本

这些都是一些最基本的标签，但当我们观察网上下载的一些 HTML 模板文档后，我们发现文档中用到的标签时都是清一色的 `div` 标签，这就是 HTML 区块元素，可以参见[下文](#html-区块元素)


## HTML 区块元素

HTML 块级元素包括如下两种标签：

- `<div>`：没有特定的含义，作为用于组合其它 HTML 元素的容器。
- `<span>`：内联元素，可用作文本的容器。

这里只是简单介绍这些块级元素的概念，随后我们在页面样式设置中将会广泛地使用到这两个容器，现在读者只需要知道**这两个块级元素并不产生任何页面页面上的实际元素，而是存放元素的容器，对应于若干个元素组成的集合。**

下面再介绍一些稍微复杂但是也比较常用的 HTML 标签。

## HTML 列表

无序列表：使用 `ul` 标签和 `li` 标签即可创建无序列表。其中，`ul` 标签用于作为包含列表项目的容器，`li` 用于定义列表项目，如下。

```html
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>
```

有序列表同理，只不过使用的容器是 `ol` 标签：

```html 
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```

## HTML 音频和视频

使用 `<audio>` 和 `<vedio>` 标签即可加入音频/视频内容。可以使用 `controls` 属性指定是否需要播放控件。

而播放音频/视频的文件来源则需要在 `<audio>`/`vedio` 标签内部通过 `<source>` 标签指定，如下：

```html
<audio controls="controls">
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>
```

> 对于使用多个 `<source>` 标签的情况，浏览器回逐一检查每个 `<source>` 标签指定的资源是否可用，如果不可用，才会继续检查下一个音频文件。

对于视频资源，其指定方式相似：

```html 
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

## HTML 表格

HTML 表格标签除了创建普通的表格以外，还可以用来设置网页的布局。

- `<table>`：用于定义表格整体。
- `<caption>`：用于定义表格标题。
- `<thead>`：用于定义表头。
- `<tbody>`：用于定义表格的主体。
- `<tr>`：tr 是 table row 的缩写，表示表格的一行。
- `<td>`：td 是 table data 的缩写，表示表格的数据单元格。
- `<th>`：th 是 table header的缩写，表示表格的表头单元格。

一个使用的示例如下：

```html 
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>
```

展示的效果如下：

| 列标题1  | 列标题2  | 列标题3  |
| -------- | -------- | -------- |
| 行1，列1 | 行1，列2 | 行1，列3 |
| 行2，列1 | 行2，列2 | 行2，列3 |

由于使用 `<div>` 控件布局才是更加常用的方式，因此使用 `<table>` 标签进行布局的方式在此处并不介绍。

菜鸟教程还提供了一个创建更加复杂和好看的表格的示例，详见此链接：[菜鸟教程表格示例](https://c.runoob.com/codedemo/3187/)

# 页面样式设置

## 页面样式设置的三种方式

HTML 提供了三种方式来设置 HTML 标签的样式，设置 HTML 标签的样式需要使用到 CSS 代码，这样就实现了 HTML 和 CSS 两种语言的交互。而所谓 CSS 代码，实际上就是一系列键值对：

```
{
    key1 : value1;
    key2 : value2;
    key3 : value3;
    ......
}
```

CSS 提供了相当多的键值，比如控制颜色、位置、形状等属性的键值，每个键值都有若干值可以选取，这样就能实现对页面中各种元素样式的控制。

而页面样式设置的三种方式分别为：

- 行内样式
- 内嵌样式
- 外联样式

### 行内样式

直接写在标签的 style 属性中：

```html
<p style="color: red; margin-left: 20px">
This is a paragraph
</p>
```

`style` 属性指定的双引号指定的 CSS 代码将会对此处的 `p` 标签起作用。

### 内嵌样式

先在 `<head>` 标签内部的定义 `<style>` 标签，这种方式能够实现对文档中标签的批量控制，如下：

```html
<head>
......
    <style>
        p {
            text-align: center;
            color: red;
        }
    </style>
</head>
```

其中，大括号中的 CSS 将会对文档中的所有 `p` 标签起作用，这里涉及到选择器的概念，详见[HTML 全局属性与选择器操作](#html-全局属性与选择器操作)。

### 外联样式

将 CSS 样式先定义在其它文件中，在需要使用时再使用 `<link>` 标签引用到相应的 HTML 文档中，这样可以实现同一段 CSS 样式代码在多个 HTML 文件中复用。

在开发项目中，文件的目录结构一般如下：

- CSS 目录
  - 所有 CSS 文件
- HTML 目录
  - 所有 HTML 文件

假设 CSS 目录下有一个 `mystyle.css` 文件，我们在 HTML 目录下的 `example.html` 文件中想要导入它，可以在 <head> 标签内部定义 `<link>` 标签：

```html 
<link rel = "stylesheet" type="text/css" href="../CSS/mystyle.css">  
```

## HTML 全局属性与选择器操作

每个 HTML 元素都有其属性，在上文介绍 HTML 基本标签时实际已经涉及到一部分属性的写法，写在标签的尖括号中，用键值对的方式，并将不同键值对用空格隔开，比如 `img` 标签：

```html 
<img src = "/target/src/" alt="alt_text" >
```

HTML 属性可以分为全局属性和事件属性，这里仅介绍其中几个全局属性：

- `dir`：规定元素中文本内容的方向。可选值有 `ltr`（从左到右），`rtl`（从右到左），`auto`（浏览器决定）
- `class`：规定元素的类
- `id`：规定元素的 ID
- `style`：规定元素的行内样式

其中 `class` 和 `id` 属性涉及样式设置时的选择器操作。选择器用来选取要设置样式的 HTML 标签：

### 元素选择器

元素选择器根据元素名称来选择 HTML 元素。写法是直接写元素标签的标识符：

```html 
p {
    text-align: center;
    color: red;
}
```

花括号中的样式设置将会对所有 `<p>` 标签作用。

元素选择器也可以作用在多个元素上，比如我们对 `<p>`、`<h1>` 和 `<h2>` 标签的样式设置都是一样的，可以采用以下代码执行：

```html 
h1, h2, p {
  text-align: center;
  color: red;
}
```

### ID 选择器

ID 选择器用 `#` 符号开头，然后跟上目标 ID 的标识符：

```html 
#target_id {
    text-align: center;
    color: red;
}
```

花括号中的样式设置将会对所有将 `id` 属性设置为 `"target_id"` 值的 HTML 元素作用。

所谓 `id` 是 HTML 标签的属性之一，可以用如下方式指定：

```html 
<h1 id="my_id">...</h1>
```

### 类选择器

类选择器用 `.`，然后跟上对应类的标识符。

```html 
.target_class {
  text-align: center;
  color: red;
}
```

花括号中的样式设置将会对所有将 `class` 属性设置为 `"target_class"` 值的 HTML 元素作用。


类选择器和标签选择器可以混合使用：

```html 
p.target_class {
    text-align: center;
    color: red;
}
```

所有类属性为 `target_class` 的  `p` 元素的 HTML 元素都会被花括号中指定的样式指定。

所谓类也是 HTML 标签的属性之一，可以用如下方式指定：

```html 
<h1 class="header">...</h1>
```

### 通用选择器

通用选择器用 `*` 来全选页面上的所有 HTML 元素，如下：

```html 
* {
  text-align: center;
  color: blue;
}
```

通用选择器通常用来指定元素的默认样式。

> 在一些情况下，同一个标签会被多个样式指定，此时 HTML 会遵照渲染优先级对该元素选择一种样式进行渲染。不需要对这些规则强行记忆，在使用时发现渲染结果不如预期时再调整即可。

# 页面逻辑控制

页面逻辑控制使用 JavaScript 语言，因此此处会对 JavaScript 语言作一个简单的入门。

使用 JavaScript 语言需要先配置 `node.js`，读者可以先搜索配置教程，非常简单，作为极简教程，不费笔墨。

## JavaScript 数据类型和基本语法

JavaScript 的基本语法和 Java 的语法高度一致，该教程已经假设读者掌握了 Java 语言，因此此处仅仅介绍 JavaScript 语言和 Java 语言的不同之处。

尽管语法高度一致，但是 JavaScript 更应该被理解成一种披着 Java 语言外衣的弱类型语言。

### JavaScript 基本数据类型

JavaScript 的数据类型包括：数值、字符串、布尔类型，由于是弱类型语言，这些数据类型都可以被赋给同一个变量：

```js
var  a = 1;
a = 0.234;
a = "hello js";
a = false;
```

这点和 python 非常相似，python 事实上也是弱类型语言。对于不初始化的变量，它会被赋予一个 `undefine` 的特殊值。

### JavaScript 对象初步

JavaScript 的对象实际上就是一种无序的集合数据类型，它由若干键值对组成，类似于 C 语言的结构体。如下：

```js
var student = {
    name: 'witten',
    birth: 1990,
    school: 'No.1 Middle School',
    "grade-class":"7-1", 
    height: 1.70,
    weight: 65,
    score: null
};
```

对象内元素初值的指定使用 `:`，并且属性名可以使用非标准的命名规则，比如上述代码中的 `grade-class` 属性，但我们并不推荐这么做，因此也不介绍这种方式。

在对象外访问对象的元素，可以使用 `.` 运算符（前提是使用的是标准命名规则），当访问一个不存在的属性时，将返回 `undefined` 值:

```js
student.name // witten 
student.gender // undefined
```

[JavaScript 面向对象]()中将描述更加完备的对象使用方法。

## JavaScript 数据结构

### 数组 Array

JavaScript 支持数组数据结构 `Array`，这种数组是弱类型数组，可以存放任何类型的元素，比如一个简单的定义示例是：`var arr = [1, 2, 'one', 'fs', 4];`

JavaScript 实际上也更像是栈和队列的结合体，假设数组为 `arr`，它支持以下基本的属性/方法：

- `arr.length` 属性：获取 `arr` 的数组长度。
- `arr.indexOf(ele)` 方法：获取 `ele` 是数组的第几个元素。
- `arr.slice(a, b)` 方法：切片 `arr` 数组的 `[a,b)` 区间。
- `arr.slice(a)` 方法：切片 `arr` 数组的第 `a` 个元素到结束的区间。 
- `arr.push(ele...)` 方法：在数组末尾加入 `ele` 元素，刚方法可以一次性加入若干个元素。
- `arr.pop()` 方法：去掉数组末尾的元素并返回。
- `arr.unshift(ele...)` 方法：向数组头部加入若干元素。
- `arr.shift()` 方法：删去数组尾部的元素。
- `reverse` 方法：将数组的全部元素完全颠倒。

除此之外，JavaScript 数组还支持其它实用方法，如下：

`concat`: 拼接两个数组，或者数组和元素，如下：

```js
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```

`join`：将数组中的所有元素使用指定符号拼接起来，然后转为字符串，如下：

```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
```

`sort`：按照指定的方式对数组元素进行排序。

## `Map` & `Set` 

JavaScript 也支持 `Map` 和 `Set` 两种数据结构，这两种数据结构实际上也是对象。

`Map` 和 `Set` 两种数据类型和 Java 中的使用方法几乎一致，`Map` 支持 `set`、`get`、`has`（是否存在该键）、`delete` 方法；`Set` 支持 `add` 和 `delete` 方法。这两种数据结构都使用 `new` 关键字创建，下面是一些简单的使用示例：

> 注意 `Set` 数据类型不允许元素的重复。

```js 
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'

var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
s.delete(3);
s; // Set {1, 2, 4}
```

`Array`、`Map` 和 `Set` 都可以使用 `for of` 语法来进行遍历：

```js 
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

此外，JavaScript 数据结构还支持一系列基于匿名函数的高级操作，

## JavaScript 头等公民——函数

### 基本格式

JavaScript 函数和 Java 的函数定义语法则差别较大，由于是弱类型语言，JavaScript 并不要求为函数指定返回值类型和参数类型，而是简单地使用如下格式定义即可：

```js 
function func_name(parameter) {
    code......
}
```

如果有什么返回值，只需要在花括号的函数体中使用 `return` 语句返回即可，没有 `return` 语句则相当于返回一个 `undefined`。

使用 `throw` 类型检查可以避免一些情况下不返回任何值：

> JavaScript 的错误处理语法和 Java 一致，都是使用 `throw` 和 `try`-`catch` 语句，并且遵循错误向上传播机制。

```js 
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

JavaScript 还允许函数嵌套，即可以在函数内部再定义函数，此时内部函数可以访问外部函数的变量，而内外部变量重名时，内部变量将屏蔽外部变量，不够程序员一般应该规避这一点。

### `arguments` 和 `rest` 关键字

`argument` 关键字相当于 java 中 `main` 函数的变长参数，可以理解为一个数组，可以如下使用：

```js 
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30); 
```

`foo` 的参数个数实际上是不限的，都可以从 `arguments` “数组”中得到。

还有一个关键字 `rest`，它用于表示除了已枚举参数外的其它参数：

```js 
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]
```

### 匿名函数

匿名函数是 JS 中的高级写法，这种写法体现了 JavaScript 中函数和对象变量本质的一致性，这是一种非常不错的设计。可以像下面这样定义匿名函数，并将它赋值给一个变量：

```js
var f = function(x) {
    return x * x;
};
```

这种写法相当于：

```js
function f(x) {
    return x * x;
}
```

然后这个变量可以当作类似 C++ 中的函数对象使用：

```js 
var a = f(2); // a = 4  
```

有时候我们不需要将这个函数赋值给一个变量，而是直接使用，这种情况就是“真正的”匿名函数。

### 用箭头函数代替匿名函数——从诡异的 `this` 关键字说起

TODO

### 基于匿名函数的数据结构高级操作

#### `forEach` 语句
 
`forEach` 支持使用匿名函数的形式对数据结构进行操作：

```js
arr.forEach(function (element, index, self) {
    ......// some code
});
```

其中 `element`，`index` 和 `self` 是三个由语法提供的指针，作为匿名函数的默认参数，我们可以在匿名函数体中使用它们来完成对 `Array` 对象本身的操作：

- `element`: 指向当前元素的值
- `index`: 指向当前索引
- `self`: 指向调用对象本身

我们可以在终端输入 `node` 进入交互式环境，然后尝试运行如下 js 代码。

```js
$ node
Welcome to Node.js v16.16.0.
Type ".help" for more information.

> var a = ['A', 'B', 'C']

> a
[ 'A', 'B', 'C' ]

> a.forEach(function (element, index, array) {
...     // element: 指向当前元素的值
...     // index: 指向当前索引
...     // array: 指向Array对象本身
...     array[index] = 1;
...     console.log(element + ', index = ' + index);
... });
A, index = 0
B, index = 1
C, index = 2
```

#### `map` 方法

`map` 顾名思义就是映射，即对一个数组中的所有元素采用同一个匿名函数进行映射：

```js 
var pow = function(x) {

}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);
```

#### `reduce` 方法

`reduce` 方法是将匿名函数作用于数组的前两个元素，然后再作用于得到的结果和第三个元素，以此类推......这是一种迭代的方式：

```
res = f(x1, x2)
res = f(res, x3)
res = f(res, x4)
......
res = f(res, xn)
```

比如实现累加功能可以使用如下代码简化原有写法：

```js
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25
```

#### `filter` 方法

`filter` 顾名思义就是过滤器，它要求作用于数组元素的匿名函数返回一个布尔值，然后**过滤器会将这个匿名函数作用于数组的每个元素，如果返回真，则这个元素被选择，返回假则丢弃**，最后过滤器会**返回一个包含所有被选择元素的数组**：

```js
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
```

事实上，`filter` 的匿名函数允许拥有三个参数：就是 `forEach` 语句中的 `element`、`index` 和 `self`。只是我们有时候可以使用部分参数，比如上文的代码就是只使用 `element`（这三个参数只要求顺序对应，不要求名称对应，所以上文使用 `x` 作为参数也没问题）

#### `sort` 方法

`sort` 方法用于排序，如果返回 `-1` 则前一个参数小于后一个参数，如果返回 `1` 则后一个参数大于前一个参数，如果返回 `0` 则前后两个参数相等。

比如下面的代码会将数组从小到大排序：

```js 
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]
```

#### `every` 方法

`every` 方法可以判断数组的所有元素是否满足条件：

```js
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
})); // true, 因为每个元素都满足s.length>0
```

#### `find` 方法

`find` 方法用于查找符合条件的第一个元素，如果找到了，返回这个元素，否则，返回 `undefined`

```js 
var arr = ['Apple', 'pear', 'orange'];
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
})); // 'pear', 因为pear全部是小写
```

> `findIndex` 是 `find` 的返回索引版本

## JavaScript 变量特性

### 函数内变量定义语句提升

JavaScript 的所有函数内变量定义语句都会被默认地提取到函数体的开头，因此，一般富有经验的程序员可能会这么写：

```js 
function foo() {
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i=0; i<100; i++) {
        ...
    }
}
```

### 全局变量、顶层函数和 `window` 变量

另外，如果一个变量不在任何函数中定义，则会被作为一个全局变量，并绑定到 JavaScript 的默认全局对象 `window` 下，比如我们的全局变量为 `val`，则可以用 `window.val` 进行访问。

JavaScript 中更加神奇的一点是，所有的顶层函数都会被作为全局变量，一个原生的例子就是 `alert` 函数：

```js
window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function () {}
alert('无法用alert()显示了!');
// 恢复alert:
window.alert = old_alert;
alert('又可以用alert()了!');
```

这个例子可以加深我们对 JavaScript 函数的理解：JavaScript 中，函数和变量的本质是非常紧密相关的！

### `let` 和局部变量

另一点神奇之处是，在 `for` 这样的语句块中定义的变量是具有全局属性的：

```js
function foo() {
    for (var i=0; i<100; i++) {
        // some operation
    }
    i += 100; // 仍然可以引用变量i
}
```

使用 `let` 关键字代替 `var` 则可以实现类似 Java 中的局部作用域规则：

```js 
function foo() {
    for (let i=0; i<100; i++) {
        // some operation
    }
    i += 100; // 仍然可以引用变量i
}
```

### `const` 和常量

和 Java 一样，`const` 可以用于定义常量，但是使用 `const` 以后就不需要使用 `var`，并且 `const` 也具有 `let` 的特性：块级局部作用域：

```js 
const PI = 3.14;
PI = 3; // 某些浏览器不报错，但是无效果！
```

### 解构赋值

解构赋值就是对一组变量同时进行赋值，`python` 中也支持类似的语法，只是 `python` 的写法更加优雅而 JavaScript 的似乎更加强大，JavaScript 解构赋值的示例如下：

```js 
// 如果浏览器支持解构赋值就不会报错:
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);
```

解构赋值要求嵌套关系一致：

```js
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'
```

解构赋值还有一些很秀的写法，这里并不详细介绍，仅体会一下：

```js 
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person; // name, age, passport分别被赋值为对应属性;

// 交换值：
var x=1, y=2;
[x, y] = [y, x]

// 快速获取当前页面的域名和路径：
var {hostname:domain, pathname:path} = location;
```

## JavaScript 对象进阶

### 隐藏的属性——原型


TODO

```js 
```

