var jq = jQuery.noConflict();

var markdown_conv = new showdown.Converter({tables:true});

function getArticle(id){
  jq.ajax({
    url: id,
    dataType: "text",
    success:function(res){
      let markdown_res = markdown_conv.makeHtml(res);
      jq("cw-article").html(markdown_res);
      //jq("#test-row").html(markdown_res);
    }
  });

}
