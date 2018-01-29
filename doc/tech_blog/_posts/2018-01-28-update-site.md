---
layout: post
title: 记录网站重构为nginx
date: 2018-01-28 +0900
tags: nginx,
category: tech
---


近几天打算续写java的同期。因为做了一个cancel的多线程的东西，有了些许心得故续写。

最早写tech博客是为了炫耀技巧。但是每次执笔的时候都发现，自己真是太菜了= = 没啥子好写的。每次都查着资料，查着查着就跑去打游戏去了<span>（喂！ヽ(●-`Д´-)ノ）</span>

但是现在发现，自己好菜，记不住自己曾经写过的东西= =。。。

当然，我也知道这是人之常情，twitter上有个话题，就是各大出名library的作者，各种讨论自己花样记不住自己写的API的事情。编程中也有一个说法，叫做programmer永远记不住自己一个月以前写过的东西。

由于。。。自己真的记不太住自己之前是如何用apache2来构建的网站（注释基本没有留。。。）所以这次只是简单记录如何简单的构筑nginx网站。
而且以后，**也专心的记录自己写过的东西，防止忘了！**

1.首先，由于apache2正在运行，要先关闭掉apache2。

不然，安装nginx之后，会自动开始运行nginx的service。之后会出错，导致你无法正确安装程序。但是可以删除程序！
可以先去验证是不是安装包出错了，再可以验证是不是sudo权限被占用。都不是的话，那就是apache的锅，（当然也可能是其他问题）关掉apache的service，重启nginx。就可以解决。

2.nginx的configure

apache的历史包袱很重，没有对比就没有伤害，nginx的conf文件，完全是类JSON形式的，只不过区别是尾巴一定要加上“；”。估计是为了方便complier处理以及为了可以缩写成一行吧。
JSON形式真的太好写了，而且非常易懂。

举个例子。

```
http{
  server{
    listen 80;
    server_name candy-water.com;
    location / {
      root /abc/def;
    }
    error_page 406 /404.html
  }

  if($scheme ！= "https"){
    return 301 https://$host$request_uri;
  } # 这里是cerbot帮忙写的
}
```

基本上已经不需要解释了= =

本来多个virtual domain，我还打算找网上的资料。。。但是这一看就懂了。。。
我就多写了几个server，把server_name换了一下。。。。就成了。
不像apache，要写好多个小文件0.0  当然不写小文件应该也是可以做到的。

后来查了一下资料。location所代表的意思是，类似于java servlet里面的url pattern，可以把url读取，然后转换为｛｝里面包裹的地址返回。
下次可以做个fast cgi试试。
我有尝试把http2放进去，不过我发现即便没有放，firefox会自动发送http2的get request（通过检查f12的network）。
所以事实上不放也是可以的。下次再仔细研究一下。
基本构建就是如此了，



参考资料：
+ [NginxでHTTP2を有効にする](https://qiita.com/Aruneko/items/8c11f9e45a33457c3c1f)
+ [Nginx Beginner’s Guide](https://nginx.org/en/docs/beginners_guide.html)
+ [cert-bot-nginx](https://certbot.eff.org/#ubuntutyakkety-nginx)
+ [nginx コマンド超シンプル早見表](https://qiita.com/katzueno/items/44e02db2f1bfa0de5860)
+ [Start / Stop and Restart Apache 2 Web Server Command](https://www.cyberciti.biz/faq/star-stop-restart-apache2-webserver/)
+ [nginxのrewriteを使ったリダイレクト](https://www.skyarch.net/blog/?p=7088)
+ [Nginxのエラーページをカスタマイズする方法](https://qiita.com/ryounagaoka/items/fd641e39a196b47db875)
+ [nginx連載5回目: nginxの設定、その3 - locationディレクティブ](https://heartbeats.jp/hbblog/2012/04/nginx05.html)
+ [How To Set Up Nginx Server Blocks (Virtual Hosts) on Ubuntu 14.04 LTS ](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts)
