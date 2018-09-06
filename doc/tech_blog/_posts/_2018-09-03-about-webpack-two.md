---
layout: post
title: webpack的初步学习笔记(2)
date: 2018-09-04 +0900
tags: webpack, js, javascript, npm, nodejs
category: tech
---

## 在webpack中协调使用babel

### babel是什么?

一个可以把es6标准的js转换到es5标准的js的一个转换器。

### 写这个日志的理由

我不喜欢写重复的东西，有许多东西有重复的概念我就不写了。  
本来在qiita找到了这个[1]。不过发现里面的情报似乎已经有些老旧了，因为我在安装  
```
npm install --save-dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015
```  
的时候，出现了如下提示
```
npm WARN deprecated babel-preset-es2015@6.24.1:
  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!   
```
所以我决定读文档....从头撸 = =||  

## babel 7

原来babel7 在August 27, 2018 新release了。  
不过显然官方文档还没有完全，比如[4]中的setup的方法就显然是一个迷魂阵。  
我在读了[3]之后才发现，原来babel7的package的名字已经变更了  
如果想要安装的话，必须要用名字空间的形式：  
```
npm install --save-dev @babel/cli @babel/core @babel/preset-env 
```



[1][webpack+babel環境でフロントエンドもES6開発](https://qiita.com/HayneRyo/items/74892d3a37ee96a5df60)  
[2][Webpack 4: configuration + ES6 to ES5 transpiler using babel loader](https://medium.com/@zural143/basic-webpack-4-and-es5-to-es6-transpiler-using-babel-dc66e72c86c6)  
[3][Babel 7 リリースプレビュー](https://qiita.com/ybiquitous/items/3e6fe8a252c6097186a6)
[4][How to use Babel with your tool of choice.](https://babeljs.io/en/setup)
[5][npmで名前空間を持ったモジュールを公開する方法(scoped modules)](https://efcl.info/2015/04/30/npm-namespace/)
[6][@babel/cli](https://babeljs.io/docs/en/babel-cli)
[7][Introduction to JavaScript Source Maps - html5rock](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)