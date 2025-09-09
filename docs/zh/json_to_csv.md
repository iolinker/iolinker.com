---
title: JSON转CSV文件
description: 可以把Json数据(数组)转换成csv文件。
meta:
  - name: keywords
    content: json转csv, json转excel, 低代码, AI工作流, 流程引擎
---

## JSON转CSV文件

可以把Json数据(数组)转换成csv文件。

<img src="./img/json_to_csv_menu.png" alt="json_to_csv_menu" title="json转csv" style="zoom:50%;" />

写入成功的文件可以在【文件管理】下的【本地文件】查看到，并且可以在这里进行编辑和更新。

<img src="./img/run_json_to_csv.png" alt="run_json_to_csv" title="json转csv效果" style="zoom: 50%;" />



<img src="./img/json_to_csv_file_loc.png.png" alt="json_to_csv_file_loc" title="文件存储地址" style="zoom:50%;" />



<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/NU_r3PXgsC0"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## 入参

<img src="./img/json_to_csv_input.png" alt="json_to_csv_input" title="json转csv配置" style="zoom:50%;" />

### 文件名

保存的文件名，例如：test。无需加后缀.csv，系统会自动添加。



### 操作

- 覆盖

  如果有同名的文件，则覆盖该文件数据，如果没有同名文件，则新建文件。

- 删除文件

  删除指定的文件名。

### 内容

写入的JSON数组文本数据内容。



## 出参

输出csv文件路径。

```json
[
  {
    "filepath": "space/alyyd551jg/aa.csv"
  }
]
```
