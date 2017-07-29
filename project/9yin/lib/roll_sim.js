var input_names;
var input_scores;
var input_map;

jQuery(function(){
})

function calc(){
  input_names = jQuery("#input_names").val();
  input_names = input_names.split(",");
  input_names.forEach(function(item, i){
    input_names[i] = item.replace(/\s/g, "");
  })
  roll_sim(input_names.length);
}

function reset_sim(){
  jQuery("#input_names").val("");
}

function roll_sim(i){
  input_scores = [];
  for(let a = 0; a < i; ++a)
    input_scores.push( (Math.random()*1000).toFixed()%100 );

  input_map = new Map();
  for(let a = 0; a < i; ++a)
    if(input_map.get(input_scores[a]) == undefined)
      input_map.set(input_scores[a], "" + a);
    else
      input_map.set(input_scores[a], input_map.get(input_scores[a]) + "," + a);

  input_scores.sort();
  console.log(input_scores);
  console.log(input_map);
  output_sim();
}

function output_sim(){
  let str = "";
  let count = 0;
  let front_score = -1;
  for(let i = input_scores.length - 1; i >= 0; --i){
    let array_same_score = input_map.get(input_scores[i]).split(",");
    if(front_score == array_same_score[0]) continue;
    front_score = array_same_score[0];
    array_same_score.forEach(function(ia){
      let index_of_names = ia;
      str +=  (++count) + "[" + input_scores[i] + "]:" + input_names[index_of_names] + "\n";
    })
  }
  jQuery("#output_names").val(str);
}

function output_list(){

}
