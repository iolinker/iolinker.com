---
title: 事件网关
description: 当流程到达事件网关节点后，网关会进入等待状态，它在等待事件驱动触发后，会选择后续分支中，其中一个最先执行的的分支事件执行，并取消其他分支的事件。
meta:
  - name: keywords
    content: 事件网关, 排他性网关, 事件驱动, 捕获事件, 异或网关, XOR网关, 低代码, AI工作流, 流程引擎
---

## 事件网关

当流程到达事件网关节点后，网关会进入等待状态，它在等待事件驱动触发后，会选择后续分支中，其中一个最先执行的的分支事件执行，并取消其他分支的事件。例如下面事件网关下的三个分支：延时20秒、审批和回调接口调用（生产回调接口供第三方系统调用）。只要任意一个执行结束，则另外两个就会被取消执行。

<img src="./img/event_gateway.png" alt="event gateway" title="事件网关" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/KzndyA9TIwI"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



## 入参

无



## 出参

无