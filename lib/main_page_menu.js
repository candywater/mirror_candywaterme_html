
/*
  <form class="" action="/blog/_site/tech_blog">
  <button type="submit" class="btn btn-success btn-block" name="button" id="blog_btn"
  onclick="jump_to_blog()">Blog</button>
  </form>
*/
/*
function menu_common_process(id, path){
  let btn = document.getElementById(id);
  btn.className += " btn-lg";
  var form_outer = document.createElement("form");
  form_outer.child = btn;
  btn = form_outer;
}

let menu = "";
menu += <br>
menu += <br>
menu += <div class="btn-group-vertical btn-group-lg btn-group-block">

menu +=   <form action="/blog/_site/tech_blog">
menu +=   <button type="button" class="btn btn-success btn-block btn-lg" name="button" id="blog_btn">Blog</button>
menu +=   </form>
menu +=   <button type="button" class="btn btn-info btn-lg" name="button" id="essay_btn">Essay</button>
  <button type="button" class="btn btn-primary btn-lg" name="button" id="project_btn">Project</button>
  <br>
</div>
<br>
<button type="button" class="btn btn-danger btn-block btn-lg" name="button" id="about_btn">About</button>
menu += <button type="button" class="btn btn-warning btn-block btn-lg" name="button" id="main_btn">Main</button>
menu += <br>
*/

function jump_to_blog(){
  window.location = ("/blog/_site/tech_blog");
}

function jump_to_essay(){
  window.location = ("/blog/_site/essay_blog");

}

function jump_to_about(){
  window.location = ("/about");
}

function jump_to_project(){
  window.location = ("/project")
}

function jump_to_main(){
  window.location = ("/")
}

/*
<br>
<br>
<div class="btn-group-vertical btn-group-lg btn-group-block">
  <button type="button" class="btn btn-success btn-block btn-lg" name="button" id="blog_btn"
  onclick="jump_to_blog()">Blog</button>
  <button type="button" class="btn btn-info btn-lg" name="button" id="essay_btn"
  onclick="jump_to_essay()">Essay</button>
  <button type="button" class="btn btn-primary btn-lg" name="button" id="project_btn"
  onclick="jump_to_project()">Project</button>
  <br>
</div>
<br>
<button type="button" class="btn btn-danger btn-block btn-lg" name="button" id="about_btn"
onclick="jump_to_about()">About</button>
<button type="button" class="btn btn-warning btn-block btn-lg" name="button" id="main_btn"
onclick="jump_to_main()">Main</button>
<br>
*/
