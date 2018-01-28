---
layout: post
title: 关于FastCGI
date: 2017-07-14 +0900
category: tech

---


# 关于FastCGI

<cw-data>2017/July/14</cw-data>

本来关于搭设server只想说随便搭一搭就过去的,但是看起来这里的水也并不是很浅!
作为立志成为full stack engineer的我,只好默默的研究一下了!笑笑

参考资料:
[Apache, FastCGI and Python, by Ferry Boender version 1.0, Feb 12, 2009](https://www.electricmonk.nl/docs/apache_fastcgi_python/apache_fastcgi_python.html)

当然,我不会说因为我在WSL的apache2.4的cgi的环境下使用python,在chrome可以用,在firefox环境下脚本的源文件会被下载而无法使用!(更改为mod_python后,现在可以用了)
[参考这里的设定](https://superuser.com/questions/174071/apache-serves-py-as-downloadable-file-instead-of-executing-it)

```
<Directory /<path> >
  Options ExecCGI
  AddHandler mod_python .py
  PythonHandler mod_python.cgihandler
  PythonDebug On
  AddHandler cgi-script .pl
</Directory>
```

[1](https://www.electricmonk.nl/docs/apache_fastcgi_python/apache_fastcgi_python.html)
