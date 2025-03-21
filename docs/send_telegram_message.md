## Send Telegram Message

Supports sending messages in various formats, including text, images, files, and GIFs.

<img src="./img/send-telegram-msg-menu.png" alt="image-20241013162338558" style="zoom:50%;" />



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



### Inline Keyboard

If you need to send a message with button types, you can add buttons here. The created buttons can also be linked to subsequent branch processes, as shown in the figure below.

<img src="./img/send-telegram-msg-inline-keyboard.png" alt="image-20241013162900166" style="zoom:50%;" />



## Output

If the send is successful, the result will display "ok."

```json
{
    "result": "ok"
}
```

