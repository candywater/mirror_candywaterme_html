var req = {
  method: "GET",
  url: "../../doc/9yinfiles/filter20180326.ini",
  dataType: "text",
  timeout: 3000
}

var xhr;
var filterwords;

window.onload = function(){
  init();
}

function init(){
  xhr = new XMLHttpRequest();
  xhr.timeout = req.timeout;//can not wait for more than 3 seconds!!
  xhr.responseType = req.dataType;
  xhr.open(req.method, req.url, true);
  xhr.onprogress = function(){console.log("just wait for loading....");}
  xhr.onload = function(res){
    filterwords = split_serifs(res.target.responseText);
    document.getElementById("ready").innerHTML = "ready to use <br/> 输出格式 你的语句：将被屏蔽的关键词<br><br/>"
    document.getElementById("output").value = "";
    console.log("success");
  }
  //console.log(filterwords);
  xhr.send(null);
}

function findword(){
  var input = document.getElementById("input").value;
  var outputEle = document.getElementById("output");
  let output = "";
  let len = maxlen();

  for(let i = 0; i < input.length; i++){
    let str = input.substr(i, len+1);
    let ismatch = ifmatch(str);
    if(ismatch != null)
      output+=
        str.substr(0, ismatch[1]+4)
        + ": " + ismatch[0] + "\n";
  }
  outputEle.value = output;
}

function ifmatch(str){
  for( i in filterwords ){
    let res = fakeequal(filterwords[i], str);
    if(res >= 0){
      console.log("str1:" + filterwords[i] + " str2:" + str);
      return [filterwords[i], res];
    }
  }
  return null;
}

function fakeequal(str1, str2){
  //console.log(str1);
  //console.log(str2);
  let minlen = str1.length;
  if(minlen <= 0) return -1;
  let i = 0;
  for(; i < minlen; i++){
    if(str1[i] != str2[i]) return -1;
  }
  return i;
}


function maxlen(){
  var len = 0;
  for( i in filterwords ){
    if(filterwords[i].length > len) len = filterwords[i].length;
  }
  //console.log(len);
  return len;
}




function split_serifs(str){
  str = str.split(/(?:\r\n){1,}/g);
  console.log(str);
  return str;
}
