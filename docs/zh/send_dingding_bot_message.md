---
title: 发送钉钉机器人消息
description: 介绍通过钉钉机器人发送文本、Markdown消息。
meta:
  - name: keywords
    content: 钉钉机器人消息推送, 钉钉开发, 钉钉机器人通知, 钉钉机器人开发, 钉钉机器人API, 钉钉机器人webhook, Golang钉钉机器人, Python钉钉机器人, 低代码, AI工作流, 流程引擎
---

## 发送钉钉机器人消息

通过钉钉机器人发送文本、Markdown消息。

<img src="./img/send_dingding_bot_msg_menu.png" alt="send_dingding_bot_msg_menu" title="发送钉钉消息按钮" style="zoom:50%;" />



## 入参

<img src="./img/send_dingding_bot_msg_input.png" alt="send_dingding_bot_msg_input" title="发送钉钉消息配置" style="zoom:50%;" />

### 凭据

需要先在【凭据管理】创建。

首先需要到钉钉客户端软件创建好自定义机器人，详细参考： [创建自定义机器人](https://open.dingtalk.com/document/orgapp/custom-bot-creation-and-installation) 

<img src="./img/dingding_bot_cred.png" alt="dingding_bot_cred" title="钉钉凭据选择" style="zoom:50%;" />





### 提醒

<img src="./img/send_feishu_bot_msg_mentioned_input.png" alt="send_feishu_bot_msg_mentioned_input" title="钉钉消息提醒" style="zoom:50%;" />



### 消息类型

目前支持如下几种类型：

- Text
- Markdown

选择不同的消息类型，需要输入的内容也不一样，例如Text类型就会关联文本输入框。Markdown类型支持的格式参考官方文档：https://open.dingtalk.com/document/orgapp/custom-bot-send-message-type



### 内容

消息内容





## 出参

如果发送成功，code会返回0。

```json
[
  {
    "errcode": 0,
    "errmsg": "ok",
    "messageId": ""
  }
]
```

