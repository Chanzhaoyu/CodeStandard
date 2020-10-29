---
title: HTML
---

## 代码规范

### 通用

- DOCTYPE 声明

[强制] HTML 文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

```html
<!DOCTYPE html>
```

- 页面语言

[推荐] 使用属性值 `zh-Hans`（简体, 中国大陆），如果需要考虑浏览器和操作系统的兼容性，使用 `zh-CN` 属性值

```html
<html lang="zh-Hans"></html>

<html lang="zh-CN"></html>
```

- CHARSET

[强制] 一般情况下统一使用 `“UTF-8”` 编码

```html
<meta charset="UTF-8" />
```

- 资源引入

[推荐] 引入资源使用相对路径，不要指定资源所带的具体协议 ( http:,https: ) ，除非这两者协议都不可用。

```html
<!-- good -->
<script src="//cdn.com/jquery.min.js"></script>

<!-- bad -->
<script src="http://cdn.com/jquery.min.js"></script>
```

- 换行

[建议] 每行不得超过 120 个字符。

过长的代码不容易阅读与维护。但是考虑到 `HTML` 的特殊性，不做硬性要求。

- 缩进

统一两个空格缩进（总之缩进统一即可），不要使用 `Tab` 或者 `Tab`、`空格`混搭。

注：这里的`Tab`和`空格`并不是指的键盘按键，而是编辑器`选择缩进`的类型。

![缩进](~@/VSCode/Spaces.png)

更多 [格式化配置](/frontend/VSCode.html#配置换行)

### 书写风格

#### 命名

[详细介绍](/frontend/Name.html#classname-命名)

- [强制] 元素 `id` 必须保证页面唯一。

- [强制] 同一页面，不同元素应避免使用相同的 `name` 与 `id`

- [强制] 标签名必须使用小写字母。

- [强制] 对 `HTML5` 中规定不可省略的闭合标签，不允许省略闭合标签。

#### 语义化

- `HTML` 标签的使用应该遵循标签的语义。

- 没有 `CSS` 的 `HTML` 是一个语义系统而不是 `UI` 系统。

- 一个页面一般只有一个`<h1>`标签，而其他`<h2>`等同级可以有很多个。

举例：

| 标签                 | 语义     |
| -------------------- | -------- |
| `<h1> <h2> <h3>` ... | 标题     |
| p                    | 段落     |
| ul                   | 无序列表 |
| ol                   | 有序列表 |

#### 严格嵌套

- 分清楚块元素，行内元素区别;

- 行内元素，建议仅可以包含文本或其它行类元素;

- `<a>`里不可以嵌套交互式元素`<a>`、`<button>`、`<select>`等;

- `<p>`里不可以嵌套块级元素`<div>`、`<h1>~<h6>`、`<p>`、`<ul>/<ol>/<li>`、`<dl>/<dt>/<dd>`、`<form>`等。

但是会有特殊情况，请自行选择。

```html
<!-- bad -->
<p>
  <div>
    <span>
      <p></p>
    </span>
  </div>
</p>

<!-- good -->
<div>
  <div>
    <p>
      <span></span>
    </p>
  </div>
</div>
```

#### 类型属性

- [强制] 不需要为 `CSS`、`JS` 指定类型属性，`HTML5` 中默认已包含

```html
<!-- good -->
<link rel="stylesheet" href="" />
<script src=""></script>

<!-- bad -->
<link rel="stylesheet" type="text/css" href="" />
<script type="text/javascript" src=""></script>
```

#### 元素属性

- 元素属性值使用双引号语法

```html
<input type="text" />
<input type="email" />

<input type="radio" name="name" checked />
```

#### 特殊字符引用

```html
<!-- good -->
<a href="#">more&gt;&gt;</a>

<!-- bad -->
<a href="#">more>></a>
```

更多关于符号引用：[#Character references](http://www.w3.org/TR/html5/syntax.html#character-references)

### 注释

标准写法：

```html
<!-- Comment Text -->
```

错误的写法：

```html
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```

参考 [www.w3.org #Comments](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments)

- 单行注释

```html
<!-- Comment Text -->
<div>...</div>
```

- 模块注释

标识符`Start`和`End`仅代表模块开始与结束，不做强制约束，可自行替换字符，如：开始，结束。

```html
<!--  Comment Text A  Start -->
<div class="mod_a">
  ...
</div>
<!--  Comment Text A End -->

<!-- Comment Text B Start -->
<div class="mod_b">
  ...
</div>
<!-- Comment Text B End -->
```

- 嵌套模块注释

```html
<!-- Comment Text A Start -->
<div class="mod_a">
  <div class="mod_b">
    ...
  </div>
  <!-- mod_b End -->

  <div class="mod_c">
    ...
  </div>
  <!-- /mod_c End -->
</div>
<!-- Comment Text A End -->
```
