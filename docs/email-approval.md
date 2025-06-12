## Indroduction
**【Email Approval】**app can realize multi-person email approval. 

<iframe 
    width="1280" 
    height="720" 
    src="https://www.youtube.com/embed/wq_7jCd1uFo"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

The approvers will receive the email content like this.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314165824781.png" alt="image-20210314165824781" style="zoom:50%;" />

When approver make a decision, such as aggre or disagree, he or she will get the corresponding operation introduction, like this.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314170020251.png" alt="image-20210314170020251" style="zoom:50%;" />

Besides, you can see the approval progress:

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314170424067.png" alt="image-20210314170424067" style="zoom:50%;" />

Finally, the **Email Approval App** will choose three(true/false/timeout) branches according to the results of the approval, and continue to execute the subsequent.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314170724870.png" alt="image-20210314170724870" style="zoom:50%;" />



## Parameter

### SMTP credential

![image-20210314154228246](https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314154228246.png)

You can use outlook,gmail smtp settings. For example, Gmail SMTP setup settings:

- **SMTP username:** Your Gmail address
- **SMTP password:** Application specific password required ([Sign in with App Passwords](https://support.google.com/mail/answer/185833?hl=en))

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314163950647.png" alt="image-20210314163950647" style="zoom:50%;" />

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314165703263.png" alt="image-20210314165703263" style="zoom:50%;" />

- **SMTP server address:** smtp.gmail.com
- **Gmail SMTP port (TLS):** 587
- **SMTP port (SSL):** 465
- **SMTP TLS/SSL required:** yes



### Email Approval App

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314164451263.png" alt="image-20210314164451263" style="zoom:50%;" />

> Sender Cred

It is required to make smtp(gmail smtp, outlook smtp, 163 smtp...) credential, which is use to send email.

> Title

Email subject

> Text Content

Email Content

> Members

Email recipients, who have permission to approve.

> Followers

Email followers, who have no permission to approve.

> Attachments

Email attachments, which referrred from local file.

> Approve Type

There are 3 modes:

- Anyone aggres then return true; Anyone disaggres then return false
- Everyone aggres then return true; Anyone disaggres then return false
- Anyone aggres then return true; Everyone disaggres then return false

> True/False Label

The name shown in the email content.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314165824781.png" alt="image-20210314165824781" style="zoom:50%;" />

> Timeout

Maximum waiting time for **Email Approval App** to execute. When this time is exceeded, it will choose the middle timeout branch.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314170724870.png" alt="image-20210314170724870" style="zoom:50%;" />