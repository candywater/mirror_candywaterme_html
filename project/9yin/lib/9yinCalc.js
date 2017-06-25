//by 糖水， MIT license
var a = [];
var b = [];
const num = 10;
var damage = 0.0;
var defence = 0.0;

$(function(){
  $("body").append($("<button>back to main page</button>").click(function(){
    window.location = "./index.html"
  }))
  $("body").append($("<br>"));
  $("body").append($("<p></p>").html("&copy;copyleft, by shuiyu,tang(唐水羽)"));


  $("#btn4").hover(
    function(){
      $("#btn4").hide();
    },
    function(){
      //$("#btn4").show();
    }
  );
});

function certainAlpha(tmp){
  console.log("ABCDEF".charCodeAt(tmp - 10));
  if(tmp >= 10 & tmp < 16)
    //return String.fromCharCode(65 + tmp - 10);
    return String.fromCharCode("ABCDEF".charCodeAt(tmp - 10));
  else
    return "A";
}

function button_color_reseter(){
  let bg_color = "#";
  for(let i = 0; i < 6; ++i){
    let tmp = (Math.random() * 1000 % 16).toFixed(0);
    bg_color += tmp < 10 ? tmp : certainAlpha(tmp);
  }
  //console.log($("#btn3").attr("style"));
  console.log(bg_color);
  $("#btn3").css("background-color" , bg_color);
}

function ireset(){
  a = [];
  b = [];
  damage = 0.0;
  defence = 0.0;
  for(let i = 0; i < num; ++i){
    a.push(0.0);
    b.push(0.0);
    $("#a" + (i)).val("");
    $("#b" + (i)).val("");
  }
  a[5] = 20.0;
  $("#a" + (5)).val("20.0");

  $("#a1_left").val("");
}

function iswap(a, b){
  let tmp = a;
  a = b;
  b = tmp;
}

function icontroller(){
  input();
  inputCheck();
  let out_left = calc(a[0]);
  let out_right = calc(a[1]);
  output(out_left, out_right);


  console.log(a);
  console.log(b);
  console.log("res_left:" + out_left);
  console.log("res_right:" + out_right);
  console.log("===============");

}

function inputCheck(){
  for(let i = 0; i < num; ++i){
    if(a[i] < 0) a[i] = - a[i];
    if(b[i] < 0) b[i] = - b[i];
  }
}

function input(){
  for(let i = 1; i < num; ++i){
    a[i] = parseFloat($("#a" + (i)).val() );
    if(isNaN(a[i]))
      a[i] = 0.0
    b[i] = parseFloat($("#b" + (i)).val() );
    if(isNaN(b[i]))
       b[i] = i == 1.0 ? 1.0 : 0.0 ;
  }
  a[0] = parseFloat($("#a1_left").val());
  a[0] = isNaN(a[0]) ? 0.0 : a[0];
  if(a[0] > a[1]) [a[0], a[1]] = [a[1], a[0]];//a[0] = [ a[1], a[1] = a[0]][0];

}

//TODO: 行をそろえる
//TODO: 防御力加上

function calc(yellowDamage){
  //      0,            1,         2,  3,    4,    5,        6,      7,          8,        9
  //a = [yellow_left, 黄字_right，红字，蓝字，绿字，内功加成，装备加成，批注书加成，对方防御力,防御忽视]
  //      1,    2,          3,          4,            5,          6,      7,      8,      9
  //b = [段数，宝物加成， 宝物暴击伤害， 经脉暴击伤害， 内功暴击伤害， 兵录， 娃娃， if外防，防御忽视%]
  //c = [总伤害，暴击总伤害]
  //d = [总伤害每段，暴击总伤害每段]

  //if 武当5内一类的内功，这里没有正确的计算方法，TODO：以后加上武当5内一类的内功的计算方式

  damage = a[4] + yellowDamage + a[2] + a[3];
  let times = b[1];
  a[8] = a[8] - a[9] > 0 ? a[8] - a[9] : 0.0 ;
  defence = (b[8] > 0.0) ? (a[8] + 1)/(10000 + a[8]) : (a[8] + 1)/(1000 + a[8]);
  defence = 1 - defence;
  defence = defence + b[9]/100 > 1.0 ? 1.0 : defence + b[9]/100;

  let c = [0.0, 0.0, 0.0];
  let d = [0.0, 0.0, 0.0];
  c[1] = damage * (100+a[5]) * (100 + a[6] + a[7])/10000 ;
  c[2] = c[1] * (200 + b[3] + b[4] + b[5])/100;
  c[1] = (c[1] + b[2]*times) * defence + b[6] + b[7];
  c[2] = (c[2] + b[2]*times) * defence + 2*(b[6] + b[7]);

  d[1] = damage/times * (100+a[5]) * (100 + a[6] + a[7])/10000;
  d[2] = d[1] * (200 + b[3] + b[4] + b[5]) / 100;
  d[1] = (d[1] + b[2]) * defence + (b[6] + b[7]) / times;
  d[2] = (d[2] + b[2]) * defence + 2*(b[6] + b[7]) / times;

  let res = [];

  for(let i = 0; i < 3; ++i)
    res.push(c[i]);
  for(let i = 0; i < 3; ++i)
    res.push(d[i]);


  //        0,  1,              2,          3,    4,            5
  //res = [ 0.0, no_baoji_all, baoji_all, 0.0, no_baoji_every, baoji_every ]
  return res;

}

function itest(){
  a[0] = 6666.6;
  $("#a1_left").val(a[0] + "");
  for(let i = 1; i < num; i++){
    a[i] = 22.2;
    $("#a" + i).val(String(a[i] ));
    b[i] = 33.3;
    $("#b" + i).val(String( b[i] ));
  }
}

//TODO:save as json
function save(){

}

//TODO: enter event via jquery

function output(left, right){
  //        0,  1(c1),              2(c2),  3,    4(d1),            5(d2)
  //res = [ 0.0, no_baoji_all, baoji_all, 0.0, no_baoji_every, baoji_every ]
  for(let i = 0; i < left.length; ++i){
    left[i] = left[i].toFixed(2);
    right[i] = right[i].toFixed(2);//replace(/.[0-9]*$/, "");
  }
  console.log("left:" + left);
  console.log("rifht:" + right);
  $("#c1").val(left[1] + "~" + right[1] );
  $("#c2").val(left[2] + "~" + right[2] );
  $("#d1").val(left[4] + "~" + right[4] );
  $("#d2").val(left[5] + "~" + right[5] );
  $("#btn_name").html("" + (1 - defence).toFixed(4) * 100 );

  //$("#defence").append($("<button id="defence01"></button>").text("此时对方防御力是"));
}

//files

/*
special thanks to irischloe1990 https://tieba.baidu.com/p/4588757049
面板伤害公式
招式基伤(包括武器攻击力)+内功威力*加权+外功威力*加权+远距威力*加权

命中率公式
MIN(100%,(90%-(对方闪避值-自身命中值/(对方闪避值+1)*15%)+自身食物药物内功招式额外命中率-对方食物药物内功招式额外闪避率) - 移动速度闪避率 - 内功点数相差闪避率

每击伤害公式
面板伤害/招式击数

加成后伤害公式
每击伤害*内功属性加成*装备加成*内功特效加成+宝物每击伤害

暴击率公式
MAX(0,自身暴击值-对方封劲/(自身暴击值+1)*10%+5%)+自身食物药物特效招式宝物暴击率-对方宝物减暴率

暴击伤害公式
加成后伤害*(2+自身宝物特效暴击伤害-对方宝物特效暴击伤害减免)

防御减成后伤害公式
加成后伤害或暴击伤害*MIN(1,(1-(对方防御值-自身破防值))/(10000+对方防御值-自身破防值))+自身减免忽视-对方额外减免)
"内功伤害则10000变为1000及破防值变为内防忽视"

最终伤害公式
防御减成后伤害+(兵录伤害/招式击数)
'"跳闪招式招式击数取1"

跳闪招式公式(未独立修改前)
最终伤害*攻击次数

倍化伤害招式公式(未独立修改前)
最终伤害+最终伤害*倍数*(1-对方防御值/(10000+对方防御值))
"内功伤害则10000变为1000"

附加伤害/持续伤害招式公式
附加伤害独立面板公式*(1-对方防御值/(10000+对方防御值))
"内功伤害则10000变为1000"
*/
/*

似乎是(20 + 近身威力 x 0.1) x 刀劲层数
https://tieba.baidu.com/p/4166088992?pid=79213691611&cid=0#79213691611
*/
