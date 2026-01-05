---
title: 钉钉机器人触发器
description: 如何通过可视化编排的方式，实现在钉钉机器人上实现指令触发功能，输入指令后会触发工作流执行。
meta:
  - name: keywords
    content: 钉钉机器人开发, 钉钉 API调用, Python 钉钉, Golang 钉钉, 钉钉机器人 Github, 钉钉机器人, 低代码, AI工作流, 流程引擎
---

## 飞书机器人触发器

通过可视化编排的方式，实现在钉钉机器人上实现指令触发功能，输入指令后会触发工作流执行，从而实现指令功能交互，即使不会Python开发也可以快速开发实现一个指令机器人。

<img src="./img/dingtalk-trigger-menu.png" alt="image-20260104225935249" style="zoom:50%;" />



## 入参

<img src="./img/dingtalk-trigger-input-param.png" alt="image-20260104230140408" style="zoom:50%;" />



### 创建钉钉应用凭据

#### Client ID和Client Secret

点击【凭据管理】菜单，点击【添加凭据】按钮，下拉选择【钉钉应用】类型。

<img src="./img/dingtalk-app-credential.png" alt="image-20260104230319250" style="zoom:50%;" />

然后打开访问[钉钉开发者平台](https://open.dingtalk.com/)，进入【开发者后台】点击【创建应用】。

<img src="./img/dingtalk-developer-create-app.png" alt="image-20260104230703781" style="zoom:50%;" />

创建后会进入应用详情页面，点击【凭证与基础信息】可以看到系统分配的Client ID和Client Secret，复制到IOLinker平台保存。

<img src="./img/create-dingtalk-app-baseinfo.png" alt="image-20260104230752964" style="zoom:50%;" />

接下来，我们需要给应用添加机器人能力。

路径：【应用能力】下的【添加应用能力】，选择机器人（后续我们会通过机器人聊天窗口跟钉钉应用进行交互）。

<img src="./img/dingtalk-add-bot.png" alt="image-20260104231041446" style="zoom:50%;" />



<img src="./img/create-dingtalk-app-bot-1.png" alt="image-20260104231245677" style="zoom:50%;" />

消息接受模式，选择【Stream模式】然后保存。这种方式就不需要暴露公网地址，通过拉数据的方式获取机器人的回调消息。

<img src="./img/create-dingtalk-app-bot-2.png" alt="image-20260104231434324" style="zoom:50%;" />

最后，点击【应用发布】下的【版本管理与发布】，设置好版本号和描述后，点击【发布】按钮即可。

<img src="./img/publish-dingtalk-app.png" alt="image-20260104231714154" style="zoom:50%;" />

前面创建好钉钉应用的凭据后，就可以在凭据处下拉选择。

<img src="./img/select-dingtalk-app-cred.png" alt="image-20260104232049185" style="zoom:50%;" />

### 消息类型

消息类型目前仅支持文本类型。








### 触发范围

<img src="./img/dingtalk-app-scope.png" alt="image-20260104232140294" style="zoom:50%;" />

- 任意输入触发

  这种模式，IOLinker会对用户所有的文本输入进行响应，触发工作流执行。

- 命令输入触发

  这里可以设置指定方式触发，例如：`/nmap -h 127.0.0.1`。指令方式支持解析输入的参数。

  <img src="./img/dingtalk-app-scope-command.png" alt="image-20260104232409136" style="zoom:50%;" />

  >  命令参数

  可以设定命令及其接受的参数，例如下面设置/test命令，如果想要传参，在机器人输入窗口输入如下。系统会自动解析输出参数值。

  当前支持如下几种参数类型：

  - Boolean
  - Integer
  - Float
  - String

  ```
  /nmap -h 1.1.1.1
  ```

  应用输出如下：

  ```json
  {
      "cmdParameters": {
          "h": "1.1.1.1"
      },
      "command": "/nmap -h 1.1.1.1",
      "from": {
          "chatType": "private",
          "id": "34412xx",
          "username": "tester"
      },
      "origin": ""
  }
  ```





### 调试数据

调试数据是模拟应用在运行时输出的结果，方便用户在设计工作流时调试。



## 出参

```json
{
    "cmdParameters": {
        "h": "1.1.1.1",
        "p": 22
    },
    "command": "/test -h 1.1.1.1 -p 22",
    "from": {
        "chatType": "private",
        "id": "34412xx",
        "username": "tester"
    },
    "origin": ""
}
```

- cmdParameters

  解析输出用户命令传参的各个参数值。

- command

  用户输入的完整命令

- from

  - chatType：private表示单聊消息、group表示群聊消息
  - id：表示发送该消息的用户Telegram ID
  - username：表示发送该消息的用户名称



## 如何打开创建的应用

前面创建好的应用，因为是绑定了机器人的能力。所以我们需要在一个聊天群里面，通过添加机器人的方式打开这个应用。

打开一个聊天群，点击右上角的群设置按钮：

<img src="./img/open-dingtalk-chat-setting.png" alt="image-20260104232910141" style="zoom:50%;" />

下拉到【群管理】，点击机器人，然后会显示【添加机器人】按钮，点击就可以查看到我们创建的应用（机器人）。

<img src="./img/open-dingtalk-bot-mng.png" alt="image-20260104233001521" style="zoom: 33%;" /><img src="/Users/shuwoom/Library/Application Support/typora-user-images/image-20260104233119394.png" alt="image-20260104233119394" style="zoom: 33%;" />

打开后，可以看到【企业 机器人】栏目，这里就可以看到我们创建的应用关联的机器人，点击【添加】并【完成】。

<img src="./img/search-dingtalk-bot-1.png" alt="image-20260104233240706" style="zoom:50%;" />

然后点击机器人的头像，点击【发消息】我们就可以跟应用（机器人）进行单聊发消息。

<img src="./img/search-dingtalk-bot-2.png" alt="image-20260104233347574" style="zoom:50%;" />

由于我们创建凭据时，启用了内置的指令，这里我们直接输入`/help`，就可以看到系统自带的指令。

注意：这里系统自带的几个指令不会触发工作流执行，只是用于管理查询指令用途。

<img src="./img/builtin-dingtalk-cmd.png" alt="image-20260104234140677" style="zoom:50%;" />



由于我们选择的触发范围是任意输入，这里我们随便输入除了系统内置指令以外的文本，都会触发工作流执行：

<img src="./img/dingtalk-app-trigger-execution-1.png" alt="image-20260104234356834" style="zoom:50%;" />

点击可以查看到具体回调的消息详情：

<img src="./img/dingtalk-app-trigger-execution-2.png" alt="image-20260104234449732" style="zoom:50%;" />
