---
layout: post
title: 一个简单的nodejs小型图片下载器
date: 2018-09-05 +0900
tags: nodejs
category: tech
---

## 缘由
因为自己想看把一个网站的页面的图片抓下来，而且图片的数量比较多，用wget会抓到许多没用的东西，所以决定写一个小东西来抓包。

## requirement
- nodejs  
- wget
- powershell or bash
- jsdom(npm)

## 思路
我的思路很简单，先把网页的代码抓下来，然后分析xml格式，找到原图片的链接，然后批量用wget下载。（省去了用nodejs来读取文件的麻烦）

get the code of webpage first, parse the code, find out links of imgs. then download imgs via wget.

## 命令行参数
需要把网址用命令行输入进去，免得每次用还要改参数....遵循如下格式。
```bash
node downloader [url1, url2, ...]
```

代码这么写就可以[5]

```js
process.argv.forEach(
  (val, index, arr) => {
    if(arr.length <= 2 && index == 1){
      url = default_value;
      dosomething();
    } 
    else if(index >= 2){
      url = val;
      dosomething();
    }
  }
)
```

## 抓网页源码

这里要用到一个原生的包。[1]
```js
const https = require("https");
```
然后就是简单的，合XMLHttpRequest差不多的
```js
if(!url) return; // if url == null, return
data = "";
https.get(
  url,
  (res) => {
    res.on("data",(chunk)=> {addItToData(chunk);});
    res.on("end", whenEndDoSth);
  }).on(("error"),(err) => {console.log("error:" + err.message)}
);
```
抓图片的处理在结束的时候做一个处理就可以了。在这里是在那个叫做whenEndDoSth的函数里面。

## 分析源码，并找出图片连接
这里我没有写出比较万能的用法，只写出了我想要抓的网页的办法。
我想抓的链接在这里。
```html
<figure><a href="url1_I_want_to_get"><img /></a></figure>
<figure><a href="url2_I_want_to_get"><img /></a></figure>
```
所以我这里用jsdom来解析，[3]  
第一步先抓出所有的figure，  
第二部抓出每个figure里面的a的href。  
很遗憾jsdom和浏览器里面的dom还是有点不同的，第一步抓到figure之后，
并不可以直接使用querySelector()这个函数，所以他并不是一个真正的浏览器dom，只是一个jsdom。嗯，也是可以理解，毕竟没必要完全实装嘛。
所以这里要用2次new JSDOM();

```js
const jsdom = require("jsdom")
const {JSDOM} = jsdom;
const dom = new JSDOM(data);
let figures = dom.window.document.querySelectorAll("figure");
for(let ele of figures){
  let figure = (new JSDOM(ele.innerHTML)).window.document.querySelector("a")
  console.log(figure.getAttribute("href"))
}
```

## 用wget下载
这步就简单的多了。  
用nodejs原生提供的child_process。[8]
```js
const {exec} = require("child_process")
exec("wget -P " + dir + " " + figure, (err, stdout, stderr) => {})
```

## 结语
基本上这样就完成了。  
我还有一个根据链接自动生成文件夹名称的小功能，也是用child_process来实现的，这里就不赘述了。  

> 妈妈再也不用担心我的鼠标手拉！

PS:还没有弄明白打包的问题，以后再打包之后弄成全域变量，然后直接使用吧。[2]


[1][5 Ways to Make HTTP Requests in Node.js](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)  
[2][npm 5.2.0の新機能！ 「npx」でローカルパッケージを手軽に実行しよう](https://qiita.com/tonkotsuboy_com/items/8227f5993769c3df533d)  
[3][How do I parse a HTML page with Node.js](https://stackoverflow.com/questions/7372972/how-do-i-parse-a-html-page-with-node-js)  
[4][you might not need jquery](http://youmightnotneedjquery.com)  
[5][How do I pass command line arguments to a Node.js program?](https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program)  
[6][Downloading images with node.js](https://stackoverflow.com/questions/12740659/downloading-images-with-node-js)  
[7][Execute a command line binary with Node.js](https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js)  
[8][child_process.html#child_process_child_process_exec_command_options_callback](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)  
[9][ぼくのかんがえたさいきょうのnpm test](https://qiita.com/renoji5126/items/09711d34fb30ca0cd84b)  
[10][npm で依存もタスクも一元化する](https://qiita.com/Jxck_/items/efaff21b977ddc782971)  
[11][A guide to creating a NodeJS command-line package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)  