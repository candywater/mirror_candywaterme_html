import "./copyleft.js"

var profile_flag = false;
//jQuery("#profile_photo").trigger("click");
//words of slide_down_words
var slide_down_words = ['happy a new day!'];

jQuery(function(){
  //i dont why, but i cannot write this req with jQuery..... = =
  get_serifs();

  jQuery("#below_about_profile").hide();
  jQuery("#profile_photo").click(show_or_hide);
});

function get_serifs(){
  let req = {
    method: "GET",
    url: "/doc/index/index_quote.md",
    dataType: "text",
    timeout: 3000,
  };

  let xhr = new XMLHttpRequest();
  xhr.timeout = req.timeout;//can not wait for more than 3 seconds!!
  xhr.responseType = req.dataType;
  xhr.open(req.method, req.url, true);
  xhr.onprogress = function(){console.log("just wait for loading....");}
  xhr.onload = function(res){
    slide_down_words = split_serifs(res.target.responseText);
    console.log("success");
  }
  xhr.send(null);
}

function split_serifs(str){
  str = str.split(/(?:\r\n){2,}/g);
  for(var ele in str ){
    str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
  } //console.log(str);
  return str;
}

function show_or_hide(){
  profile_flag = !profile_flag;
  if(!profile_flag){
    jQuery("#about_profile").slideUp();
    jQuery("#below_about_profile").slideUp();
  }
  else {
    let rand = Math.random() * 10000;
    rand = rand.toFixed(0) % slide_down_words.length;
    console.log("[" + rand + "/" + slide_down_words.length + "]");
    jQuery("#about_profile").fadeIn();
    jQuery("#below_about_profile").fadeIn();
    jQuery("#slide_down_words").html( ("" + rand + ": &nbsp;<br>") + slide_down_words[rand]);
  }
}

//DEBUG
function show_all(){
  let tmp = jQuery("#slide_down_words").html("");
  for(let i = 0; i < slide_down_words.length; ++i){
    let tmp = jQuery("#slide_down_words").html();
    jQuery("#slide_down_words").html(tmp + "" + i + ":" +　slide_down_words[i] + "\<br\>\<br\>");
    jQuery("#about_profile").fadeIn();
    jQuery("#below_about_profile").fadeIn();
  }
}

//DEBUG
function show_num(num){
  jQuery("#about_profile").fadeIn();
  jQuery("#below_about_profile").fadeIn();
  jQuery("#slide_down_words").html( ("" + num + ": &nbsp;<br>") + slide_down_words[num]);
  console.debug("[" + num + "/" + slide_down_words.length + "]");
}
