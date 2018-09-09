---
layout: post
title: 近期杂记 - 关于editor的种种
date: 2018-09-02 +0900
tags: choco, xray, atom, editor, memo
category: tech
---

近期的一些小事的杂记。

## 1.choco竟然会安装windows的更新

今天安装nvim的时候，发现一个很有趣的事情，chodo顺便帮我把一些windows的更新也安装了。  

```
$ choco install neovim
Chocolatey v0.10.11
Installing the following packages:
neovim
By installing you accept licenses for the packages.
Progress: Downloading vcredist2015 14.0.24215.20170201... 100%
Progress: Downloading vcredist140 14.12.25810... 100%
Progress: Downloading KB3033929 1.0.3... 100%
Progress: Downloading chocolatey-windowsupdate.extension 1.0.2... 100%
Progress: Downloading KB3035131 1.0.1... 100%
Progress: Downloading KB2919355 1.0.20160915... 100%
Progress: Downloading KB2919442 1.0.20160915... 100%
Progress: Downloading KB2999226 1.0.20170509... 100%
Progress: Downloading neovim 0.3.1... 100%
```
```
$ Chocolatey installed 9/9 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).

Installed:
 - kb2919355 v1.0.20160915
 - kb3033929 v1.0.3
 - kb2999226 v1.0.20170509
 - vcredist2015 v14.0.24215.20170201
 - kb2919442 v1.0.20160915
 - vcredist140 v14.12.25810
 - neovim v0.3.1
 - kb3035131 v1.0.1
 - chocolatey-windowsupdate.extension v1.0.2
```
说实话非常有趣。  
我在choco的主页这里（https://chocolatey.org/packages?q=WindowsUpdate）发现，原来有关windows update的包，也只有4个而已。  
很显然我要失望了，并不能把choco作为升级代理工具了XD  

## 2.使用atom时输入法卡顿问题

首先我使用的是双拼输入法，是win10自带的微软双拼输入法。  
这个输入法本身就有些卡顿（不知道为什么)  
在使用atom的时候，比如换行，比如切换到英文，比如鼠标把光标移走，比如删除输入过的文字，都有概率会卡顿。   

具体表现为，要输入大约10多个字母之后输入法才会启动，不然什么东西都不显示，什么东西都打不出来。  
唯一规避的方式只有连续按两次shift = =||  
也是一个奇葩的bug了。  
在网上找到方法说，安装中文包会解决。  
不过很显然这个方法对我来说没有什么用。  
只好查找下一个editor试试看看咯。

## 3.markdown在atom中末尾的单个空格会被删除

众所周知markdown文件在末尾的单个空格意味着改行。  
我查了一下网上给出的查看whitespace这个package的建议  
发现里面的设定是如果在markdown文件中，有2个空格就不会被删除。  
嗯，那就用两个空格吧！

[1][atom自动删除行末空格行？ - Atom & Sublime Text - 前端技术分享论坛](www.phpvar.com/bbs/forum.php?mod=viewthread&tid=125)

## 4.atom的未来替代选项 - xray ？

github在开发完atom之后，貌似又要开发xray。  
这个消息很早就看过了，只不过记不住它的名字。  
想说虽然正在开发中，不过用一下看看吧！看到没有release，同时又没有makefile = =||  
算了算了，好像用不了的样子（自我安慰）  
那我就不用了！  
而且看他的2018 Q3的目标，竟然是version control system = = 我了个去，好吧好吧，敬请期待。

他好像真的是用不了，我看它的报告（https://github.com/atom/xray/blob/master/docs/updates/2018_08_28.md）  
里面说好像下一步要做buffer= =  
> The file support added last week assumes that all files are empty.  
> To allow files to be associated with editable content, we're adapting the buffer module from xray_core to work with Memo's new B-tree.

啊...还有好长的路啊...不过看起来他们使用WEBGL来做，感觉好厉害。。。  
（关于使用WEBGL的笔记：https://github.com/atom/xray/blob/master/docs/updates/2018_03_05.md）

## 5.关于新世代vcs -- memo

关于这个新的vcs(version control system)，memo，大致看了一下它的说明。  
它主张有以下4个特性(加上我的翻译)
+ > Continuous persistence  
  不间断的可持续性。所有的更改可以在不commit的情况下上传倒服务器，所以你的同事可以在另一台机器上继续你的工作。也可以在这个文件的历史之中擦除或者再现某一个历史纪录。
+ > Live branches  
  实时的branch。只要你连接到网络，所有的branch的最新情报会实时更新。编辑每一个branch的复制品的时候会自动同步，而省去手动更改confict（冲突）的烦恼。
+ > Persistent annotations  
  不间断的注解。在最新版本的代码中，创建永久链接给每一块代码，即便代码已经被编辑过，都指向同一块逻辑区域。（这个不是太懂）
+ > Non-linear history  
  非线性的历史。undo或者redo在某一特定区域。Group changes into arbitrary layers that can be dynamically toggled.（这句话每一个词我都懂，但是合在一起不知道什么意思）

这个的大概意思，应该是做一个类似于google doc的同时编辑的一个vcs版本啊。  
不过这个有几个难题，第一是网络的带宽问题，第二是网络的延迟问题，第三是同时编辑同一文件的冲突问题。  
第三最难解决，第一第二都是bottleneck而已。或者说，第一第二在内网的环境下，可能不算是问题。  
google doc能解决第三的原因在于它是在server端提供的服务。然后如果代码是在本地端的话，这个我认为除非出现量子网络，不然极难解决。  
记得svn的解决方案是lock...锁定...  
git的解决方案是...干脆不管XD  merge的时候再说XD  

继续读，还真的是一个云服务，似乎是一个和git有兼容性的这个一个云服务。期待后续吧。

[2][Memo: Operation-based version control](https://github.com/atom/xray/blob/master/memo/README.md)
