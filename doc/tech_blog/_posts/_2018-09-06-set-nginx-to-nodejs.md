---
layout: post
title: 设置从nginx到nodejs的proxy
date: 2018-09-06 +0900
tags: nodejs, nginx
category: tech
---

## 下载win版的nginx

为了方便测试，先下载一个nginx的windows版本。  
它的主页[4]上有写到：
> high performance and scalability should not be expected.  
> Due to this and some other known issues version of nginx for Windows is considered to be a beta version.  
所以这个对我来说也是一个方便便捷的测试版本。毕竟用cgi的vim来处理散落在各处的文件确实有点累。  

这个下载之后，双击点```nginx.exe```打开也可以,用命令行```start nginx.exe```也是可以的。  
打开之后关闭是一个问题，用```nginx.exe -s stop```似乎有时候会失败（？）不过后来又实验了几次再没有失败过了。

不过看文档倒是找到一个可以查看是否在运行的命令，  
```tasklist /fi "imagename eq nginx.exe"```  
这个命令可以找到所有的nginx的PID。如果刚才的指令没有关掉，就利用PID就可以在任务管理器把它们一个一个都关掉了。(免得找不全)

## 

[1][How to run node.js server with Nginx](https://www.digitalocean.com/community/questions/how-to-run-node-js-server-with-nginx)  
[2][Node.js + Nginx - What now?](https://stackoverflow.com/questions/5009324/node-js-nginx-what-now)  
[3][Configure Nginx as a web server and reverse proxy for Nodejs application on AWS Ubuntu 16.04 server](https://medium.com/@utkarsh_verma/configure-nginx-as-a-web-server-and-reverse-proxy-for-nodejs-application-on-aws-ubuntu-16-04-server-872922e21d38)  
[4][nginx for Windows](https://nginx.org/en/docs/windows.html)

