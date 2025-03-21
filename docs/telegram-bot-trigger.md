## Indroduction
You can use **telegram bot trigger** app to receive bot message from group(the telegram bot should be set as the **group administrator**) or private user, and you can monitor specific keyword and  users.



## Parameter

### (1) Telegram Bot Token Credential

First, you can use Telegram App or Telegram Client to create your bot with official BotFather bot.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314084933771.png" alt="image-20210314084933771" style="zoom:40%;" />

In **BotFather**, you can use ```/newbot``` command to create you own bot in seconds. After that, you will get you bot link and token.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314085227035.png" alt="image-20210314085227035" style="zoom:33%;" />



![image-20210314085722842](https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314085722842.png)

Back in RobinFlow, you can use the telegram token created before to create **【Telegram Credential】**, which will use in **【Telegram Bot Trigger】**.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314084335126.png" alt="image-20210314084335126" style="zoom:50%;" />

### (2) Telegram Bot Trigger App

> Cred

The telegram token created in credential list, which is related to your own bot.

> Username

If you set the telegram users, you will receive all the message send from them, otherwise you will receive all the message send from group and user.

> And Keyword

You can monitor chat message(from group or private user) with specific keywords, and the workflow execution will only triggered when all these keywords are matched

> Or Keyword

You can monitor chat message(from group or private user) with specific keywords, and as long as one of these keywords matches, it can trigger the workflow execution.

> DebugData

The **【DebugData】** parameter is mainly to facilitate debugging when designing the workflow.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314091020328.png" alt="image-20210314091020328" style="zoom:50%;" />


