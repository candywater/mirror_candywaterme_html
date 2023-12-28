import { BLOG_SRC_URL, DOC_SRC_URL } from "../config/path";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getRandomIntFromZero(max: number): number {
  return getRandomInt(0, max);
}

// https://gist.github.com/comficker/871d378c535854c1c460f7867a191a5a#file-hex2rgb-js
export function hex2RGB(str: string): Array<number> {
  const RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;
  const [, short, long] = String(str).match(RGB_HEX) || [];

  if (long) {
    const value = Number.parseInt(long, 16);
    return [value >> 16, (value >> 8) & 0xff, value & 0xff];
  } else if (short) {
    return Array.from(short, (s) => Number.parseInt(s, 16)).map(
      (n) => (n << 4) | n
    );
  }
}

export function getRandomQuote(list: string[]): string {
  if (!list) return "";
  return list[getRandomInt(0, list.length)];
}

export function splitSerifs(str: string): string[] {
  var strs = str.split(/(?:\r\n){2,}/g);
  for (var ele in strs) {
    strs[ele] = strs[ele].replace(/(?:\r\n)/g, "<br>");
  }
  return strs;
}

export function DocUrl2BlogUrl(docurl: string): string {
  return docurl.replace(DOC_SRC_URL, BLOG_SRC_URL).replace(/\.md$/, "");
}
export function BlogUrl2DocUrl(blogurl: string): string {
  // console.log(blogurl.replace(BLOG_SRC_URL, DOC_SRC_URL) + '.md')
  return blogurl.replace(BLOG_SRC_URL, DOC_SRC_URL) + ".md";
}

export function removeSpecialCharsInUrl(url: string): string {
  return url.replace(/[:\(\)\/\._-]/g, "");
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsTiny = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function FormatDate(d: Date): string {
  if (!d) return "";
  const date = new Date(d);
  const year = date.getFullYear(); // 2019
  const day = date.getDate(); // 1 based
  const monthIndex = date.getMonth(); // 0 based
  const dayIndex = date.getDay(); // 0 based
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${monthsTiny[monthIndex]} ${year} ${hour}:${min} (${days[dayIndex]})`;
}

export function FormatDateSimple(d: Date): string {
  if (!d) return "";
  const date = new Date(d);
  if (!date) return "";
  const year = date.getFullYear(); // 2019
  const day = date.getDate(); // 1 based
  const monthIndex = date.getMonth(); // 0 based
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${monthsTiny[monthIndex]} ${year} ${hour}:${min} `;
}

export function FormatDateYear(d: Date): string {
  if (!d) return;
  const date = new Date(d);
  const year = date.getFullYear(); // 2019
  return year.toString();
}
