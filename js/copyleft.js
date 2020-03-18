// import "jquery"
import { ready } from "./common.js";

var copyleft = function(){
  var body = document.querySelector("body")
  body.innerHTML += (("<br>"));

  let block = document.createElement("p")
  block.id = 'copyleft_block'
  block.style = 'text-align:right'

  body.appendChild(block);

  let copyleft = document.createElement("span")
  copyleft.id = "copyleft"
  copyleft.style = "background-color:rgba(254,254,254,0.4);"
  copyleft.innerHTML = "&copy;copyleft, by candy water&nbsp;"
  block.appendChild(copyleft);
  copyleft.addEventListener("click", ()=>window.location = ("http://candy-water.com/about"))
}

ready(copyleft);
