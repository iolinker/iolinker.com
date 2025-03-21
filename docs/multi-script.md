## Multi Script Execution

It supports running multiple scripts either concurrently in parallel or sequentially one after another.

<img src="./img/multi-script-menu.png" alt="image-20241013160053565" style="zoom:50%;" />

## Input

<img src="./img/multi-script-execution.png" alt="image-20241013162033333" style="zoom:50%;" />

### Language

> Local Native Virtual Machine

- Python3
- JavaScript
- PHP
- LUA
- SHELL

Note: The local native virtual machine depends on the current machine environment. If the corresponding virtual machine is not available, the script cannot be executed.



### Snippet

Code snippets will be displayed under the corresponding programming language list in **File Management** -> **Code Files**.

<img src="./img/code-snippet.png" alt="image-20241013101443996" style="zoom:50%;" />



### Execution Mode

- Parallel Execution

  The selected scripts run simultaneously, which can improve execution efficiency.

- Sequential Execution

  The selected scripts run one after another, with each script only starting after the previous one has finished.



### Timeout

Set the script execution timeout. If the execution exceeds this time, the system will forcibly terminate the script and output an error message.

```json
{
    "WorkflowId": 0,
    "WorkflowName": "Unknown",
    "ExecutionUid": "227174016812625920",
    "ErrorAppName": "Code Execution",
    "ErrorAppInstId": "oj2ku2mtzs",
    "Error": "execute command timeout",
    "CreateAt": "xxx"
}
```



## Output

Since multiple script executions can be selected, the output structure is in the form of Key-Value pairs as follows:

```
{
    "/botman/snippet/botman/111.py": "ok",
    "/botman/snippet/botman/222.py": "ok222"
}
```



Here, the output from the terminal will be used as the result for this APP. For example:

- **Python3**
  
  You can output using `print`:
  
  ```python
  print('xxx')
  ```

  Note: The `print` method adds a newline by default, which affects the output. To avoid newlines, use:
  
  ```python
  print('xx', end='')
  ```

- **JavaScript**

  You can output using `console.log`:
  
  ```javascript
  console.log('xxx')
  ```

- **PHP**

  You can output using `echo`:
  
  ```php
  <?php
  echo "123";
  ```