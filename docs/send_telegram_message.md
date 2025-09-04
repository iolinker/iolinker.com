---
title: Send Telegram Message
description: Send text, Markdown, images, files, and GIFs through Telegram bots.
meta:
  - name: keywords
    content: Telegram Bot Message Push, Telegram Development, Telegram Bot Notification, Telegram Bot Webhook, Telegram Bot API, Telegram Bot Development, Golang Telegram Bot, Python Telegram Bot, Low-code, AI Workflow, Process Engine
---

## Send Telegram Message

Supports sending messages in various formats, including text, images, files, and GIFs.

<img src="./img/send-telegram-msg-menu.png" alt="image-20241013162338558" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/FzeWsT5-ox4"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## Input

<img src="./img/send-telegram-msg-input-parameter.png" alt="image-20241013162426835" style="zoom:50%;" />

### Credential

You need to first create the necessary credentials in **Credential**.



### ChatId

The recipient of the message should be specified by their Telegram ID. To find your own Chat ID, you can use the following Telegram bot:

Bot Address：[@userinfobot](https://telegram.me/userinfobot)

<img src="./zh/img/send-telegram-msg-get-chatid.png" alt="image-20240921100823129" style="zoom: 33%;" />



### Message Type

Currently, the following types are supported:

- Text
- Image
- File
- Video
- Audio
- Gif

Selecting different message types requires different input content. For example, the Text type will be associated with a text input box.



### Parse Mode

Currently, the following types are supported:

- Html
- Markdown



### Wait For Reply

Wait until the message is received before continuing to execute.

- Timeout

  Set the timeout for waiting for a reply message

- Timeout Reply

  Set the prompt message sent when the wait timeout



## Output

If the send is successful, the result will display "ok."

```json
{
    "isTimeout": true,
    "reply": "",
    "result": "ok"
}
```

