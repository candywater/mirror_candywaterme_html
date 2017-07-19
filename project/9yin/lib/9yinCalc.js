//by 糖水， MIT license
var jq = jQuery.noConflict();
var a = [];
var b = [];
const num = 10;
var damage = 0.0;
var defence = 0.0;
var times = 0.0;


/*fun feature*/
jq(function(){
  jq("#btn4").hover(
    function(){
      jq("#btn4").hide();
    },
    function(){
      //jq("#btn4").show();
    }
  );
})

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
  //console.log(jq("#btn3").attr("style"));
  console.log(bg_color);
  jq("#btn3").css("background-color" , bg_color);
}

/*---->fun feature*/

function ireset(){
  a = [];
  b = [];
  damage = 0.0;
  defence = 0.0;
  for(let i = 0; i < num; ++i){
    a.push(0.0);
    b.push(0.0);
    jq("#a" + (i)).val("");
    jq("#b" + (i)).val("");
  }
  //默认 内功 20%
  a[5] = 20.0;
  jq("#a" + (5)).val("20.0");
  //内防 or 外防
  jq("#b" + (8)).val("0.0");
  jq("#a1_left").val("");
}

function iswap(a, b){
  let tmp = a;
  a = b;
  b = tmp;
}



function inputCheck(){
  for(let i = 0; i < num; ++i){
    if(a[i] < 0) a[i] = - a[i];
    if(b[i] < 0) b[i] = - b[i];
  }
}

function input(){
  for(let i = 1; i < num; ++i){
    a[i] = parseFloat(jq("#a" + (i)).val() );
    if(isNaN(a[i]))
      a[i] = 0.0
    b[i] = parseFloat(jq("#b" + (i)).val() );
    if(isNaN(b[i]))
       b[i] = i == 1.0 ? 1.0 : 0.0 ;
  }
  a[0] = parseFloat(jq("#a1_left").val());
  a[0] = isNaN(a[0]) ? 0.0 : a[0];
  if(a[0] > a[1]) [a[0], a[1]] = [a[1], a[0]];//a[0] = [ a[1], a[1] = a[0]][0];

}

//TODO: 行をそろえる
//TODO: 防御力加上

function calc_c(a,b,c){
  c[1] = damage * (100+a[5]) * (100 + a[6] + a[7])/10000 ;
  c[2] = c[1] * (200 + b[3] + b[4] + b[5])/100;
  c[1] = (c[1] + b[2]*times) * defence + b[6] + b[7];
  c[2] = (c[2] + b[2]*times) * defence + 2*(b[6] + b[7]);
  return c;
}

function calc_d(a,b,d){
  d[1] = damage/times * (100+a[5]) * (100 + a[6] + a[7])/10000;
  d[2] = d[1] * (200 + b[3] + b[4] + b[5]) / 100;
  d[1] = (d[1] + b[2]) * defence + (b[6] + b[7]) / times;
  d[2] = (d[2] + b[2]) * defence + 2*(b[6] + b[7]) / times;
  return d;
}

function calc(yellowDamage){
  console.log("func:calc");
  //      0,            1,         2,  3,    4,    5,        6,      7,          8,        9
  //a = [yellow_left, 黄字_right，红字，蓝字，绿字，内功加成，装备加成，批注书加成，对方防御力,防御忽视]
  //      1,    2,          3,          4,            5,          6,      7,      8,      9
  //b = [段数，宝物加成， 宝物暴击伤害， 经脉暴击伤害， 内功暴击伤害， 兵录， 娃娃， if外防，防御忽视%]
  //c = [总伤害，暴击总伤害]
  //d = [总伤害每段，暴击总伤害每段]

  //if 武当5内一类的内功，这里没有正确的计算方法，TODO：以后加上武当5内一类的内功的计算方式

  damage = a[4] + yellowDamage + a[2] + a[3];
  times = b[1];
  a[8] = a[8] - a[9] > 0 ? a[8] - a[9] : 0.0 ;
  defence = (b[8] > 0.0) ? (a[8] + 1)/(10000 + a[8]) : (a[8] + 1)/(1000 + a[8]);
  defence = 1 - defence;
  defence = defence + b[9]/100 > 1.0 ? 1.0 : defence + b[9]/100;

  let c = [0.0, 0.0, 0.0];
  let d = [0.0, 0.0, 0.0];
  c = calc_c(a,b,c);
  d = calc_d(a,b,d);

  //        0,  1,              2,          3,    4,            5
  //res = [ 0.0, no_baoji_all, baoji_all, 0.0, no_baoji_every, baoji_every ]
  let res = [];

  for(let i = 0; i < 3; ++i)
    res.push(c[i]);
  for(let i = 0; i < 3; ++i)
    res.push(d[i]);
  return res;
}

function itest(){
  a[0] = 6666.6;
  jq("#a1_left").val(a[0] + "");
  for(let i = 1; i < num; i++){
    a[i] = 22.2;
    jq("#a" + i).val(String(a[i] ));
    b[i] = 33.3;
    jq("#b" + i).val(String( b[i] ));
  }
  jq("#b" + (8)).val("0.0");
}

//TODO:save as json
function save(){

}

//TODO: enter event via jquery

function ioutput(left, right){
  console.log("func:output");
  //        0,  1(c1),              2(c2),  3,    4(d1),            5(d2)
  //res = [ 0.0, no_baoji_all, baoji_all, 0.0, no_baoji_every, baoji_every ]
  for(let i = 0; i < left.length; ++i){
    left[i] = left[i].toFixed(2);
    right[i] = right[i].toFixed(2);//replace(/.[0-9]*jq/, "");
  }
  console.log("left:" + left);
  console.log("rifht:" + right);
  jq("#c1").val(left[1] + "~" + right[1] );
  jq("#c2").val(left[2] + "~" + right[2] );
  jq("#d1").val(left[4] + "~" + right[4] );
  jq("#d2").val(left[5] + "~" + right[5] );
  jq("#btn_name").html("" + (1 - defence).toFixed(4) * 100 );

  //jq("#defence").append(jq("<button id="defence01"></button>").text("此时对方防御力是"));
}

function icontroller(){
  input();
  inputCheck();
  let out_left = calc(a[0]);
  let out_right = calc(a[1]);
  ioutput(out_left, out_right);

  console.log(a);
  console.log(b);
  console.log("res_left:" + out_left);
  console.log("res_right:" + out_right);
  console.log("===============");
}
