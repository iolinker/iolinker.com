## 发送飞书机器人消息

支持发送文本等消息。

<img src="./img/send_feishu_bot_msg_menu.png" alt="image-20250611092255212" style="zoom:50%;" />



## 入参

<img src="./img/send_feishu_bot_msg_input.png" alt="image-20250611092801639" style="zoom:50%;" />

### 凭据

需要先在【凭据管理】创建。

首先需要到飞书客户端软件创建好自定义机器人，详细参考： [自定义机器人使用指南](https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot) 

<img src="./img/feishu_bot_cred.png" alt="image-20250611093722973" style="zoom:50%;" />



### 提醒

<img src="./img/send_feishu_bot_msg_mentioned_input.png" alt="image-20250611092828699" style="zoom:50%;" />



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

