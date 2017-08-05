---
layout: post
title: 正义?
date: 2017-08-05 +0900
category: essay
---

这几天在twitter上偶然看到一个小视频。

在平稳行驶的地铁电车上。
一个妹子拧开一个300ml大小的塑料瓶盖，然后仰头喝水。
看起来似乎是在站台的自动贩卖机随手买的一个瓶装水。
这时候一个坐着的妹子紧紧地盯着喝水妹水中的瓶子。
看到喝水妹还真的喝起水来了，
似乎是抑制不住的冲动般想要把瓶子拨弄下来。
坐着的妹子想要阻止喝水妹去喝水。

视频也有点长。1分钟有余，基本上就是喝水妹要喝水，坐着妹阻止喝水妹喝水。
可是喝水妹闪避掉坐着妹的攻击继续喝水，坐着妹看到攻击被闪避就继续攻击阻止喝水妹喝水。
途中一位西服魁梧的大叔阻止了坐着妹的攻击但是坐着妹奋勇直前，
最终揪起喝水妹的马尾辫子一个倒身摔，用力的把喝水妹摔在地上。
我看喝水妹的闪避技能点的很高，虽然最后没有闪避掉身后的攻击，
但是掉地时候瓶装水的瓶子似乎并没有把喝水妹的牙齿碰掉，
足以看出喝水妹的闪避技能树点的非常之高。

为什么坐着妹要阻止喝水妹喝水？
我们知道，很多人反对地铁里饮食。
很多人认为在地铁内——或者说在公共场所内饮食是很不文明的行为。
就如同膀爷——光着上半身的男人在大街上行走被认为是不文明的行为
——当然如果是一身筋子肉的男人话有一部分人会认为这就并不是不文明的行为了。
也如同对待膀爷一样，对于地铁内的饮食，事实上不同看法的人很多。
作为一名积极向上的coder，我决定用状态图(State Transition Diagram)来制作一个简易的 **伪** 非确定有限状态自动机(Nondeterministic finite automaton)来对这一现象进行说明。

♩[[原工具]](http://automatonsimulator.com/)
♩[[我改装之后的工具]](https://candywater.github.io/automatonSimulator/)
  - 改装1: 对条件Σ的单个元素的修正 -> 可以放入超过1个字母
  - 改装2: 对状态Q的命名修正 -> 可以任意命名单个状态q

你认为？

![nfa](/assets/stills/blog/20170805/1501924009635.jpg){:class="img-responsive"}
<a href="/assets/stills/blog/20170805/1501924009635.jpg" target="blank">点我看大图</a>


看出来了吧。
请相信我——上面的那个图片真的花费了我相当大的心血。


我相信两位女士都认为自己做的没什么可以非议的。
一位坚信自己做的是正义的事。
一位坚信自己没有做什么不正义的事。
而两位女士都使用行动来表达了自己的观点。

行动表达自己的意愿无可非议。
但是这维护的真的是，所谓的正义么。

我想起一个叫做海贼王的漫画。身后的披风上面写着大大的“正义”二字。
当然，我相信，你们维护的都是人间正道。









上面图片的代码(无法还原state的文字):
```
{"type":"NFA","nfa":{"transitions":{"start":{"你在":["s0","s3"]},"s0":{"的":["s2"]},"s3":{"的":["s2"]},"s2":{"你认为":["s4","s8","s7","s9"]},"s4":{"是":["s6","s5"]},"s8":{"-":["s15","s14"]},"s7":{"-":["s13","s12","s10","s11"]},"s9":{"-":["s10","s11"]},"s15":{"是":["s5","s6"]},"s14":{"是":["s5","s6"]},"s13":{"是":["s5","s6"]},"s12":{"是":["s5","s6"]},"s10":{"是":["s5","s6"]},"s11":{"是":["s5","s6"]}},"startState":"start","acceptStates":[]},"states":{"start":{},"s0":{"top":285,"left":156},"s3":{"top":421,"left":156},"s2":{"top":340,"left":282},"s4":{"top":103,"left":436},"s8":{"top":348,"left":606},"s7":{"top":438,"left":560},"s9":{"top":529,"left":523},"s6":{"top":172,"left":1341},"s5":{"top":78,"left":1294},"s15":{"top":209,"left":931},"s14":{"top":287,"left":934},"s13":{"top":370,"left":931},"s12":{"top":447,"left":930},"s10":{"top":524,"left":924},"s11":{"top":602,"left":922}},"transitions":[{"stateA":"start","label":"你在","stateB":"s0"},{"stateA":"start","label":"你在","stateB":"s3"},{"stateA":"s0","label":"的","stateB":"s2"},{"stateA":"s3","label":"的","stateB":"s2"},{"stateA":"s2","label":"你认为","stateB":"s4"},{"stateA":"s2","label":"你认为","stateB":"s8"},{"stateA":"s2","label":"你认为","stateB":"s7"},{"stateA":"s2","label":"你认为","stateB":"s9"},{"stateA":"s4","label":"是","stateB":"s6"},{"stateA":"s4","label":"是","stateB":"s5"},{"stateA":"s8","label":"-","stateB":"s15"},{"stateA":"s8","label":"-","stateB":"s14"},{"stateA":"s7","label":"-","stateB":"s13"},{"stateA":"s7","label":"-","stateB":"s12"},{"stateA":"s7","label":"-","stateB":"s10"},{"stateA":"s7","label":"-","stateB":"s11"},{"stateA":"s9","label":"-","stateB":"s10"},{"stateA":"s9","label":"-","stateB":"s11"},{"stateA":"s15","label":"是","stateB":"s5"},{"stateA":"s15","label":"是","stateB":"s6"},{"stateA":"s14","label":"是","stateB":"s5"},{"stateA":"s14","label":"是","stateB":"s6"},{"stateA":"s13","label":"是","stateB":"s5"},{"stateA":"s13","label":"是","stateB":"s6"},{"stateA":"s12","label":"是","stateB":"s5"},{"stateA":"s12","label":"是","stateB":"s6"},{"stateA":"s10","label":"是","stateB":"s5"},{"stateA":"s10","label":"是","stateB":"s6"},{"stateA":"s11","label":"是","stateB":"s5"},{"stateA":"s11","label":"是","stateB":"s6"}],"bulkTests":{"accept":"","reject":""}}
```
