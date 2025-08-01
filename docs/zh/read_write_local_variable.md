## 读写本地环境变量

每个工作流在运行时，都可以维护自己的本地变量，用于存储临时的数据。在设计工作流时，在菜单栏上有【本地变量】菜单，点击进去后可以添加该工作流可以读写的本地变量，目前支持字符串和数字两类。

每个本地变量都有默认值，以及在运行时的值。

**注意：添加本地变量前需要保存工作流先，因为本地变量需要绑定具体的工作流。**

<img src="./img/read_write_local_variable.png" alt="image-20240826094811077" style="zoom:50%;" />

在设置了前面的本地变量后，就可以通过【读写本地变量】的应用对变量进行读和写操作。

<img src="./img/read_write_local_variable_app.png" alt="image-20240826094940428" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/6B67QKpXXGE"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



## 输入

### 操作

支持读和写两种操作。



### Key

读写的变量对象，这里是前面创建的本地环境变量列表。



## 输出

输出具体Key值。