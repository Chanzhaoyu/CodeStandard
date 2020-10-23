---
title: 基本代码规范
---

# 基本代码规范

## 代码格式

### 花括号

花括号一定独占一行

```csharp
private void Save ()
{
  if (true)
  {

  }
}
```

### 换行

当表达式超过或即将超过显示器一行的显示范围时：

- 在逗号后换行

- 在操作符前换行

### 空行

空行是为了将逻辑上相关的代码分块，提高阅读性，规范如下：

- 接口、类、枚举、接口定义在同一文件中时， 需用 `2` 行隔开

```csharp
 public class TestClass
 {

 }


 public enum ISeeEnum
 {

 }


 public interface ITestClass
 {

 }
```

- 方法、属性、字段，定义在同一个文件中时，需用 `1` 行隔开

```csharp
public class TestClass
{
  public string _conn;

  public string Name { get; set; }

  public void Save ()
  {

  }

  public void Remove ()
  {

  }
}
```

- 方法中不同逻辑块，流程控制语句块之后，需用 `1` 行隔开

```csharp
public void Save ()
{
  //写入数据库
  var saveToDb = SaveDb ();

  //写入Redis
  var saveToRedis = SaveToRedis ();
}
```

### 语句结构

1. 不可以在同一行放置一句以上的代码语句

2. 分支语句不应该使用复杂长条件， 应该将长条件封装成方法

3. `switch` 语句，`case` 后面必须接 `break`

4. 禁止使用 `goto` 语句进行跳转

5. 特定含义的常数必须定义成枚举或常量

6. 不同类型的操作符混合使用时，使用括号给出优先级

7. 循环、判断语句的程序块部分用花括号括起来，即使只有一条语句

8. 每个类和方法完成单一的功能，不设计多用途面面俱到的类或方法

9. 严禁使用未经初始化的变量，变量通常使用构造方法来初始

### `Using` 排序

- 引入的命名空间应该按照字母音序排列

```csharp
using System;
using System.Collections.Generic;
using System.Text;
```

### 文件命名

#### 类

- 使用能够反映类功能的名词或名词短语命名类

- 不要使用`“I”`、`“C”`、`“_”`等特定含义前缀

- 文件名要能反映类的内容，最好是和类同名

#### 字段

- 字段名采用 `camel` 规则

```csharp
public string conn;
```

#### 属性，方法

- 方法名采用 `Pascal` 规则

- 方法名应使用动词或动词短语

- 类中访问修饰符或功能相同的方法应该放在一起且公共或实现接口的方法在前

```csharp
public void Remove ()
{

}
```

#### 方法参数

- 参数采用`camel`规则命名

- 使用描述性参数名称，参数名称应当具有足够的说明性

- 检查方法所有输入参数的有效性

```csharp
public void Remove (int id)
{
  var user = _UserRepostory.get(id);
  if (user != null)
  {

  }
}
```

#### 常量，静态字段

- 采用`Pascal`规则

```csharp
public static string DbConn = "server:xxx:database:xxx";
```

#### 枚举

- 枚举名使用`Pascal`规则命名

- 枚举值从小到大顺序定义

```csharp
public enum ISeeDeviceType
{
  Injection = 1,
  Rubber = 2,
  Extruder = 3,
  CNC = 4,
  BottleBlowing = 5,
}
```

#### 接口

- 接口定义使用 `Pascal` 规则

- 必须以大写`“I”`开头

- 接口名称要有意义，中间不要有下划线`“_”`等字符

- 如果类实现了接口，名称尽量和接口相同， 只是省掉`“I”`字符

#### 事件

- 委托名称采用 `Pascal` 规则

- 定义事件的委托要使用 `EventHandler` 后缀 ，且包括 `sender` 和 `e` 两个参数

- 事件用到的参数，名称要带 `EventArgs` 后缀

#### 命名空间

- 命名空间名称采用 `Pascal` 规则

- 命名空间名称尽量反映其内容所提供的整体功能

- 命名空间格式：`公司.项目名.模块名.类名`

```csharp
Cml.ISee4.Customer.CustomerLogin
```

### 注释

#### 必要注释

1. 类头部
2. 方法头部
3. `Dto` 头部和字段头部
4. 枚举头部和值头部
5. 实体头部和字段头部

- 头部注释内容：(开发人名称简写) + 类功能描述或表名：( pjt 数据采集功能)

```csharp
/// <summary>
/// (pjt)访问统计
/// </summary>
public class AccessStatisticsAppService: ISee4BaseAppService
{

}
```

- 字段和值头部：字段描述或值说明

```csharp
/// <summary>
/// 客户名称
/// </summary>
public string CustomerName { get; set; }
```

#### 其他注释

其他注释非强制，但需明确描述当前注释的意义，拒绝无关紧要的注释。
