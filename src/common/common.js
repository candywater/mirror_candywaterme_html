
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getRandomIntFromZero(max) {
  return getRandomInt(0, max);
}

// https://gist.github.com/comficker/871d378c535854c1c460f7867a191a5a#file-hex2rgb-js
export function hex2RGB (str){
  const RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;
  const [ , short, long ] = String(str).match(RGB_HEX) || [];

  if (long) {
    const value = Number.parseInt(long, 16);
    return [ value >> 16, value >> 8 & 0xFF, value & 0xFF ];
  } else if (short) {
    return Array.from(short, s => Number.parseInt(s, 16)).map(n => (n << 4) | n);
  }
};

export function getRandomQuote(list){
  return list[getRandomInt(0, list.length - 1)]
}

export function splitSerifs(str){
  str = str.split(/(?:\r\n){2,}/g);
  for(var ele in str ){
    str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
  } 
  return str;
}