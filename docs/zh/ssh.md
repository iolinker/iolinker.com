## SSH远程执行

SSH远程登录机器，并执行Shell命令。

<img src="./img/ssh.png" alt="image-20240918171924749" style="zoom: 50%;" />

## 入参

<img src="./img/ssh_input_parameter.png" alt="image-20240918172108219" style="zoom: 50%;" />

### 凭据

可在【凭据管理】里创建SSH凭据类型。需要配置如下几个选项：

- 主机。远程IP主机地址。
- 端口。SSH远程主机端口，默认22。
- 用户：登录账号。
- 密码：登录密码。

<img src="./img/ssh-input-parameter-credential.png" alt="image-20240918172405117" style="zoom:50%;" />



### 命令行

远程到目标主机上执行的shell命令。例如：

```shell
ps -ef
```



## 出参

shell命令输出的字符串。



