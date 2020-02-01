import "jquery"
import "./copyleft.js"

var meow_flag = false;
var credit_info_flag = false;
jQuery(function(){
  jQuery("#meow").hide();
  jQuery("#credit_info").hide();

  jQuery("#profile_photo").click(function(){
    meow_flag = !meow_flag;
    if(meow_flag)
      jQuery("#meow").show();
    else {
      jQuery("#meow").hide();
    }
    //jQuery("#meow").animate({left:"250px"})
  })

  jQuery("#credit").click(function(){
    credit_info_flag = !credit_info_flag;
    if(credit_info_flag)
      jQuery("#credit_info").show();
    else {
      jQuery("#credit_info").hide();
    }

  })


})
