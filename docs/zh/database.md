---
title: 数据库操作
description: 工作流中支持MySQL、Postgres、SQLServer数据库的增删改查操作，即select、update、delete、insert SQL语句执行。
meta:
  - name: keywords
    content: MySQL, Postgres, SQLServer, 数据库操作, 数据库增删改查, MySQL增删改查, MySQL Select, MySQL Update, MySQL Insert, MySQL Delete, MySQL Database, 工作流开发, 低代码开发
---

## 数据库操作

支持输入SQL语句实现对数据库的增删改查等操作。

<img src="./img/database.png" alt="database" title="数据库" style="zoom:50%;" />



<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/qCZ743igGO8"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



## 入参

<img src="./img/database-input-parameter.png" alt="database input parameter" title="数据库参数配置" style="zoom:50%;" />

### 凭据

可在【凭据管理】里创建数据库凭据类型。需要配置如下几个选项：

- 主机。远程主机地址。
- 端口。数据库端口，默认3306。
- 用户：数据库账号。
- 密码：数据库密码。
- 编码：数据库读写编码格式，默认utf8。

<img src="./img/database-input-cred.png" alt="database input cred" title="数据库凭据" style="zoom:50%;" />



### 数据库类型

目前支持如下数据库：

- MySQL
- Postgres
- SQL Server



### SQL语句

支持基础的增删改查命令，即select、update、delete、insert语句。



## 出参

- 如果是select操作，返回的是一个JSON数组，例如：

  ```json
  [{"id":1, "name":"test1"}]
  ```

- 如果是insert操作，返回自增长id和受影响的数量：

  ```json
  {
      "LastInsertId": 16,
      "RowAffected": 1
  }
  ```

- 如果是delete和update操作，返回受影响的数量：

  ```json
  {
      "RowAffected": 1
  }
  ```



