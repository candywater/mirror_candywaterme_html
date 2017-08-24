---
layout: post
title: 记，升级到https的菜鸟旅程
date: 2017-08-20 +0900
tags: rust, os
category: tech
---

起因之一是看到月光博客的[微博](https://weibo.com/1494759712/FizDQd6sQ)，
>据谷歌邮件通知，从2017年10月起，当用户在HTTP网页上的表单中输入文本时，Chrome（版本62）将显示一条“不安全”警告，并在所有无痕模式下的HTTP网页上显示这一警告，即使没有密码也会显示警告，解决方法是：迁移到https。

恰巧同时期看到twitter上有人谈及[let's encrypt](https://letsencrypt.org/)。
本来还打算用aws的一些服务或者找一些别的CA去花钱挂一个证书，但是看到这个好像不错，就从文档读起。

事实上文档写的很简单，大致就是[你要有一个cgi的环境](https://letsencrypt.org/getting-started/)，
然后我们用[certbot](https://certbot.eff.org/)就可以非常简单嗨皮的构建https环境。
很傻瓜。但是事实上如果用apache一类的，也不过是装个mod，然后把证书的path写上去，同样是傻瓜式的构筑，而且是很麻烦的那种傻瓜。
既然这样，倒不如用let's encrypt这种看起来就很赞，而且目标和梦想都很伟大的project -- [要加密整个互联网，啊哈。](https://en.wikipedia.org/wiki/Let%27s_Encrypt#Overview)

文档虽然简单，但是介绍了它的一些特性，比如支持什么样的算法（但是这里我找的不是很清楚，看的不太仔细，只是看到略提一笔）。
还说好像是60天就会一自动更新。而且还提供了譬如不使用sudo的一个certbot的fork。

看起来这么赞，
就照着它的使用说明用吧！
虽然我原本是想使用最复杂的椭圆密码和椭圆验证。
但是秉着
>先有一个，再要好的一个

的这样一个基本原则，我按照操作说明很简单的操作起来。
[操作说明:https://certbot.eff.org/](https://certbot.eff.org/)

可是结果大大出乎我的意料，明明应该很简单就可以构筑的东西为什么会来来回回的失败。
（我怀疑是我的参数设定错误所以一直更改原本网站的参数然后继续尝试）
失败到后来我竟然被let's encrypt CA 禁止了一段时间去认证 -- 失败的认证次数过多，相当于被“禁言”了几十分钟。

我把mariaDB和mysql的残骸清除，把过去装的一个垃圾傻瓜邮箱伺服器系统的残骸找到清除，
（那个“开源”邮箱伺服器系统竟然不提供卸载功能，作者留言说，要想卸载，重装OS吧。简直是WTF，作者还是国人，丢。。。。）
到最后才发现根本原因，我的virtual host的设定导致他无法正确的打开443port。。。。。因为我设置是伺服器从本地（伺服器）出发只能走80通道。。。。。
（当初是多神经才这么设定，一定是设定错了。。。。当时考虑的可能是防御hacking？？？！我应该是把目的地和出发地设置反了）

然后无奈的暂时取消掉virtual host，装成功了之后再一点点设置回来。
还好certbot还比较聪明（写的比较傻瓜）

看，[candy-water.com](http://candy-water.com)，无论怎么走，都是从443通道了，真开心！


参阅资料：
+ let's encrypt:[https://letsencrypt.org/](https://letsencrypt.org/)
+ certbot:[https://certbot.eff.org/](https://certbot.eff.org/)
+ 部分document:[https://certbot.eff.org/docs/](https://certbot.eff.org/docs/)
+ 劳资要加密全世界的宣言:[https://en.wikipedia.org/wiki/Let%27s_Encrypt#Overview](https://en.wikipedia.org/wiki/Let%27s_Encrypt#Overview)
