// import "jquery"
import "./copyleft.js"
import { ready, add_hide_cls, remove_hide_cls } from "./common.js";

var meow_flag = false;
var credit_info_flag = false;
var about = (function(){
  add_hide_cls("#meow")
  add_hide_cls("#credit_info")

  var profile_photo = document.querySelector("#profile_photo")
  var credit = document.querySelector("#credit_info")
  if(profile_photo)
    profile_photo.addEventListener("click", profile_photo_click_eventhandler)
  if(credit)
    credit.addEventListener("click", credit_click_eventhandler)
})

var profile_photo_click_eventhandler = function(){
  meow_flag = !meow_flag;
  if(meow_flag)
    remove_hide_cls("#meow")
  else {
    add_hide_cls("#meow")
  }
}

var credit_click_eventhandler = function(){
  credit_info_flag = !credit_info_flag;
  if(credit_info_flag)
    remove_hide_cls("#credit_info")
  else {
    add_hide_cls("#credit_info")
  }

}


ready(about);
