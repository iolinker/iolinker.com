---
title: Callback
description: The callback mechanism allows workflows to pause and wait for external services to invoke the generated callback interface, which then triggers the workflow to resume execution.
meta:
  - name: keywords
    content: Webhook, Workflow, Callback Endpoint, Callback Interface, Callback, Low-code, AI Workflow, Process Engine
---

## Callback 

The **Callback** application generates a unique URL address. The application will wait for the interface to be called before continuing execution; otherwise, it remains in a sleep state.

This callback address can accept parameters via POST and display the output in the TriggerData.

```
>> curl -d '{"name":"hello world"}' http://localhost/v1/webhook/callback/2024413f5fb5f5514e521bea4a578050
>> {"response":{}}
```

<img src="./img/callback.png" alt="image-20241007222842991" style="zoom:50%;" />



If a duplicate submission occurs, an error will be prompted, ensuring that each callback interface can only be called once.

```
>> curl -d '{"name":"hello world"}' http://localhost/v1/webhook/callback/2024413f5fb5f5514e521bea4a578050
>> {"response":{"error":{"code":"requestError.repeatedOperation","message":"requestError.repeatedOperation"}}}
```


<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/FtnGQ510FKs"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>


## Input

None



## Output

- CallbackId：Task ID
- CallbackUrl：Callback Address
- TriggerData：The received POST data

```json
{
    "CallbackId": "2024413f5fb5f5514e521bea4a578050",
    "CallbackUrl": "http://localhost/v1/webhook/callback/2024413f5fb5f5514e521bea4a578050",
    "TriggerData": {
        "name": "hello world"
    }
}
```

