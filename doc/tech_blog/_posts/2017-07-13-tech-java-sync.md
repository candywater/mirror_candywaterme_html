---
layout: post
title: 关于JAVA同期的初步学习笔记(1)
date: 2017-07-13 +0900
tags: JAVA, sync
category: tech
---



缘由是看知乎的一个[答案]( https://zhihu.com/question/29971746/answer/46320214 ),
里面写到同期的部分愣是没看懂.
由于我自己也没写过需要同期的东西.
就参照几个东西边看边研究.

[techscore マルチスレッドプログラミング](http://www.techscore.com/tech/Java/JavaSE/Thread/index/)

[IBM doc Javaの理論と実践: volatile を扱う](https://www.ibm.com/developerworks/jp/java/library/j-jtp06197.html)

[oracle doc Synchronized Methods](https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html)

[Threadの割り込みを活用する](http://d.hatena.ne.jp/Nagise/20111130/1322628285)

### 关于sleep()

首先是关于sleep(),根本就没搞清楚他是什么意思.
(完全没有搞懂它内部是如何实现的)
自己动手丰衣足食,自己来尝试一下吧.

假设有A,B两个class.
同时call(1 step的时间差忽略不计)
因为sleep是static method.
那么我想知道,

如果class A每2秒count一次,
class B每3秒count一次.

那么是否会出现,


time(s)     | output A     | output B
---      | ---       | ---
0 | - | -
1 | - | -
2 | 1 | -
3 | - | 1
4 | 2| -
5 | - | -
6 | 3| 3
7 | - | -


的情况.( "-" 代表不输出数值)

#### 代码如下

**Main.java**

```
public class Main{

  public static void main(String args[]){
  TestThread a = new TestThread("class a", 2000);
  TestThread b = new TestThread("class b", 3000);

  a.start();
  b.start();
  }
}
```

**TestThread.java**

```

public class TestThread extends Thread {

  private String name;
  private long sleepTime;
  private long time;

  public TestThread (String name, long sleepTime){
    this.name = name;
    assert(sleepTime >= 0);
    this.sleepTime = sleepTime;
  }

  public void run(){
    this.time = System.currentTimeMillis();
    for (int i = 0; i < 3; ++i){
      try{
        sleep(sleepTime);
      }
      catch (InterruptedException e){
      }
      System.out.println(name + " : " + i +
        (System.currentTimeMillis() - time)/1000 + "[s]");
    }
  }
}


```

#### **结果** (测试环境WSL, win10, openjdk-8)

```
%time java Main
class a : 02[s]
class b : 03[s]
class a : 14[s]
class b : 16[s]
class a : 26[s]
class b : 29[s]
java Main 0.11s user 0.22s system 3% cpu 9.315 total
```

可以说是出现了匪夷所思的结果.
因为只运行了9秒,但是currentTimeMillis()却显示运行了近30秒.

虽然显示的数值并不符合预期,
但事实上在class A的第三次,class B的第二次输出,几乎是同步进行的.
(对for文的数值更改为6,并进行的多次测试,获得同样结果)
**符合我的猜测**.

解决了sleep()的疑问,但是带来了**新的问题**.
这里的currentTimeMillis()到底是怎样的机制?
如何才能正确的测量时间?

下个探索的阅读材料集锦

+ [Java: currentTimeMillis() と nanoTime() は混ぜると危険](http://d.hatena.ne.jp/sardine/20091226/p1)

+ [Javaアプリケーションのログの時刻がずれている](http://d.hatena.ne.jp/higher_tomorrow/20100407/1270639866)

---

# 后记
我发现我犯了一个很低级的错误。

```
System.out.println(name + " : " + i +
	(System.currentTimeMillis() - time)/1000 + "[s]");
```

中，第一行的行末没有添加空格，所以正确的output应该是，

```
class a : 0 2[s]
class b : 0 3[s]
class a : 1 4[s]
class b : 1 6[s]
class a : 2 6[s]
class b : 2 9[s]
```

错误的不是程序，而是写output的我自己。