---
title: CSS
---

## 代码风格

### 通用

- [建议] `CSS` 文件使用无 `BOM` 的 `UTF-8` 编码。

- [强制] 每行不得超过 `120` 个字符，除非单行不可分割。

- [强制] 书写必须为`展开格式（Expanded）`

> 项目文件统一使用展开格式书写样式，紧凑型不利于阅读，应该交给自动化打包去处理。

```css
.container {
  display: block;
  width: 50px;
}
```

### 空格

- [强制] 选择器 与 `{` 之间必须包含空格。

```css
.selector {
}
```

- [强制] 属性名 与之后的`:` 之间不允许包含空格，`:`与 属性值 之间必须包含空格。

```css
.selector {
  margin: 0;
}
```

- [强制] 列表型属性值 书写在单行时，, 后必须跟一个空格。

```css
body {
  font-family: Arial, "sans-serif";
}
```

### 选择器

- [强制] 如无必要，不得为 id、class 选择器添加类型选择器进行限定。

  > 在性能和维护性上，都有一定的影响。

```css
/* good */
#error,
.danger-message {
  font-color: #c00;
}

/* bad */
dialog#error,
p.danger-message {
  font-color: #c00;
}
```

- [建议] 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。

```css
.box {
}
.box ul {
}
.box ul li {
}
```

### 属性缩写

- [建议] 合并可以简写的属性。

```css
/* good */
body {
  padding: 20px 15px 0 15px;
  font: 12px/1.5 arial, sans-serif;
}

/* bad */
body {
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-botton: 0;
  font-family: arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
}
```

### 值与单位

- [建议] RGB 颜色值必须使用十六进制记号形式，并且为小写，不允许使用 `rgb()`，有透明通道除外。

```css
.box {
  color: #fff;
}
```

- [强制] 不要为 0 指明单位，不需要给小数点前面添加 0

```css
/*good*/
.box {
  margin: 0 10px;
  opacity: .8;
  transition: all ease .3s;
}

/* bad */
.box {
  margin: 0px 10px;
  opacity: 0.8;
  transition: all ease 0.3s;
}
```

- [强制] 必须同时给出水平和垂直方向的位置。

```css
/* good */
body {
  background-position: center top; /* 50% 0% */
}

/* bad */
body {
  background-position: top; /* 50% 0% */
}
```

### 属性书写顺序

[建议] 同一属性在书写时，应按功能进行分组，并以 `Formatting Model（布局方式、位置）` > `Box Model（尺寸）` > `Typographic（文本相关）` > `Visual（视觉效果）` 的顺序书写，以提高代码的可读性。

解释：

- 布局定位：`position / top / right / bottom / left / float / display / overflow` 等
- 尺寸：`width / height / margin / padding / border` 等
- 文本：`font / line-height / text-align / word-wrap` 等
- 其他：`background / color / transition / list-style`等

另外，如果包含 `content` 属性，应放在最前面。

```css
.box {
  /*布局定位*/
  position: absolute;
  top: 50px;
  left: 0;
  overflow-x: hidden;

  /*自身*/
  width: 200px;
  padding: 5px;
  border: 1px solid #ddd;

  /*文本*/
  font-size: 14px;
  line-height: 20px;

  /*装饰，其他*/
  background: #f5f5f5;
  color: #333;
}
```

### !important

[建议] 尽量不使用 !important 声明。

[建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 !important 定义样式。

### z-index

[建议] 将 `z-index` 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。

说人话：
别“傻不啦叽”的直接`z-index: 9999`，而应该梳理定位中的层级关系。

### 私有前缀

CSS3 浏览器私有前缀在前，标准前缀在后。

```
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

### 文件信息注释

- [了解] 在样式文件注明名称、作者、创建日期等信息

```css
/**
 * @desc 公共样式
 * @author Welltec
 * @date 2020-10-10
 */
```

### 媒介查询

- 判断设备横竖屏

```css
/* 横屏 */
@media all and (orientation: landscape) {
}

/* 竖屏 */
@media all and (orientation: portrait) {
}
```

- 判断设备宽高

```css
/* 设备宽度大于 320px 小于 640px */
@media all and (min-width: 320px) and (max-width: 640px) {
}
```

- 打印样式

```css
@media print {
}
```
