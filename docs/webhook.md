## Indroduction
You can use **webhook** app to generate url to call, which will trigger the corresponding workflow to execute. 

Besides, when you call the webhook url, you can pass parameters data, and these parameters will be used as the output result of the webhook app in the workflow. So other app in the workflow can reference these json parameters to do other things.


<iframe 
    width="1280" 
    height="720" 
    src="https://www.youtube.com/embed/4KZoe2BvDnY"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

## Parameter
The **【Debug Data】** parameter is mainly to facilitate debugging when designing the workflow. For example, you can simulate the json parameters to be passed in the webhook request.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210313182231666.png" alt="image-20210313182231666" style="zoom:50%;" />

When you debug the workflow, the **【Debug Data】** will be used as its output, and you can reference it in other app node.

<img src="/Users/shuwoom/Library/Application Support/typora-user-images/image-20210313182111804.png" alt="image-20210313182111804" style="zoom:50%;" />

