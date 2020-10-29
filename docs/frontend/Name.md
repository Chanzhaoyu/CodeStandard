---
title: 命名规范
---

## className 命名

#### 使用 OOCSS 和 BEM 的组合模式

[参考自 Airbnb 规范 ](https://github.com/airbnb/css)

- 可以帮助我们理清 `CSS` 和 `HTML` 之间清晰且严谨的关系

- 可以帮助我们创建出可重用、易装配的组件

- 可以减少嵌套，降低特定性

- 可以帮助我们创建出可扩展的样式表

示例：

```html
<article class="listing-card listing-card--featured is-horizontal">
  <h1 class="listing-card__title">Adorable 2BR in the sunny Mission</h1>

  <div class="listing-card__content">
    <p>Vestibulum id ligula porta felis euismod semper.</p>
  </div>
</article>
```

```css
.listing-card {
}

.listing-card--featured {
}

.listing-card__title {
}

.listing-card__content {
}

.is-horizontal {
}
```

解释：

- `.listing-card` 是一个块`（block）`，表示高层次的组件。

- `.listing-card__title` 是一个元素`（element）`，它属于 `.listing-card` 的一部分，因此块是由元素组成的。

- `.listing-card--featured` 是一个修饰符 `（modifier）`，表示这个块与 `.listing-card` 有着不同的状态或者变化。

- `.is-horizontal` ，和 `--`通用，表示独立状态修饰。

#### JavaScript 钩子

推荐在创建用于特定 `JavaScript` 的类名时，添加 `.js-` 前缀：

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

## ID 命名

使用横线连接 `(kebab-case)`

```html
<h3 id="hello-world"></h3>
```

## 文件命名

所有的 `css（less、sass）`， `js（ts）` 文件都遵循横线连接 `(kebab-case)`

例子：

- `@/utils/open-window.js`

- `@/style/element-ui-variables.scss`

## 组件命名

用大驼峰作为文件名，用 `index.js | .vue | .jsx` 作为文件名，同时用文件夹名作为组件名

例子：

- `@/components/BackToTop/index.jsx`

- `@/components/Charts/index.vue`

- `@/views/util/index.js`
