// import "jquery"
import "./copyleft.js"
import {ready, animateCSS, animateCSSFaster, add_hide_cls, remove_hide_cls} from "./common.js";

const about_prof = "#about_profile"
const below_prof = "#below_about_profile"

var profile_flag = false;
//words of slide_down_words
var slide_down_words = ['happy a new day!'];

var index=(function(){
  get_serifs();

  var photo = document.querySelector("#profile_photo")
  photo.addEventListener("click", show_or_hide);
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
  var about = document.querySelector(about_prof)
  var below = document.querySelector(below_prof)
  var anime = "animated"
  if(about.className.indexOf(anime) >= 0|| below.className.indexOf(anime) >= 0){
    if(profile_flag){ show_quote(false) }
    return;
  }
  profile_flag = !profile_flag;
  if(!profile_flag){
    hide_quote()
  }
  else {
    show_quote(true)
  }
}

function show_quote(hasAnimation){
  const slide_down = "#slide_down_words"
  const animation = "fadeInDown"
  let rand = get_randam_number()
  document.querySelector(slide_down).innerHTML = ( ("" + rand + ": &nbsp;<br>") + slide_down_words[rand]);
  if(hasAnimation){
    remove_hide_cls(about_prof)
    remove_hide_cls(below_prof)
    animateCSSFaster(about_prof, animation)
    animateCSSFaster(below_prof, animation)
  }
}
function hide_quote(){
  const animation = "fadeOutUp"
  animateCSS(about_prof, animation, ()=>add_hide_cls(about_prof))
  animateCSS(below_prof, animation, ()=>add_hide_cls(below_prof)) 
}

function get_randam_number(){
    let rand = Math.random() * 10000;
    rand = rand.toFixed(0) % slide_down_words.length;
    console.log("[" + rand + "/" + slide_down_words.length + "]");
    return rand
}

//DEBUG
global.show_all = function(){
  let tmp = jQuery("#slide_down_words").html("");
  for(let i = 0; i < slide_down_words.length; ++i){
    let tmp = jQuery("#slide_down_words").html();
    jQuery("#slide_down_words").html(tmp + "" + i + ":" +　slide_down_words[i] + "\<br\>\<br\>");
    jQuery("#about_profile").fadeIn();
    jQuery("#below_about_profile").fadeIn();
  }
}

//DEBUG
global.show_num = function(num){
  jQuery("#about_profile").fadeIn();
  jQuery("#below_about_profile").fadeIn();
  jQuery("#slide_down_words").html( ("" + num + ": &nbsp;<br>") + slide_down_words[num]);
  console.debug("[" + num + "/" + slide_down_words.length + "]");
}

ready(index)