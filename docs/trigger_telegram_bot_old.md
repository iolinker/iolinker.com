



## Indroduction

The telegram bot trigger supports setting keywords to respond.

![image-20230819085314753](./img/bot-9.png)



## How To Use

### 1. Create telegram credential [Access Token]

If the **[Default Cred]** switch is enabled, then there is no need to manually select the credentials when editing the telegram bot app, the system will automatically select the default credentials.

**Remark**: how to create telegram bot and get access token , please refer to [How to create telegram bot and get token](how_to_create_telegram_bot_and_get_token.md)

![image-20230818233226553](./img/bot-1.png)

If enable the **[Default Cred]** above, then no need manually select.

![image-20230818234522834](./img/bot-3.png)



### 2. Configure [Message Type]

<img src="./img/bot-4.png" alt="image-20230818234828100" style="zoom: 50%;" />

- Text 

  Set specific keywords to respond, such as **/start** or **help**, etc.

  <img src="./img/bot-5.png" alt="image-20230818235321845" style="zoom:33%;" />

- Event
  - Enter Group Event
  - Exit Group Event

<img src="./img/bot-6.png" alt="image-20230818235515298" style="zoom:50%;" />

### 3. Configure **[Monitor Users]**

If it is not set by default, any user's message to the telegram robot will trigger a response as long as it hits the rule.



If you only want the robot's command response to be used only by yourself, you can select your own account from the drop-down list.

Remark: Please remember to associate your userid and admin account on telegram: [How to get telegram userid and associate it to admin account](how_to_get_telegram_userid_by_botman.md)

<img src="./img/bot-13.png" alt="image-20230819094246908" style="zoom:50%;" />







### 4. Configure [Keyword]

- Exact Match

  Only when the message sent by the user exactly equal to the keyword, the workflow will be triggered to response.

- Fuzzy Match

  As long as the content of the message sent by the user contains the set keywords,the workflow will be triggered to response.

- Regex Match

  You can match the message sent by the user by configure a regular expression, as long as it hits, the workflow will be triggered to response.

<img src="./img/bot-7.png" alt="image-20230819000750728" style="zoom:50%;" />



### 5. Set [Debug Data]

[Debug Data] is used to simulate the parameters passed by user message, which is for easy debugging.



### 6. Demo [Exact Match Text]

#### 6.1 Create telegram bot workflow

This is the telegram bot we created.

![image-20230819085156788](./img/bot-8.png)

#### 6.2 Enable telegram bot workflow

You can enable it in [ChatBot List] or in [Workflow List] page.

![image-20230819085314753](./img/bot-9.png)

#### 6.3 Send message to telegram bot in telegram app



<img src="./img/bot-10.png" alt="image-20230819085507244" style="zoom:33%;" />

#### 6.4 Find the execution detail

You can see the execution in [Execution List], and the message sent by user.

![image-20230819085628273](./img/bot-11.png)

> The user messages that meet the matching rules pulled from the telegram api will be used as the output of the **[Telegram Bot Trigger]** app.

<img src="./img/bot-12.png" alt="image-20230819085800301" style="zoom:50%;" />