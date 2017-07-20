var profile_flag = false;

jQuery(function(){
  jQuery("#about_profile").hide();
  jQuery("#below_about_profile").hide();

  jQuery("#profile_photo").click(function(){
    if(!profile_flag){
      jQuery("#about_profile").slideDown();
      jQuery("#below_about_profile").slideDown();
    }
    else {
      jQuery("#about_profile").slideUp();
      jQuery("#below_about_profile").slideUp();
    }
    profile_flag = !profile_flag;
  });
});

function jump_to_blog(){
  //window.location = ("./blog_tech/");
}

function jump_to_essay(){

}

function jump_to_about(){
  window.location = ("./about/");
}
