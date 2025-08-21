---
title: 环境变量的使用
description: 可以设置全局的环境变量，目前支持添加字符串和数字类型的环境变量。设置后，可以在工作流引用读取。
meta:
  - name: keywords
    content: 工作流变量, 全局变量, 环境变量, 定义工作流变量, 低代码, AI工作流, 流程引擎
---

## 环境变量的使用

### 创建环境变量

在【环境变量】下，可以设置全局的环境变量，目前支持添加字符串和数字类型的环境变量。设置后，可以在工作流引用读取。

<img src="./img/add_env_variable.png" alt="add env variable" title="添加环境变量" style="zoom:50%;" />



<img src="./img/env_variable_list.png" alt="env variable list" title="环境变量列表" style="zoom:50%;" />

### 使用环境变量

拖入任意一个APP，点击右边的编辑图标，弹出一个变量表达式选择器，可以看到最末尾有一个【Env Variable】的下拉选项，可以看到前面创建的环境变量。

双击会自动生成变量表达式，工作流会在运行时实时读取该环境变量的值。

<img src="./img/use_env_variable.png" alt="use env variable" title="环境变量使用" style="zoom:50%;" />


