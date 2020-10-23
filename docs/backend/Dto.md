---
title: 实体和 Dto
---

# 实体和 Dto

## 实体命名规范

1. 能清晰简单的表达当前实体的意义

2. 实体对象：如`客户实体 Customer/User/WorkOrderData`

3. 主从表实体：如`客户角色 CustomerRole / 客户设备 CustomerDevice`

4. 对于涉及业务逻辑数量比较大的表以 `Data` 结尾(会建立分区表)，比如

   `WorkOrderData` 、 `MessageData`

5. 对于涉及日志方面以 `Log` 结尾，例如 `CustomerLoginLog`、 `MessageSendLog`

6. 属性是 `bool` 类型的，以 `Is` 开头

7. 属性结尾规范

   - 数量以 `Count` 结尾
   - 次数以 `Times` 结尾
   - 时间以 `DateTime` 结尾
   - 图片以 `Image` 结尾
   - 单号以 `No` 结尾
   - 类型以 `Type` 结尾
   - 状态以 `Status` 结尾
   - 结果以 `Result` 结尾
   - 备注 `Remark`
   - ......

8. 同一描述或表达意思，不能出现 `2` 次以上的属性定义，即设备名称`DeviceName`不可在出现`MachineName`等表达设备名称的属性

9. 实体名和属性名不得出现无法理解的缩写，除非为约定缩写
   ::: tip YES
   SPC， Url 等
   :::

   ::: danger NO
   Customer 缩写 Cust 等
   :::

## 实体添加特性

- 需为实体添加 `Table(“Is_表名”)` 特性，表名自己定义

```csharp
/// <summary>
/// (pjt)管理员角色表
/// </summary>
[Table("Is_AdminRoles")]
public class AdminRoles: Entity<int>, IHasCreationTime, ISoftDelete
{

}
```

- 需为实体字段为 `String` 类型添加 `StringLength` 特性，长度自己定义，小数点默认保留 `2` 位

```csharp
/// <summary>
/// 角色代码
/// </summary>
[StringLength(50)]
public string RoleCode { get; set; }

/// <summary>
/// 角色名称
/// </summary>
[StringLength(50)]
public string RoleName { get; set; }
```

## 实体继承接口

- 实体需继承`Entity<T>`类

- 业务逻辑相关实体需实现`IHasCreationTime`， `ISoftDelete`

- 实现软删除接口需在 `DbContext` 类 `OnModelCreating`方法添加`modelBuilder.Entity<实体名>().HasQueryFilter(p => !p.IsDeleted)`

## Dto 命名规范

- `当前模块名` + `Service 层中的方法名` + `Output/Input`

```
DeviceManagerCreateInput/CustomerLoginInput
```

- 多个相关实体或相关的 DTO 应该存放到相同文件夹中

  - 实体：`Customer/CustomerLogin/CustomerRole`

  - Dto ：`DeviceManagerCreateInput/ DeviceManagerListOutput`
