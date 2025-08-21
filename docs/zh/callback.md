---
title: 等待回调
description: 回调允许工作流等待其他服务通过调用生成的回调接口，来触发请求工作流继续执行。
meta:
  - name: keywords
    content: Webhook, Workflow, 回调端点, 回调接口, Callback, 低代码, AI工作流, 流程引擎
---

## 等待回调

执行【回调接口】应用会生成一个唯一的URL回调地址，其他服务可以通过调用这个回调接口请求调用（可以带参数），来触发请求工作流继续执行，否则会一直处于睡眠状态等待事件触发。例如：您可以创建一个工作流，在调用第三方扫描器创建完一个扫描任务以后，可以在扫描结束时在该扫描服务上调用这个Callback回调接口请求工作流继续执行。

该回调地址可以通过Post传第参数给应用并输出显示到TriggerData数据中。

```
>> curl -d '{"name":"hello world"}' http://localhost/v1/webhook/callback/202435253cf81b3f15a1de22b3a0586f
>> {"response":{}}
```



<img src="./img/callback.png" alt="callback"  title="回调接口" style="zoom:50%;" />

如果重复提交，会提示错误，确保每个回调接口只能被调用一次。

```
>> curl -d '{"name":"hello world"}' http://localhost/v1/webhook/callback/202435253cf81b3f15a1de22b3a0586f
>> {"response":{"error":{"code":"requestError.repeatedOperation","message":"requestError.repeatedOperation"}}}
```



<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/FtnGQ510FKs"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



## 输入

无



## 输出

- CallbackId：任务ID
- CallbackUrl：回调地址
- TriggerData：接收到的post数据

```
{
    "CallbackId": "202435253cf81b3f15a1de22b3a0586f",
    "CallbackUrl": "http://localhost/v1/webhook/callback/202435253cf81b3f15a1de22b3a0586f",
    "TriggerData": {
        "name": "hello world"
    }
}
```

