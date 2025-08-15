---
title: Error Trigger
description: How to implement exception removal handling, capture exceptions, and configure exception responses.
meta:
  - name: keywords
    content: Exception Handling, Error Handling, Exception Capture, Error Capture, Exception Handling Mechanism, Global Exception, Error Response, Exception Response, Low-code, AI Workflow, Process Engine
---

## Error Trigger

<img src="./img/error_trigger_menu.png" alt="image-20250513192811512" style="zoom:50%;" />

Globally capture exceptions or errors thrown during the workflow execution. As shown in the figure below, when the error trigger catches an exception during the workflow execution, it can initiate a new exception handling branch to continue the process. Here, the business can independently respond to the captured exception information, such as sending alerts, etc.

<img src="./img/error_trigger_workflow.png" alt="image-20250513195338162" style="zoom:50%;" />



<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/qaK4fCVEfmg"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## Input

None



## Output

The output information will indicate which node in the workflow, at what time, and what kind of error occurred.

<img src="./img/error_trigger_output.png" alt="image-20250513195439010" style="zoom:50%;" />

```json
[
  {
    "CreateAt": "2025-05-13T19:53:20.390535+08:00",
    "Error": "{\"Name\":\"test\",\"Content\":\"throw error\"}",
    "ErrorAppInstId": "v3g1sjx7pk",
    "ErrorAppName": "Throw Exception",
    "ExecutionUid": "313004680261140480",
    "WorkflowId": 18,
    "WorkflowName": "Error handler"
  }
]
```

