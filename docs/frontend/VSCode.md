---
title: VSCode
---

## 配置换行

- 设置在换行列数为 `120` ，颜色可自定。

```json
{
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 120,
  "editor.rulers": [
    {
      "column": 120,
      "color": "#c792ea"
    }
  ]
}
```

## 安装 Prettier

- 配置文件

```json
{
  // 使能每一种语言默认格式化规则
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.printWidth": 120, // 超过最大值换行
  "prettier.tabWidth": 2, // 缩进字节数
  "prettier.useTabs": false, // 缩进不使用 tab，使用空格
  "prettier.semi": false, // 句尾添加分号
  "prettier.singleQuote": true, // 使用单引号代替双引号
  "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "prettier.jsxBracketSameLine": true, // 在jsx中把'>' 是否单独放一行
  "prettier.jsxSingleQuote": true, // 在jsx中使用单引号代替双引号
  "prettier.trailingComma": "es5" // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
}
```

## 安装 Vetur

- `Vue` 开发必备，包括：语法高亮，智能提示，`emmet`，错误提示，格式化，自动补全，`debugger`

## 配置 ESLint

安装 eslint 插件

![ESLint](~@/VSCode/ESLint.png)

setting.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 其它插件

#### Auto Close Tag

自动关闭 HTML 标签

#### Auto Rename Tag

自动完成另一侧标签的同步修改

#### JavaScript (ES6) snippets

JS ES6 代码提示

#### Npm Intellisense

Visual Studio Code plugin that autocompletes npm modules in import statements.

#### Path Intellisense

自动提示文件路径，支持各种快速引入文件
