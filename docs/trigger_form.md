## Form Trigger

The workflow execution is triggered by submitting the form.

<img src="./img/form-trigger-menu.png" alt="image-20250708091142522" style="zoom:50%;" />

### Steps

#### 1. Create Form

<img src="./img/create-form-menu.png" alt="image-20250708091116182" style="zoom:50%;" />

#### 2. Design And Save Form

<img src="./img/save-form.png" alt="image-20250708091218025" style="zoom:50%;" />

The saved form can be viewed in the [Form] menu option on the left:

<img src="./img/form_list.png" alt="image-20250507202549564" style="zoom:50%;" />

#### 3. Create Workflow And Connect Form

Use [Form Trigger] and select the previously created form in the form drop-down list. You will see that the API option will generate a form submission address. This address is uniquely bound to the workflow. You can submit the form by opening the address to trigger the workflow execution.

<img src="./img/create-form-workflow.png" alt="image-20250708091749925" style="zoom:50%;" />

#### 4. Submit Form

You can see the form submission address in [Workflow] and click it to enter the form submission address.

<img src="./img/form-workflow-list.png" alt="image-20250708091845111" style="zoom:50%;" />

点击【Submit】提交按钮，后就可以在执行记录看到一条工作流执行记录。

<img src="./img/form-submit-url.png" alt="image-20250708091929115" style="zoom:50%;" />

#### 5. View form submission records

Form submission record (workflow execution record):

<img src="./img/form_execution_list.png" alt="image-20250708092027205" style="zoom:50%;" />

Click View Details to see the data submitted by the form:

<img src="./img/form-execution-detail.png" alt="image-20250708092128528" style="zoom:50%;" />



## Input

### Form

Here you can drop down and select the form you want to associate.

### Members

Set the members who are allowed to fill in the form. If not set, all members in the project space can submit the form.

<img src="./img/form_trigger_input.png" alt="image-20250708092212001" style="zoom:50%;" />

## Output

As shown below, the output will show the data submitted by the submitter at the time, as well as the values of each option in the form (under submitData).

```
[
  {
    "createAt": "2025-05-07 20:31:29",
    "members": "",
    "name": "form demo",
    "submitList": [
      {
        "opId": 43,
        "status": 1,
        "submitAt": "2025-05-07 20:31:29",
        "submitData": {
          "mobile": "15111111111"
        },
        "user": "iolinker"
      }
    ]
  }
]
```

<img src="./img/form-execution-detail.png" alt="image-20250708092128528" style="zoom:50%;" />