## SSH Remote Execution

Allows remote login to a machine via SSH and execution of shell commands.

<img src="./img/ssh_menu.png" alt="image-20241013094509272" style="zoom:50%;" />

## Input

<img src="./img/ssh_input.png" alt="image-20241013094615223" style="zoom:50%;" />

- ### Credentials

  You can create SSH credential types in the "Credential Management" section. The following options need to be configured:

  - **Host**: The remote IP address.
  - **Port**: The SSH remote host port, default is 22.
  - **User**: The login username.
  - **Password**: The login password.

<img src="./img/ssh_cred.png" alt="image-20241013094727963" style="zoom:50%;" />



### Command Line

The shell command to be executed on the target remote host. For example:

```shell
ps -ef
```



## Output

The string output from the shell command.



