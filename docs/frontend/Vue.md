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

## Views

在 `views` 文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

- `@/views/svg-icons/index.vue`
- `@/views/svg-icons/require-icons.js`
