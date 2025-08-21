---
title: 读写本地环境变量
description: 介绍在工作流中如何设置局部变量，用于临时数据的读写操作。
meta:
  - name: keywords
    content: 局部变量,变量读写, 流程变量, 低代码, AI工作流, 流程引擎
---

## 读写本地环境变量

每个工作流在运行时，都可以维护自己的本地变量(仅作用于当前工作流范围)，用于存储临时的数据。在设计工作流时，在菜单栏上有【本地变量】菜单，点击进去后可以添加该工作流可以读写的本地变量，目前支持字符串和数字两类。

每个本地变量都有默认值，以及在运行时的值。

**注意：添加本地变量前需要保存工作流先，因为本地变量需要绑定具体的工作流。**

<img src="./img/read_write_local_variable.png" alt="read_write_local_variable" title="读写本地环境变量" style="zoom:50%;" />

在设置了前面的本地变量后，就可以通过【读写本地变量】的应用对变量进行读和写操作。

<img src="./img/read_write_local_variable_app.png" alt="read_write_local_variable_app" title="读写本地环境变量app" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/6B67QKpXXGE"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



## 输入

### 操作

支持读和写两种操作。



### Key

读写的变量对象，这里是前面创建的本地环境变量列表。



## 输出

输出具体Key值。