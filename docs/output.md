---
title: Set Workflow Output
description: By integrating with synchronous APIs, you can configure the workflow's output to serve as the interface output for synchronous APIs.
meta:
  - name: keywords
    content: Synchronous API Development, Workflow Output, Configure API Output, Low-code, AI Workflow, Process Engine
---

## Set Workflow Output

Used together with the **Synchronous API**, this allows setting the output result of the synchronous API, which is also the output of the entire workflow. As shown in the example, a JSON output is set. When the synchronous API is called and a result is requested, the configured JSON output will be returned as the API output result.

```json
>> curl http://localhost/v1/api/iolinker/test/index
>> {"code":0,"msg":"ok"}
```



<img src="./img/output.png" alt="image-20241013093118162" style="zoom:67%;" />



## Input

- **Workflow Output**

  Set the output result of the current workflow, which is also the return result of the synchronous API.
  
  

## Output

Whatever is set, will be output as the result.
