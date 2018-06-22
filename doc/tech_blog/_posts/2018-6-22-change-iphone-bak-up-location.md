---
layout: post
title: 如何更改iphone的备份存储位置(windows)
date: 2018-06-22 +0800
tags: iphone, sync, bakup
category: tech
---

写一个简单的小知识。我自己因为换电脑用了好几次，每次都要找，于是就记在这里。  
windows环境下，如何更改iphone的备份存储位置。

### 前言

现代社会（咳咳），大家都喜欢用ssd作为系统盘。但是ssd的高昂的价格，让许多人不得不做出让步，所以系统盘许多都是128GB，256GB。如果是只有系统，还好，但是iphone的默认备份保存地址是c盘（windows环境下），如果iphone的容量是128GB，基本上就是要悲剧了。  
那就迎来了一个问题。需要把iphone的备份位置转移。

### 前提知识

首先找到iphone的具体备份位置。  
根据苹果资料[1]，win 7/8/10 是在这里。
```
%appdata%\Apple Computer\MobileSync\Backup
```
如果是win10的microsoft store里面购买的话，是在这里。
```
%USERPROFILE%\Apple\MobileSync\Backup
```
直接在地址栏敲下这个就可以到达这个文件夹。

然后你要准备一个其他硬盘的文件夹。这里用
```
[your-new-bakup]
```
代替。

### 具体做法

1. 打开cmd。（win键 + R召唤出一个窗口，然后输入cmd，点回车）
2. 在cmd输入以下指令
win 7/8/10的情况
```
cd %appdata%\Apple Computer\MobileSync
```
win 10(Microsoft Store)的情况
```
cd %USERPROFILE%\Apple\MobileSync
```
3. 在cmd输入以下指令
```
rmdir Backup
mkdir /J Backup [your-new-bakup]
```

### 注意

powershell神奇的不能用mklink这个指令，稍微查了一下，竟然要从cmd呼叫。用下面这个指令。
```
cmd /c "mklink"
```
不过这个是2014年的文章了，也不知现在有没有变化。

参考资料：
- \[1\][iPhoneバックアップの保存先を変更するiTunesの設定方法](https://oldno07.com/itunes-backup-iphone/)
- \[2\][Locate backups of your iPhone, iPad, and iPod touch](https://support.apple.com/en-us/ht204215)
- \[3\][PowerShell で シンボリックリンクを 使えるようにしよう](http://tech.guitarrapc.com/entry/2014/08/19/022232#PowerShell-%E3%81%A7%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AA%E3%83%83%E3%82%AF%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AF%E6%89%B1%E3%81%84%E3%81%AB%E3%81%8F%E3%81%84)
