---
layout: post
title: 关于JAVA同期的初步学习笔记(2)
date: 2018-02-14 +0900
tags: java, sync, multithread
category: tech
---

源于。。。。嗯。因为发现之前写过一个JAVA同期的东西。所以开了这个续集。

前阵子做了一个cancel处理的一个小东西。好像是。。。组里的都嫌麻烦（？）反正最后玛德竟然抛给我了。
这是抛绣球么，净挑年轻的抛（？）我也很累的好么。

简单来说是这么一个东西。
现有一个系统，是从browser端向DB传送数据。数据中途要经历大量的翻过来覆过去的转换类型，最后变成整整齐齐的一个个小表格塞到DB里面去。
ummmmm........根据我的测试，server端的java里面的进程，大约是，100MB的数据，就会占据大约2GB的内存（RAM）。
本着不让server端迅速的因为大数据（咦？）而崩溃，目前已存的系统是这样设计的。

允许一个账单的数据输入，不过是排队一个接着一个输入。
比如队列中有{a, b, c}三个文件，那么是按照顺序，先输入a，等a的处理结束之后从server端返回处理成功的response。等browser端接到response之后再开始b的处理。
同理c。

使用方嫌等待时间太长了，要求出“取消”机能。这个很理解，我亲测，100MB的数据，我的小破电脑愣是跑了4-5个小时都没跑完。就算是workstation跑程序，就这个效率的话....
于是乎就跟文章开头一样，这个绣球最后就抛到我这里了= =||

我考虑的有2点，
(1)不破坏现有结构。
(2)在现有结构基础上做到cancel处理。不留后遗症的cancel处理。

我们可以把单个文件的处理过程大致分为5个过程。
  - （1）从browser端发送数据之前的所有处理
  - （2）从browser端传送到server端的处理过程之中
  - （3）在server端进行数据的处理
  - （4）在server端数据处理结束之后，发送response之前
  - （5）browser端接受到response之前

在这里，（1）和（4）（5）基本是不用考虑的，在实际使用中需要考虑的是（2）~（3）。

首先，这个处理是用xmlhttprequest来做的，那在传输数据的过程中，使用xhr自带的abort()可以取消（2）的处理过程。

其次，要处理（3）的过程应当如何去做。tomcat是典型的多线程server，由于内部处理得当，所以处理数据的线程无法被其他的线程干扰。
也就是说，如果你发送一个cancel请求，事实上是无法直接遥控正在处理数据的线程的。
cancel处理可以使用thread自带的isInterrupted()这一属性，而想要遥控这个属性事实上也可以把这个thread的reference带走，譬如放到一个static的内部结构里面，
这样就可以用别的线程去遥控那个interrupted的属性。

如果把thread的reference带出来也是可以。我们可以通过很多东西来确认一个独特的thread。比如sessionID + 现在的毫秒时间组成的独特的特征码。
这样的话我们把thread放到一个map里面就可以解决问题了。

这里涉及到一个问题。如果不只是一个人在进行数据输入。不同进程同时处理一个static的map的话，会有小概率出问题。

经典的解决办法就是锁。在java里面是一个叫做synchronized的东西。简单而言，其实把整个method都上锁就可以轻易解决这一难题。（另一个据说很多JVM不按标准实装的volatile暂时不在讨论范围）
这里会涉及到一个效率问题。就是，如果锁的时间过长，会拖慢整个程序。如下面的参考资料，我事实上考虑过使用singleton的双重锁来解决不要static一开始就占用一块内存的地盘的效率问题。
不过在考虑诸多之后，因为原本想要锁住的操作也很简单，我就没有采用那种pattern。
我的做法是，cancel request来了之后，直接用上文的sessionID + 现在的毫秒时间组成的特征码来查看map中是否有thread的reference，有的话执行interrupt，没有的话直接放弃，不管cancel request的死活。
这样的话并不会出现锁住整个进程的问题。

这样（3）也解决了。

就这么愉快的解决了这个问题。说起来废话很多，也是因为一开始做了很多想法，比如储存cancel request，这样可以把cancel request的成败也通知browser端。
但是这样产生了别的问题，如果是恰巧在(4)和(5)之间的时候来的cancel request，就必须要把cancel request删除，不然会永久的留在内存之中。
这样的话要做一个可以定期自动删除数据的map...um......倒不是做不到XD 但是效率未免会太差了点。

PS：
对了，记得知乎上的轮子哥曾经说过，如果只用getter，就不用同期锁。如果只要有一个进程要用setter，那就要做同期锁，而且要getter和setter同时上锁。

仔细想想很有道理，不然如果只setter上锁，getter不上锁，在get的瞬间，数据还没得到的时候，但是代码已经执行结束的瞬间，如果被setter换了数据，那么就会得到不一样的数据。这样怎么想都有点风险。

参考资料：
- [tomcat 8 reference](https://tomcat.apache.org/tomcat-8.0-doc/)
- [Java threads and thread interrupts](https://stackoverflow.com/questions/30721261/java-threads-and-thread-interrupts)
- [JavaでSingletonパターンを実装するのにclassとenumのどちらを使うべきか](http://blog.yuku-t.com/entry/20110225/1298567486)
- [enumを利用したSingleton実装のサンプルコード](https://qiita.com/neko_the_shadow/items/1879e8a8e6aec0e86845)
- [Java best practice: Class with only static methods](https://stackoverflow.com/questions/31409982/java-best-practice-class-with-only-static-methods/31410051)
- [What is so bad about singletons?](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons)
- [When should the Singleton pattern NOT be used?](https://stackoverflow.com/questions/4074154/when-should-the-singleton-pattern-not-be-used-besides-the-obvious)

没太大关联的：
- [Mapping a specific servlet to be the default servlet in Tomcat](https://stackoverflow.com/questions/14223150/mapping-a-specific-servlet-to-be-the-default-servlet-in-tomcat/14225540)
- [\[Java\]難解なSerializableという仕様について俺が知っていること、というか俺の理解](http://d.hatena.ne.jp/daisuke-m/20100414/1271228333)
