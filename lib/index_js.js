var profile_flag = false;
//jQuery("#profile_photo").trigger("click");
//words of slide_down_words
var slide_down_words = [
  "happy a new day!!",

  "The world is round and the place which may seem like the end may also be only the beginning."
  +"<br>地球是圆的，而看似像终点的地方可能也只是起点。",

  "It is our choices, Harry, that show what we truly are, far more than our abilities."
  +"<br>― J.K. Rowling, Harry Potter and the Chamber of Secrets",

  "人と違う生き方は、それなりにしんどいぞ。何が起きても誰のせいにもできないからね。"
  +"<br>『耳をすませば』"
  +"<br>和别人用不同的方式活着,那也很难啊.无论发生了什么,你都没办法抱怨别人了."
  +"<br>《侧耳倾听》",

  "有时候,我昨天遇到一个人,感觉他非常有意思."
  +"<br>印象深刻"
  +"<br>但后来就再也碰不上了."
  +"<br>人生就是这样"
  +"<br>--王家卫,谈及电影<一代宗师>中八极拳客",

  "宁可一思进,莫在一思停.",

  "风往哪边吹,草就往哪边倒."
  +"<br>年轻的时候,我也以为自己是风"
  +"<br>等到遍体鳞伤之后"
  +"<br>才知道."
  +"<br>我们都是草"
  +"<br>电影<艋舺> (&lt;Monga&rt;)",

  "I hear, I forget. "
  +"<br>I see, and I remember."
  +"<br>I do, and I understand.",

  "活在这珍贵的世间"
  +"<br>太阳强烈"
  +"<br>水波温柔"
  +"<br>一层层白云覆盖着"
  +"<br>我踩在青草上"
  +"<br>感到自己是彻底干净的黑土块"
  +"<br>活在这珍贵的世间"
  +"<br>泥土高溅"
  +"<br>扑打面颊"
  +"<br>活在这珍贵的世间"
  +"<br>人类和植物一样幸福"
  +"<br>爱情和雨水一样幸福"
  +"<br>--海子",

  "绝望的背后可能还是绝望"
  +"<br>但是希望的背后就是好好活着"
  +'<br>-- <a href="./about/index.html">candy water</a> 2016 Oct.',

  "年年岁岁花相似"
  +"<br>岁岁年年人不同"
  +"<br>刘希夷<代悲白头翁>",

  "只有什么事都不做的人,才不会犯错误",

  "天大地大,哪里没有你我一展身手的地方",

  "发花,梭波,乜斜,一七,姑苏,怀来,灰堆,遥条,由求,言前,人辰,江阳,中东,"
  +"是谓十三道大辙也",

  "要像赌徒那么不计代价的活着,但千万不要企图成为他们"
  +"<br>--颜茹玉<一个vol.373>",

  "被命运打趴的时候,我们还是要爬起来,拍拍身上的土说,"
  +"来,咱们三局两胜."
  +"<br>--八月长安",

  "这辈子决定你悲欢的,就是你身边的几个人"
  +"<br>--柴静",

  "与你年轻时的面貌相比,我更爱你现在备受摧残的容颜"
  +"<br>杜拉斯<情人>",

  '"  &nbsp;  "'
]

jQuery(function(){
  jQuery("#about_profile").hide();
  jQuery("#below_about_profile").hide();
  jQuery("#profile_photo").click(show_or_hide);
  //jQuery("#profile_photo").on("click",show_or_hide);
  //test
});

function test_this_page(){
  let tmp = jQuery("#slide_down_words").html("");
  for(let i = 0; i < slide_down_words.length; ++i){
    let tmp = jQuery("#slide_down_words").html();
    jQuery("#slide_down_words").html(tmp + "" + i + ":" +　slide_down_words[i] + "\<br\>");
    jQuery("#about_profile").fadeIn();
    jQuery("#below_about_profile").fadeIn();
  }
}

function show_or_hide(){
  let rand = Math.random() * 1000;
  rand = rand.toFixed(0) % slide_down_words.length;
  console.log(rand);

  if(!profile_flag){
    jQuery("#about_profile").fadeIn();
    jQuery("#below_about_profile").fadeIn();
    jQuery("#slide_down_words").html( ("" + rand + ": &nbsp;<br>") + slide_down_words[rand]);
  }
  else {
    jQuery("#about_profile").slideUp();
    jQuery("#below_about_profile").slideUp();
  }
  profile_flag = !profile_flag;
}
