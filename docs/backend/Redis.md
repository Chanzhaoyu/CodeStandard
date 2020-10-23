---
title: Redis 使用规范
---

# Redis 使用规范

::: tip
所有 `RedisKey` 需保存到 `Cml.ISee4.Entity.CommonDto\ISee4RedisKey` 类中
:::

## Redis 使用原则

- 对于频繁读取的数据需写入缓存，但频繁修改且需要保存数据库的数据，则不建议写入缓存

- 如果缓存数据丢失，且能从数据库或其他地方再写入缓存的，这类的数据才可以写入缓存

- 同时写入数据库又写入缓存的数据，需先写入数据库，再到缓存，且要保持数据的一致性

## RedisKey 命名规范

- 枚举需以 `ISee` 开头，避免与系统或第三方冲突

- 枚举中的值需按正序排序

```csharp
/// <summary>
/// 设备状态
/// </summary>
public enum ISeeDeviceStatus
{
  /// <summary>
  /// 设备最新SPC
  /// </summary>
  ISeeDevice_LastSpc,
  
  /// <summary>
  /// 设备最新状态
  /// </summary>
  ISeeDevice_LastStatus,

  /// <summary>
  /// 设备最新参数
  /// </summary>
  ISeeDevice_LastRealTime,

  /// <summary>
  /// 设备最新配置
  /// </summary>
  ISeeDevice_LastConfig
}
```