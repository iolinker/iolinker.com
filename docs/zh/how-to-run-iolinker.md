
# Docker容器运行

```
docker run --name iolinker -p 80:80 -e Domain=localhost iolinker/iolinker:latest
```



# 二进制文件运行

当前二进制执行文件支持在以下系统上直接运行：

> Linux amd64
>
> Linux arm(例如树莓派4B、群晖NAS)
>
> Mac (M1/M2/Intel cpu)



- 步骤1 : 

  进入 [https://iolinker.com](https://iolinker.com) 官网，根据自己当前系统下载对应的可执行文件。

  <img src="./img/multi-platform.png" alt="image-20250711085448703" style="zoom:50%;" />

- 步骤2: 

  解压到指定的文件夹下。

  ```
  tar -xvf iolinker-standalone-xxx-xxx.tar.gz
  ```

- 步骤三: 

  运行可执行文件，默认使用80端口，可访问地址为http://localhost，登陆的账号：iolinker，默认密码：iolinker.com。

  建议登陆后修改密码。

  ```
  ./iolinker
  ```

- 步骤四(查看帮助): 

  如果想要查看命令行参数，可以通过如下命令显示。

  如果部署在公网访问，可以通过-d参数指定公网访问的地址。
  
  例如下面，表示指定公网访问地址为:[test.com](test.com)。
  
  ```
  ./iolinker -d test.com
  ```
  
  ```
  ❯ ./iolinker -h
  
  
  ██╗ ██████╗ ██╗     ██╗███╗   ██╗██╗  ██╗███████╗██████╗ 
  ██║██╔═══██╗██║     ██║████╗  ██║██║ ██╔╝██╔════╝██╔══██╗
  ██║██║   ██║██║     ██║██╔██╗ ██║█████╔╝ █████╗  ██████╔╝
  ██║██║   ██║██║     ██║██║╚██╗██║██╔═██╗ ██╔══╝  ██╔══██╗
  ██║╚██████╔╝███████╗██║██║ ╚████║██║  ██╗███████╗██║  ██║
  ╚═╝ ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
  
  More documentation is available at https://iolinker.com
  Usage: IOLinker
  Flags:
    -d, --domain  Set visit domain, default is localhost. Usage: ./iolinker -d localhost
    -e, --enable https    Enable https, default is false. Usage: ./iolinker -e true
    -h, --help    help for IOLinker
    -c, --https cert file Set https cert file location. Usage: ./iolinker -c ./sercer.crt
    -k, --https key file  Set https key file location. Usage: ./iolinker -k ./sercer.key
    -p, --listen port     Set server listen port, default is 80. Usage: ./iolinker -p 80
  
  ```





# 性能与要求

- **高并发**：单机上使用异步API工作流QPS可达到5000以上、同步API工作流QPS可达100以上。

- **高容量**：Crontab工作流可支持同时启用的工作流数量达到**10W**以上。
- **低消耗**：硬件要求低，1核1G以上的机器就可以运行。

异步API工作流测试：

```
❯ ab -n 2000 -c 10 http://localhost/v1/api/egb2xeplq1/test/async
This is ApacheBench, Version 2.3 <$Revision: 1913912 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 200 requests
Completed 400 requests
Completed 600 requests
Completed 800 requests
Completed 1000 requests
Completed 1200 requests
Completed 1400 requests
Completed 1600 requests
Completed 1800 requests
Completed 2000 requests
Finished 2000 requests


Server Software:
Server Hostname:        localhost
Server Port:            80

Document Path:          /v1/api/egb2xeplq1/test/async
Document Length:        42 bytes

Concurrency Level:      10
Time taken for tests:   0.308 seconds
Complete requests:      2000
Failed requests:        0
Total transferred:      330000 bytes
HTML transferred:       84000 bytes
Requests per second:    6484.68 [#/sec] (mean)
Time per request:       1.542 [ms] (mean)
Time per request:       0.154 [ms] (mean, across all concurrent requests)
Transfer rate:          1044.90 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     0    1   0.9      1      13
Waiting:        0    1   0.9      1      13
Total:          0    2   0.9      1      14
WARNING: The median and mean for the total time are not within a normal deviation
        These results are probably not that reliable.

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      1
  75%      2
  80%      2
  90%      2
  95%      3
  98%      4
  99%      4
 100%     14 (longest request)
```



同步API工作流测试：

```
❯ ab -n 2000 -c 10 http://localhost/v1/api/egb2xeplq1/test/index
This is ApacheBench, Version 2.3 <$Revision: 1913912 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 200 requests
Completed 400 requests
Completed 600 requests
Completed 800 requests
Completed 1000 requests
Completed 1200 requests
Completed 1400 requests
Completed 1600 requests
Completed 1800 requests
Completed 2000 requests
Finished 2000 requests


Server Software:
Server Hostname:        localhost
Server Port:            80

Document Path:          /v1/api/egb2xeplq1/test/index
Document Length:        21 bytes

Concurrency Level:      10
Time taken for tests:   15.296 seconds
Complete requests:      2000
Failed requests:        0
Total transferred:      288000 bytes
HTML transferred:       42000 bytes
Requests per second:    130.76 [#/sec] (mean)
Time per request:       76.478 [ms] (mean)
Time per request:       7.648 [ms] (mean, across all concurrent requests)
Transfer rate:          18.39 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:     1   76  77.3     43     387
Waiting:        1   76  77.3     43     387
Total:          1   76  77.3     43     387

Percentage of the requests served within a certain time (ms)
  50%     43
  66%    109
  75%    115
  80%    124
  90%    195
  95%    226
  98%    321
  99%    333
 100%    387 (longest request)
```



