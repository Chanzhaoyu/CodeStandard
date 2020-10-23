---
title: Api 接口规范
---

# Api 接口规范

## 接口命名规范

1. 所有请求需为 `Post` ，特殊情况用 `Get`

2. 所有接口需添加 `Auth` 权限验证特性，并添加权限代码

```csharp
[HttpPost, Auth("Customer.CustomerUser.View")]
public ResultDto List(GetAllCustomerUsersInput input)
```

3. 所有接口需返回 `ResultDto`，并通过 `Try Cath` 捕捉异常

```csharp
public ResultDto List(GetAllCustomerUsersInput input)
{
    ResultDto result = new ResultDto();
    try
    {
        result.Status = ISeeStatusCodeEnum.Success;
    }
    catch (Exception e)
    {
        result.Status = ISeeStatusCodeEnum.Error;
        result.Data = $"返回用户数据错误{e}";
    }
    return result;
}
```

4. 获取单个对象的方法用 `Get` 做前缀

5. 获取多个对象的方法用 `List` 做后缀，如：`GetOrdersList`

6. 获取统计值的方法用 `Count` 做后缀

7. `添加Create` / `删除Delete` /`修改Update` / `查询列表List` / `返回下单菜单 ToSelect`

8. 所有接口必须直接继承或间接继承 `ISee4BaseAppService` 类

9. 所有查询返回数据列表的接口，参数需继承 `QueryBaseDto` 或 `QueryWhitDateDto`

## EF 使用规范

1. 所有查询出来的实体，后续没有进行编辑或删除时，必须禁止 `EF` 实体跟踪，既 `GetAll` 后必须加`.AsNoTracking()`，除非使用了 `Select` 映射。

```csharp
GetAll(). AsNoTracking().Where(x=>x.id==1);

GetAll(). AsNoTracking().FistOrDefault(x=>x.id==1)

GetAll().Where(x=>x.id==1).Select(x=>new x.Name);
```

2. 禁止先`GetAll().ToList()` 再 `Where()`，必须 `GetAll().Where().ToList()`

3. 禁止使用 `Count()` 或 `Select *` 查询所有字段，须使用 `Count(x=>x.Id)` 或 `Select(x=>x.Id)` 某个字段

4. 判断某个条件是否存在，推荐使用 `Any()`，而非 `FirstOrDefault() != null`

5. 多字段组合排序使用 `OrderBy(x=>x.DeviceId).ThenBy(x=>x.DeviceName)`

6. 禁止 `3` 个表以上的 `join` 连接，多表连接查询尽量使用小表驱动大表，例如 `from` 小表 `join` 大表，且关联字段类型必须一致

7. 查询条件或排序升序字段不明确时，推荐使用 `System.Linq.Dynamic` (具体使用查看文档)。

```csharp
GetAll().Where(x=>x.Id>100).OrderBy(“Name Asc,Age Desc”)
```

8. 使用 `Lamadba` 表达式条件组合

如：根据条件查询 `Type=1` 时查询 `Name=“张三”`，`Type=2` 时查询 `Name=“张三” And Age>=30`

```csharp
// bad
studentsList.Where(x => x.Name == "张三");
if (type == 2)
{
  studentsList.Where(x => x.Name == "张三" && x.Age>=30);
}

// good
Expression<Func<Student, bool>> expression = t => t.Name == "张三";
if (type == 2)
{
  expression = expression.And(t => t.Age >= 30);
}
var stu = studentsList.Where(expression).ToList();
```

9. 接收延迟查询结果使用 `IQueryable` 接口，非 `IEnumable`

## 其他规范

1. 所有时间格式默认为 `yyyy-MM-dd HH:mm:ss`

2. 所有时间单位默认为分钟为单位

3. 所有 `Sql` 语句参数需使用 `SqlParameter` 传递，禁止直接拼接到 `Sql` 语句中
