---
title: Vue
---

## 风格指南

当前项目的风格指南主要是参照 vue 官方的 [风格指南](https://cn.vuejs.org/v2/style-guide/index.html)，建议先阅读一遍指南，这能帮助让你写出更规范和统一的代码。

## 深度选择器

统一使用 `::v-deep` 写法，它不仅兼容了 `css` 的`>>>`写法，还兼容了 `sass` `/deep/`的写法。而且它还是 [vue 3.0 RFC](https://github.com/vuejs/rfcs/blob/scoped-styles-changes/active-rfcs/0023-scoped-styles-changes.md) 中指定的写法。

而且原本 `/deep/` 的写法也本身就被 `Chrome` 所废弃，你现在经常能在控制台中发现 `Chrome` 提示你不要使用`/deep/`的警告。

```scss
// bad
.a {
  /deep/ {
    .b {
      color: red;
    }
  }
}

// good
.a {
  ::v-deep {
    .b {
      color: red;
    }
  }
}
```

## Component

所有的 `Component` 文件都是以大写开头 (PascalCase)，这也是官方所[推荐的](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

但除了 `index.vue`。

例子：

- `@/components/BackToTop/index.vue`
- `@/components/Charts/Line.vue`
- `@/views/example/components/Button.vue`

## JS 文件

所有的 `.js` 文件都遵循横线连接 (kebab-case)。

例子：

- `@/utils/open-window.js`
- `@/views/svg-icons/require-icons.js`
- `@/components/MarkdownEditor/default-options.js`

## Views

在 `views` 文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

- `@/views/svg-icons/index.vue`
- `@/views/svg-icons/require-icons.js`
