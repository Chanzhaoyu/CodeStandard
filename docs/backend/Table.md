---
title: 表索引及分区表
---

# 表索引及分区表

## 索引规范

### 索引名称

索引名称为 `Index + 表名 + 字段名`

```
Index_Customer_UserId
```

### 需要建立索引的情况

1.  主键自动建立唯一索引

2.  频繁作为查询条件的字段

3.  查询中与其他表关联的字段，外键关系建立索引

4.  频繁更新的字段不适合创建索引

5.  查询中排序的字段，查询中统计或分组字段

6.  复合索引的字段顺序应该是 `where` 条件后面的顺序，如果实现了软删除的表需将 `IsDeleted` 字段放到索引最后一行。

例如当前索引字段：`Device`，`SchedueId`，`CreateTime`，`IsDeleted`

那么查询条件应该是：

```sql
Where Device=1 and ScheduleId=1 and CreateTime>'xxx' and CreateTime<='xxx' and IsDeleted=false;
```

7.  对于数据量特别大的表，禁止使用 `like '%xx'`，如果确实要使用，需将当前字段添加单值索引，并使用覆盖索引查询 `id`，在通过 `id` 查询对应的数据（`Id` 必须是主键）

```sql
Select DeviceId,Spc,DbModeCout from is_Spc where id in(select id from is_Spc where DeviceName like '%02');
```

### 索引使用查询规范

1.  全值匹配查询

2.  最佳左前缀法则

3.  不在索引列上做任何操作（计算,函数,类型转换等）

4.  存储引擎不能使用索引中范围条件右边的列

5.  尽量使用覆盖索引，避免使用`select *`

6.  `mysql`在使用不等于 `!=` 或者 `<>` 的时候无法使用索引会导致全表扫描

7.  `is null`，`is notnull`也无法使用索引图

8.  `like` 以通配符开头`('%abc...)mysq|` 索引失效会变成全表扫描的操作图

9.  字符串不加单引号索引失效口

10. 少用`or`，用它来连接时会索引失效

## 分区表规范

凡是涉及到大量业务逻辑的数据表需建立分区表，并以 `Id` 和 `CreateTime` 为复合索引，表名以 `Data` 结尾。

分区表 `Sql` 语句:

```sql
// 建立
CREATE TABLE is_dhmeterusageData (
  Id bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (Id,CreationTime)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 PARTITION BY RANGE (to_days(CreationTime)) (
		PARTITION p202010 VALUES LESS THAN (to_days(20201101)),
		PARTITION p202012 VALUES LESS THAN (to_days(20210101)),
		PARTITION p202102 VALUES LESS THAN (to_days(20210301)),
		PARTITION p202104 VALUES LESS THAN (to_days(20210501)),
		PARTITION p202106 VALUES LESS THAN (to_days(20210701)),
		PARTITION p202108 VALUES LESS THAN (to_days(20210901)),
		PARTITION p202110 VALUES LESS THAN (to_days(20211101)),
		PARTITION p202112 VALUES LESS THAN (to_days(20220101)),
		PARTITION p202202 VALUES LESS THAN (to_days(20220301)),
		PARTITION p202204 VALUES LESS THAN (to_days(20220501)),
		PARTITION p202206 VALUES LESS THAN (to_days(20220701)),
		PARTITION p202208 VALUES LESS THAN (to_days(20220901)),
		PARTITION p202210 VALUES LESS THAN (to_days(20221101)),
		PARTITION p202212 VALUES LESS THAN (to_days(20230101)),
		PARTITION p202302 VALUES LESS THAN (to_days(20230301)),
		PARTITION p202304 VALUES LESS THAN (to_days(20230501)),
		PARTITION p202306 VALUES LESS THAN (to_days(20230701)),
		PARTITION p202308 VALUES LESS THAN (to_days(20230901)),
		PARTITION p202310 VALUES LESS THAN (to_days(20231101)),
		PARTITION p202312 VALUES LESS THAN (to_days(20240101)),
		PARTITION p202402 VALUES LESS THAN (to_days(20240301)),
		PARTITION p202404 VALUES LESS THAN (to_days(20240501)),
		PARTITION p202406 VALUES LESS THAN (to_days(20240701)),
		PARTITION p202408 VALUES LESS THAN (to_days(20240901)),
		PARTITION p202410 VALUES LESS THAN (to_days(20241101)),
		PARTITION p202412 VALUES LESS THAN (to_days(20250101))
);

// 新增
ALTER TABLE is_devicecycleparamdata ADD PARTITION (PARTITION p202402 VALUES LESS THAN (to_days(20240301)))

// 删除
alter table is_devicecycleparamdata DROP partition p201904;
```
