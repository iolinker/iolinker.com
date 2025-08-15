---
title: How to run IOLinker
description: Introduction to IOLinker's containerized operation and binary file execution methods, along with an overview of IOLinker's performance.
meta:
  - name: keywords
    content: IOLinker, Docker Containerized Operation, Binary File Execution, High Performance, Raspberry Pi 4B, Synology NAS, Low-code, AI Workflow, Process Engine
---

# Docker

```
docker run --name iolinker -p 80:80 -e Domain=localhost iolinker/iolinker:latest
```



# On Device

The current binary executable file supports direct execution on the following systems:

> Linux amd64
>
> Linux arm(Like Raspberry PI 4B、NAS)
>
> Mac (M1/M2/Intel cpu)



- Step 1 : 

  Enter the [https://iolinker.com](https://iolinker.com) official website and download the corresponding executable file according to your current system.

  <img src="./img/multi-platform.png" alt="image-20250711085353446" style="zoom:50%;" />

- Step 2: 

  Unzip it to the target folder.

  ```
  tar -xvf iolinker-standalone-xxx-xxx.tar.gz
  ```

- Step 3: 

  Run the executable file. By default, port 80 is used. The accessible address is http://localhost. The login account is: iolinker. The default password is: iolinker.com.

  It is recommended to change the password after logging in.

  ```
  ./iolinker
  ```

- Step 4 (Help): 

  If you want to view the command line parameters, you can display them using the following command.

  If you want to deploy for public access, you can specify the public access address using the -d parameter.

  For example, the following command specifies the public access address as: [test.com](test.com).

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
  



# Performance and Requirements

- **High Concurrency**: On a single machine, the QPS of asynchronous API workflows can reach over 5,000, and the QPS of synchronous API workflows can reach over 100.

- **High Capacity**: The Crontab workflow supports over **100,000** concurrent active workflows.

- **Low Resource Consumption**: Low hardware requirements; the system can run on a machine with 1 core and 1GB of memory or more.



Async API Workflow:

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



Sync API Workflow:

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

