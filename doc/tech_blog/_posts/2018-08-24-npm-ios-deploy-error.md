---
layout: post
title: Error when installing ios-deploy via npm
date: 2018-08-24 +0800
tags: iphone, npm, ios-deploy
category: tech
---

when I install ios-deploy via npm
```
npm install -g ios-deploy
```
I got an error below
```
> ios-deploy@1.9.3 preinstall /usr/local/lib/node_modules/ios-deploy
> ./src/scripts/check_reqs.js && xcodebuild

stderr: xcode-select: error: tool ‘xcodebuild’ requires Xcode, but active developer directory ‘/Library/Developer/CommandLineTools’ is a command line tools instance
```
I searched a answer which switches path of xcode-select.

I found my path is
```
$ xcode-select -p
/Library/Developer/CommandLineTools
```
and I changed it to this.
```
$ sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```
successed.

PS:
after I changed path of xcode-select, I got a warning below....umm....
I think it should warn me earlier...
```
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!! WARNING: You are on OS X 10.11 El Capitan or greater, you may need to add the
!!!! WARNING:   `--unsafe-perm=true` flag when running `npm install`
!!!! WARNING:   or else it will fail.
!!!! WARNING: link:
!!!! WARNING:   https://github.com/phonegap/ios-deploy#os-x-1011-el-capitan-or-greater
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
```


reference:
[1][IonicのiOSのビルドのエラー](http://shinriyo.hateblo.jp/entry/2018/02/17/Ionic%E3%81%AEiOS%E3%81%AE%E3%83%93%E3%83%AB%E3%83%89%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC)
