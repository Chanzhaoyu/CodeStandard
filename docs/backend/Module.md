---
title: 模块规范
---

# 模块规范

## 模块命名规范

命名以`公司名` + `项目名` + `模块名`

```
Cml.ISee4.Client.Message
```

## 模块文件夹结构

![模块文件夹结构](~@/backend/module/1.png)

1. Config：存放该模块相关配置文件，如： `AutoMaper` 映射文件

2. Interface： 该应用层相关接口，如：`IUserAppService`

3. Dto： 该应用层相关 `Dto`

4. Service： 该应用层相关接口的实现，如：`UserAppService`

5. Manager：存放领域服务器文件，例如一个 `2` 个服务共有同一个方法时，需提到 `XXXManager` 中

## 模块依赖关系

模块与模块之间不可相互依赖，模块只能依赖 `Entity` 和 `EntityFrameworkCore`

## 模块添加步骤

1. 在项目 `Plugins` 文件下面添加 `.Net Core` 类库项目，名称：`Cml.ISee4.XXX(模块名称)`

![模块文件夹结构](~@/backend/module/2.png)

---

2. 依次新建以下文件夹：`Config`， `Interface`， `Service`，`Manager`，`Dto`

![文件夹](~@/backend/module/3.png)

---

3. `Netgut` 相关包

   - Abp

   - Abp.AspNetCore

   - Abp.AutoMapper

   - Abp.ZeroCore

   - Castle.Core

版本如下：

![Netgut](~@/backend/module/4.png)

---

4. 引用相关项目：`Entity`， `EntityFrameworkCore`

![引用相关项目](~@/backend/module/5.png)

---

5. 新建该模块 `Apb` 配置依赖文件，文件名称 `ISee4XXX(模块名称)Module.cs` 并添加以下代码

添加特性：

```csharp
[DependsOn(typeof(AbpAutoMapperModule))]

public override void PreInitialize()
{
  //支持动态WebAPI
  Configuration.Modules.AbpAspNetCore()
    .CreateControllersForAppServices(
        typeof(ISee4AuthorizationModule).GetAssembly(), "XXX"
    );
}

public override void Initialize()
{
  IocManager.RegisterAssemblyByConvention(typeof(ISee4AuthorizationModule).GetAssembly());
}
```

![配置依赖文件](~@/backend/module/6.png)

![配置依赖文件](~@/backend/module/7.png)

---

6. 添加生成事件和 `Swagger` 注释，目的是为了让该模块编译后的 `dll` 文件直接到 `Host/PlugIns` 文件下面，并支持 `Swagger` 注释

![添加生成事件](~@/backend/module/8.png)

---

7. 添加生成事件

输入以下命令：

```shell
rd /s/q "$(SolutionDir)src\Cml.ISee4.Host\Plugins\$(ProjectName)\"
if not exist "$(SolutionDir)src\Cml.ISee4.Host\Plugins\$(ProjectName)\" md "$(SolutionDir)src\Cml.ISee4.Host\Plugins\$(ProjectName)\"
copy "$(TargetDir)$(TargetFileName)" "$(SolutionDir)src\Cml.ISee4.Host\Plugins\$(ProjectName)\$(TargetFileName)"
copy "$(ProjectDir)$(ProjectName).xml" "$(SolutionDir)src\Cml.ISee4.Host\Plugins\$(ProjectName)"
```

![添加生成事件](~@/backend/module/9.png)

---

## 添加实体与 Dto 映射

1. 添加 `AutoMaper NutGet` 包

2. 在 `Config` 文件夹添加 `AutoMapperProfile.cs`，并继承 `Profile`，在改类的构造函数添加，实体与 `Dto` 映射关系

```csharp
public AutoMapperProfile()
{
  //设备型号
  CreateMap<CreateDeviceTypeInput, DeviceType>();
  CreateMap<UpdateDeviceTypeInput, DeviceType>();
  //设备管理
  CreateMap<CreateDeviceManageInput, Devices>();
  CreateMap<UpdateDeviceManageInput, Devices>();
}
```

3. 在 `ISee4XXXModule.cs` 文件中添加如下代码

```csharp
public override void PreInitialize()
{
  //添加AutoMapper映射文件
  Configuration.Modules.AbpAutoMapper().Configurators.Add(c =>
  {
    c.AddProfile(new AutoMapperProfile());
  });
}
```
