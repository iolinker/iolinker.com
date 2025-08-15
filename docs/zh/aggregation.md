---
title: 并行汇聚(Join)
description: 支持两个或多个分支合并为一个后续分支，等待所有分支都执行完毕后，后续分支才会触发执行。也可以设置任意一个分支或指定分支执行完以后，后续分支就触发执行。达到对并行运行分支的控制效果。
meta:
  - name: keywords
    content: 工作流控制模式, 工作流模式, workflow pattern, And-Join, Or-Join, 分支合并, 分支同步, 工作流, 工作流汇聚, 分支汇聚,同步模式, 低代码, AI工作流, 流程引擎
---

## 并行汇聚(Join)

等待指定的前置并行分支运行结束后才继续往下执行，要跟【并行分支】APP搭配一起使用。

<img src="./img/parallel_aggregation.png" alt="image-20240821095145960" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/yeeWO2zKVgA"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## 入参

- 全部

  需要等待前置的所有并行分支都运行完，才可以继续往下执行

- 任意

  只需要等待前置的任意一个分支都运行完，就可以继续往下执行

- 自定义

  需要等待前置的指定分支都运行完，才可以继续往下执行



## 出参

无





