## 事件网关

选择路径最短（先执行完）的分支执行，并取消其他分支。例如下面事件网关下的三个分支：延时20秒、审批和回调接口调用（生产回调接口供第三方系统调用）。只要任意一个执行结束，则另外两个就会被取消执行。

<img src="./img/event_gateway.png" alt="image-20240823125819648" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/KzndyA9TIwI"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



## 入参

无



## 出参

无