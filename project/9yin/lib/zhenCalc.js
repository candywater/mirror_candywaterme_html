var zhenData;

var zhen_list = [
  ["增加血量上限:"],
  ["增加命中率","10层buff后爆发伤害:"],
  ["后5秒内反弹伤害百分比(上限为护盾值):","护盾值:"],
  ["爆发定身的层数:","8秒持续伤害，每秒伤害为："],
  ["击杀后加爆免:","爆率:","爆伤"]
];

var zhenFunc = [
  (l) => dilie_zhen(l),
  (l) => zhaixing_zhen(l),
  (l) => sanjue_zhen(l),
  (l) => daowang_zhen(l),
  (l) => sousha_zhen(l),
]



function calc_zhen(){
  let zhen_number = jq("#jieBaiZhen").val();
  let zhen_level  = jq("#jieBaiZhenLevel").val();
  console.log(zhen_number);
  console.log(zhen_level);

  zhenData = getZhenData();
  zhenFunc[zhen_number](zhen_level);
}

function zhen_real_damage(damages, zhen_level){
  let real_damage = damages[zhen_level] +
                      ( zhenData[0] + zhenData[1]) * 0.195
  let real_damage_left = real_damage + zhenData[2];
  let real_damage_right = real_damage + zhenData[3];
  return [real_damage_left, real_damage_right];
}

function dilie_zhen(zhen_level){
  let dilie_list = [
    277,458,681,943,1221,1538
  ];
  //console.log("lambda successed");
  jq("#zhenDamage").html("" + zhen_list[0][0] + dilie_list[zhen_level]);
}

function zhaixing_zhen(zhen_level){
  let mingzhong = [
    5,7,9,11,13,15
  ];
  let damages = [
    105,179,265,360,467,589
  ];
  let real_damages = zhen_real_damage(damages, zhen_level);
  jq("#zhenDamage").html("" + zhen_list[1][0] + mingzhong[zhen_level] + "%, "
                            + zhen_list[1][1] + real_damages[0] + "~" + real_damages[1]);
}

function sanjue_zhen(zhen_level){
  let fantan = [
    15,18,21,24,27,30
  ];
  let damages = [
    81,138,204,277,360,453
  ];
  let real_damages = zhen_real_damage(damages, zhen_level);
  jq("#zhenDamage").html("" + zhen_list[2][0] + fantan[zhen_level] + "%伤害, "
                            + zhen_list[2][1] + real_damages[0] + "~" + real_damages[1]);
}

function daowang_zhen(zhen_level){
  let levels = [
    12,12,10,10,8,8
  ];
  let damages = [
    81,138,204,277,360,453
  ];
  let real_damages = zhen_real_damage(damages, zhen_level);
  jq("#zhenDamage").html("" + zhen_list[3][0] + levels[zhen_level] + "层, "
                            + zhen_list[3][1] + real_damages[0] + "~" + real_damages[1]);
}

function sousha_zhen(zhen_level){
  let baomian = [
    6,8,10,12,14,16
  ];
  let baolv = [
    1,1,2,2,3,3
  ];
  let baoshang = [
    2,2,4,4,6,6
  ];
  jq("#zhenDamage").html("" + zhen_list[4][0] + baomian[zhen_level] + "%, "
                            + zhen_list[4][1] + baolv[zhen_level]  + "%, "
                            + zhen_list[4][2] + baoshang[zhen_level] + "%,持续14秒 ");
}





function getZhenData(){
  let magic = parseFloat( jq("#magic_property").val() );
  let physics= parseFloat( jq("#physics_property").val() );
  console.log("magic:" + magic);
  console.log("physics:" + physics);

  let weaponDamage_left = parseFloat( jq("#weaponDamage_left").val() );
  let weaponDamage_right = parseFloat( jq("#weaponDamage_right").val() );
  console.log("left:" + weaponDamage_left);
  console.log("right:" + weaponDamage_right);

  return [magic, physics, weaponDamage_left, weaponDamage_right];
}

function output(){

}


function calc_zhen_test(){
  jq("#weaponDamage_left").val("222.0");
  jq("#weaponDamage_right").val("333.0");
  jq("#magic_property").val("1234.0");
  jq("#physics_property").val("2234.0");
}

function calc_zhen_reset(){
  jq("#weaponDamage_left").val("");
  jq("#weaponDamage_right").val("");
  jq("#magic_property").val("");
  jq("#physics_property").val("");
  jq("#zhenDamage").html("");
}
