---
title: 枚举命名规范
---

# 枚举命名规范

::: tip 
所有枚举需保存到 `Cml.ISee4.Entity.CommonDto\ISee4Enum` 类中
:::

## 枚举建立原则

- 凡是关于状态、类型、模式、选项等同一个字段或变量有多个已明确的值的时候需要建立枚举

- 同一字符串出现 `2` 次以上的频率需建立枚举

## 枚举命名规范
- 枚举需以 `ISee` 开头，避免与系统或第三方冲突

- 枚举中的值需按正序排序

- 枚举中的值需同时添加到多语言中

```csharp
/// <summary>
/// 设备类型
/// </summary>
public enum ISeeDeviceType
{  
  /// <summary>
  /// 吹瓶机
  /// </summary>
  BottleBlowing ,

  /// <summary>
  /// CNC机
  /// </summary>
  CNC,

  /// <summary>
  /// 挤出机
  /// </summary>
  Extruder,

  /// <summary>
  /// 注塑机
  /// </summary>
  Injection,

  /// <summary>
  /// 橡胶机
  /// </summary>
  Rubber,     
}
```