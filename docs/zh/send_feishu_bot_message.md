---
title: 发送飞书机器人消息
description: 介绍通过飞书机器人发送文本消息。
meta:
  - name: keywords
    content: 飞书机器人消息推送, 飞书开发, 飞书机器人通知, 飞书机器人webhook, 飞书机器人API, 飞书机器人开发, Golang飞书机器人, Python飞书机器人, 低代码, AI工作流, 流程引擎
---

## 发送飞书机器人消息

通过飞书机器人发送文本消息。

<img src="./img/send_feishu_bot_msg_menu.png" alt="send_feishu_bot_msg_menu" title="发送飞书消息按钮" style="zoom:50%;" />



## 入参

<img src="./img/send_feishu_bot_msg_input.png" alt="send_feishu_bot_msg_input" title="发送飞书消息配置" style="zoom:50%;" />

### 凭据

需要先在【凭据管理】创建。

首先需要到飞书客户端软件创建好自定义机器人，详细参考： [自定义机器人使用指南](https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot) 

<img src="./img/feishu_bot_cred.png" alt="feishu_bot_cred" title="飞书webhook凭据" style="zoom:50%;" />



### 提醒

<img src="./img/send_feishu_bot_msg_mentioned_input.png" alt="send_feishu_bot_msg_mentioned_input" title="飞书消息提醒" style="zoom:50%;" />



### 消息类型

目前支持如下几种类型：

- Text

选择不同的消息类型，需要输入的内容也不一样，例如Text类型就会关联文本输入框。



### 内容

消息内容





## 出参

如果发送成功，code会返回0。

```json
[
  {
    "StatusCode": 0,
    "StatusMessage": "success",
    "code": 0,
    "data": {},
    "msg": "success"
  }
]
```

