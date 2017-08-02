var meow_flag = false;
jQuery(function(){
  jQuery("#meow").hide();

  jQuery("#profile_photo").click(function(){
    meow_flag = !meow_flag;
    if(meow_flag)
      jQuery("#meow").show();
    else {
      jQuery("#meow").hide();
    }
    //jQuery("#meow").animate({left:"250px"})
  })
})
