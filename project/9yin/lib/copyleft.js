
jQuery(function(){
  jQuery("body").append(jQuery("<br>"));

  let block = jQuery('<p id="copyleft_block"></p>');
  jQuery("body").append(block);
  block.css({
    "text-align" : "right"
  });

  let copyleft_str = jQuery('<span id="copyleft"></span>').html('&copy;copyleft, by shuiyu,tang(唐水羽)');
  block.append(copyleft_str);
  copyleft_str.css({
    "background-color" : "rgba(254,254,254,0.4)"
  });

});
