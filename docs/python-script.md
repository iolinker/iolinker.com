## Indroduction
Execute python (**python 2.7**)  code.

## Parameter
> Code

Lua script.Note that the result is returned at the end.

> Param Type

We support  two ways to pass python parameters.

- By command line

  If the paramters data is not too long, you can use this ways. You can use sys.argv to read the parameters directly.

<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314175136714.png" alt="image-20210314175136714" style="zoom:33%;" /><img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314175204713.png" alt="image-20210314175204713" style="zoom:33%;" />

  

- By file

  If the parameters data is very long, it is better to use this ways. You can use sys.argv to read the parameters file list, and then you can get the parameters data from the parameters file.


<img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314175425842.png" alt="image-20210314175425842" style="zoom:33%;" /><img src="https://public-pic-1251784084.cos.ap-guangzhou.myqcloud.com/image-20210314175445435.png" alt="image-20210314175445435" style="zoom:33%;" />

> Params

The receiving parameter variable of the lua script, you can use **param** variable in the lua script.

> Timeout

The maximum execution time of python code.





