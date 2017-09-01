---
layout: post
title: 杂谈：URI和URL的区别
date: 2017-09-01 +0900
tags: 杂学，网络
category: tech
---

昨天有盆友吻我。说错，是问我，URI和URL有啥子区别。
登时我就懵逼了，这难道不是一回事么？
边说着稍等，我边抄起电脑就朝桌子上砸....不，我是说我搬起电脑到桌子上就要开始查资料。

先抛一个结论。只要不是特别较真的地方，URL和URI就当成一回事吧。

我们先从定义来看——放过我吧，虽然大二左右老师就教导说看资料必须看RFC原文——还是放过我吧我就偷偷懒。
和URL，URI一个系列的兄弟还有一个叫URN。
看这名字就看得出是三兄弟，很容易搞混的那种。

- URI：Uniform Resource Identifier
- URL：Uniform Resource Locator
- URN：Uniform Resource Name

看起来都差不多。
那算了，来读读语法吧。

看着这语法竟然用到了BNF的记述方法。我无奈的表示我竟然在acm中见过它。。。而且这是我很不熟悉的部分（好吧，我承认我是个学渣，大多都不太熟。。。）
无奈的我大致的重温了一下BNF的记法。

好了，

+ URI：scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
+ URN：<URN> ::= "urn:" <NID> ":" <NSS>




参考资料：
+ ウィキペディア『Uniform Resource Identifier』[https://ja.wikipedia.org/wiki/Uniform_Resource_Identifier](https://ja.wikipedia.org/wiki/Uniform_Resource_Identifier)
+ ウィキペディア『Uniform Resource Locator』[https://ja.wikipedia.org/wiki/Uniform_Resource_Locator](https://ja.wikipedia.org/wiki/Uniform_Resource_Locator)
+ 一个很好的解释BNF的例子[BNF再帰下降構文解析](http://dai1741.github.io/maximum-algo-2012/docs/parsing/)
