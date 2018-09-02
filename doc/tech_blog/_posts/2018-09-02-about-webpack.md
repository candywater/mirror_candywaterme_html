---
layout: post
title: webpack的初步学习笔记(1)
date: 2018-09-02 +0900
tags: webpack, js, javascript, npm, nodejs
category: tech
---

解除了一下webpack。以前就想接触一下，不过并没有他们说的那么简单。  
撕逼乎上有人说，这就是前端的人不懂后端，所以webpack根本玩不明白。这东西就和makefile一样一样的之乎者也。  
昨天总算弄懂了。其实还是makefile比较直观 = = 虽然我每次都要看一下makefile的说明才能写得出来XD  

## 如何在网页中调用bundle文件中的函数

很简单，就是把那个函数全域化。  
```
function you_want_to_use_outside() {
}
var you_want_to_use_outside_too = () => {console.log();};

window.you_want_to_use_outside      = you_want_to_use_outside
global.you_want_to_use_outside_too  = you_want_to_use_outside_too
```
是不是有点太简单？  
在webpack中，```global```会被自动转换成window。  
我之前思考的是另一个问题。   
这个东西会不会不安全?  
因为我还蛮想用```export```这个东西的XD

不过在[2]中的看到了好多种方法，想了想，还是选择了最简单的这个```window```。  
同时，为了通过eslint，我决定不使用```global```。

[1][webpackでTypeScriptからコンパイルしたJavaScriptの関数をうまく呼び出せない。](https://qiita.com/homahi/items/305f689506c9a1c66810)  
[2][Define global variable with webpack](https://stackoverflow.com/questions/37656592/define-global-variable-with-webpack)
