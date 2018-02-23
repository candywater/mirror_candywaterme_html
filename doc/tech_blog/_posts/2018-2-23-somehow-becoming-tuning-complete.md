---
layout: post
title: 关于一不小心就变成了图灵完全的...
date: 2018-02-23 +0900
tags: 图灵
category: tech
---

最近几天没做leetcode的题，工作太忙了。明明就要离职了55555....
就顺便偷个懒，写点好玩的东西。主要内容和灵感来自[这篇文章(https://cpplover.blogspot.jp/2013/10/blog-post_20.html)](https://cpplover.blogspot.jp/2013/10/blog-post_20.html)。

### 1.什么是图灵完全

首先我们要明确一个概念。什么算是图灵完全。
简单来说，就是跟万能图灵机具有同等计算能力的计算模型，就可以称之为图灵完全。
图灵机可以看作是当代计算机的简化模型。基本上图灵机就是抽象化的基本计算机模型。

一般而言，大多数当代的编程语言都是图灵完全的语言。
跟NP的概念很类似，同样具有图灵机概念的话，理论上互相做的事情都可以相互转换。
也就是说，c++能做的到的大多数事情，js同样也可以做到。

再譬如令人惊讶的brainfuck这门语言，也同样是图灵完全语言。那么理论上，可以用c来bind brainfuck，
brain来bind c就算了....c写的东西可以转换成brainfuck，brainfuck写的东西也可以转换成c。

我目前知道的4种证明一种语言是图灵完全语言的方法：
+ 1.用这种语言实现重复处理。(也就是可以实现finite automaton)
+ 2.用这种语言实现[rule 110](https://en.wikipedia.org/wiki/Rule_110)。
+ 3.用这种语言实现[life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)。
+ 4.用某种语言制作可以另一种已经被证明是图灵完全的语言的complier来证明，这个语言是图灵完全。(这个可以说是不用证明)

```
INPUT -> PROCESS -> OUTPUT
          ↑___|
```

### 2.不小心就变成图灵完全的...

- c++ template

    [\[1\]stackoverflow](https://stackoverflow.com/questions/189172/c-templates-turing-complete)
    [\[2\]用c++ template实现一些work](https://www.artima.com/cppsource/codefeaturesP.html)

- HTML5 + CSS

    [\[3\]stackoverflow](https://stackoverflow.com/questions/2497146/is-css-turing-complete)
    [\[4\]用css来实现的rule 110](http://eli.fox-epste.in/rule110-full.html)

- 万智牌(Magic: The Gathering)

    [\[5\]用magic牌实现turning machine的解说（我没细读...）](https://www.toothycat.net/~hologram/Turing/HowItWorks.html)

- Minecraft

    [\[6\]用minecraft实现的简易compute的油管视频，这里的ROM是人肉（视频作者...）](https://www.youtube.com/watch?feature=player_embedded&v=7sNge0Ywz-M)

- 神奇宝贝 黄 （ポケットモンスター　イエロー）

    [\[7\]利用黄的一个bug，可以改写游戏的memory addresses，从而进行图灵完全的实现（这个有点牵强....）](http://tasvideos.org/2913S.html)

- Tex

    [\[8\]用实现一个图灵完全语言的编译器(complier)来证明这个语言是图灵完全语言](http://hak7a3.hatenablog.com/entry/2016/12/17/122422)
- SQL

    [\[9\]sql的图灵完全说明](http://assets.en.oreilly.com/1/event/27/High%20Performance%20SQL%20with%20PostgreSQL%20Presentation.pdf)

- (Cプリプロセッサー)   

    [\[10\]参照2001年的IOCCC大会的herrmann1条目](http://www.ioccc.org/years.html#2001)

写完之后才发现其实要看的东西还蛮多的，很多基础概念要么就是忘记了，要么就是原本就搞得不太清楚....

参考资料：
- [うっかりチューリング完全になっちゃったもの](https://cpplover.blogspot.jp/2013/10/blog-post_20.html)
- [TeX はどうしてアレなのか](http://d.hatena.ne.jp/zrbabbler/20140607/1402135613)
- [もうひとつのTeXがチューリング完全であることの証明](http://hak7a3.hatenablog.com/entry/2016/12/17/122422)
- [TeXで簡単プログラミング♪](http://0-chromosome.hatenablog.jp/entry/2015/12/07/000000)
- [wikipedia:チューリング完全](https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E5%AE%8C%E5%85%A8)
- [Turing completeness](https://en.wikipedia.org/wiki/Turing_completeness)
