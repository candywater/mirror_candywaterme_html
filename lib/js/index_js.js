var profile_flag = false;
//jQuery("#profile_photo").trigger("click");
//words of slide_down_words
var slide_down_words = ['happy a new day!'];

jQuery(function(){
  //i dont why, but i cannot write this req with jQuery..... = =
  get_serifs();

  jQuery("#about_profile").hide();
  jQuery("#below_about_profile").hide();
  jQuery("#profile_photo").click(show_or_hide);
});

function get_serifs(){
  let req = {
    method: "GET",
    url: "/lib/doc/index_serifs.md",
    dataType: "text",//seems useless...... = =||
  };

  let xhr = new XMLHttpRequest();
  xhr.timout = 3000;//can not wait for more than 3 seconds!!
  xhr.open(req.method, req.url, true);
  xhr.onprogress = function(){console.log("just wait for loading....");}
  xhr.onload = function(res){slide_down_words = split_serifs(res.target.responseText);}
  xhr.send(null);
}

function split_serifs(str){
  str = str.split("\r\n\r\n");
  for( ele in str ){
    str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
  }
  console.log(str);
  return str;
}

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
  let rand = Math.random() * 10000;
  rand = rand.toFixed(0) % slide_down_words.length;

  if(!profile_flag){
    console.log(rand);
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
