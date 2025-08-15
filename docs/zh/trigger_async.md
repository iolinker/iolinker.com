---
title: 异步API触发器
description: 如何创建一个异步执行任务的API，通过调用该API触发工作流执行。
meta:
  - name: keywords
    content: 异步API, 异步任务, 异步运行, 耗时任务后台运行, 异步任务开发, Python异步执行函数, Python异步执行, Python异步编程, 低代码, AI工作流, 流程引擎
---

## 异步API触发器

生成一个HTTP服务的API接口，调用该接口会以异步方式触发工作流运行，适合处理耗时任务，不等待工作流运行结束，直接返回执行实例的ID。

<img src="./img/trigger_async_api.png" alt="image-20240921173600619" style="zoom:50%;" />

创建的工作流可以在【流程管理】下的【工作流列表】或【API列表】找到。

注意：API只有启用后才能正常使用，否则会提示报错接口未启用。

<img src="./img/api-list.png" alt="image-20250708085935766" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/vYAK0yagqmo"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## 入参

<img src="./img/async_api_input_parameter.png" alt="image-20240813190151862" style="zoom:50%;" />



### 鉴权认证

目前支持一下三种鉴权方式：

<img src="./img/sync_api_input_login_verification.png" alt="image-20240813093449198" style="zoom:50%;" />

- 没有鉴权

  所有请求都不需要做认证鉴权。

  例如：

  ```http
  curl -d '{}' http://8.218.xxx.xx/v1/api/botman/test/async
  {"response":{"uid":"2023331691312889545691136"}}
  ```

- Token令牌鉴权

  在请求API时，需要在Header请求头带上Token令牌认证。

  例如：

  ```http
  // 错误请求方式
  curl http://8.218.xxx.xx/v1/api/botman/test/async
  {"response":{"error":{"code":"requestError.invalidParams","message":"Token is required"}}}
  ```

  ```http
  // 正确请求方式
  curl -H'token:123456' http://8.218.xxx.xx/v1/api/admin/test/async
  {"response":{"uid":"213995413340041216"}}
  ```


- 账号密码

  在请求API时，需要在Header请求头带上账号、密码认证。

  例如：

  ```http
  // 错误请求方式
  curl http://8.218.xxx.xx/v1/api/botman/test/async
  {"response":{"error":{"code":"requestError.invalidParams","message":"User/Password is required"}}}
  ```

  ```http
  // 正确请求方式
  curl -H'user:botman' -H'password:123456' http://8.218.xxx.xx/v1/api/botman/test/async
  {"response":{"uid":"213995413340041216"}}
  ```

  

### API模块

API模块主要用来对接口进行分类，例如可以按照产品分不同的模块。



### API方法

模块下的接口名称。



### API方法

目前支持GET和POST两种方法。



### 调试数据

模拟用户请求接口是传递的POST参数，方便用户调试接口。



## 输出

- uid表示执行记录ID。

```json
{
    "response": {
        "uid": "213996969363910656"
    }
}
```

