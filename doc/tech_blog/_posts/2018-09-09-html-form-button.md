---
layout: post
title: 关于html的form元素的submit()的一点小问题
date: 2018-09-09 +0900
tags: html5
category: tech
---

nodejs学习中，碰到这样的一段有趣的代码。 
这里是html部分。  
```html
  <form action="">
    <input id="m" autocomplete="off" /><button>Send</button>
  </form>
```
这里是js的部分  
```js
//$('form').submit(do_something);
```
我遇到了几个问题，笑笑，我把解决他们的思路记录下来。  

首先我疑惑的是，这个button上面也没有任何"submit"的标识，究竟为什么点回车or点那个button，就可以做do_something这个函数里面的东西？

- 1. \<form\>里面的\<button\>究竟为什么可以充当\<input type=\"submit\"\>?

我觉得这个太不可思议，太不科学了，这一点也不编程。  
我开始在mdn的海洋中寻找。  
终于让我找到这样的一句话。[1]

> if there's only one \<button\> inside the \<form\>, that button will be treated as the "submit" button. 

原来是只有一个button的话，那么就默认当作submit处理= =  
这个确实方便，确有点玄幻，笑笑。毕竟真的是一个不好的习惯呢，笑笑

接下来我就产生了新的疑问。  
因为我是一个鉴定的摒弃jQuery病的晚期患者（虽然我自己的网站的许多部件基本就是用jQuery写的）  
这个东西如果不用jQuery写应该怎么写。

那么首先问题来了，
- 2. 重写submit()这个部分jQuery是怎么实现的？如何逃离jQuery？  
我找到了这样的资料[6]:

> jQuery certainly doesn’t help us here. The code follows the same intuitive syntax if we want to trigger some other DOM events, such as focus and blur, or submit on a \<form\>

也就是说，jQuery这里调用的其实是浏览器本身就已经提供的API，用jQuery写不过是加了一层jQuery的皮，事实上是很没有效率的一种行为。

哦 我懂了 那好像把下面这个重写
```js
document.querySelector("form").submit()
```
就行了吧？或者像jQuery一样把他的parameter带入一个自己想要override的函数就ok了吧？

事实上果断被现实狠生生的打了脸。   
根据w3的标准文档[5]，form这个元素的submit是不可以像jQuery[4]一样拥有parameter的，然后我强行把submit重写似乎也不被允许 = = ||

卡住了。

等等，让我缓一缓。（我缓了一个下午，在仔细的读各种文档）

最后在重读[2]的时候，里面有一句话引起了我的注意：

> When invoking this method directly, no submit event is raised (in particular, the form's onsubmit event handler is not run),  and constraint validation is not triggered either.

> 在基于Gecko的浏览器中，调用该方法后，表单的 onsubmit 事件句柄(比如,onsubmit="return false;")不会执行。不能保证由其一定会被 HTML 用户代理调用。

英文和中文的有些许不一样。  
不过却提醒了我，我应该写的是onsubmit()这个函数，准确的说是事件....

所以准确的写法是
```js
document.querySelector("form").onsubmit = what_u_really_want_todo

var what_u_really_want_todo = () => {do_something; return false;}
```

这里的```return false```的作用是防止页面刷新。一旦点了按钮页面不在刷新，就说明这个成功了。

那么神奇的来了，这个submit()到底有什么用...  
根据[7]，这个疑似是历史遗留问题....我的天，锅又甩给历史了么....

这个邮件中有这样的文字
>  > submit
>  >     Submits the form. It performs the same action as a submit button.

>I don't think the last sentence is correct. Using a submit input will 
trigger onsubmit. The submit method will not.  
> by Filipus Klutiero

像使用jQuery的人也会有这个疑问[8]...

这个锅，历史你背定了，不怪我哦...XD


[1][MDN \<input type=\"submit\"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)  
[2][MDN form.submit](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLFormElement/submit)  
[3][MDN \<form\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)  
[4][jQuery Doc .submit\(\)](https://api.jquery.com/submit/)  
[5][W3 1. Document Object Model HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76767676)  
[6][You Don't Need jQuery!](https://blog.garstasio.com/you-dont-need-jquery/events/)  
[7][DOM Level 2 HTML: Note about onsubmit is misplaced in HTMLFormElement spec (in enctype attribute rather than in submit method) (was Re: Minor formatting error in HTMLFormElement spec)](http://lists.w3.org/Archives/Public/www-dom/2012JanMar/0011.html)  
[8][jQuery #3115 CLOSED BUG (WONTFIX)](https://bugs.jquery.com/ticket/3115)