import { element } from "svelte/internal";
import type { IPostHeader } from "../interface/IPostHeader";

/**
 * warning: cannot parse array
 * @param content
 * @returns
 */
export function yamlParse(content): any {
  //https://stackoverflow.com/questions/454908/split-java-string-by-new-line
  //https://stackoverflow.com/questions/8125709/javascript-how-to-split-newline
  let array = content.split(/\r?\n/);
  let result: IPostHeader = {};
  let lastKey = 'lastkey';
  array.forEach((line) => {
    if (line.startsWith("---")) {
      return;
    }

    // for array
    if (line.trim().startsWith("-")){
      if(!Array.isArray(result[lastKey])){
        result[lastKey] = []
      }
      result[lastKey].push(line.trim().substring(1).trim())
      return;
    }

    // for plain text
    let keyvalue = line.split(/[:|：]/);
    if (keyvalue.length >= 2) {
      let key = keyvalue[0].trim();
      lastKey = key;
      let value = line.replace(keyvalue[0] + ':', '').trim();
      result[key] = value;
      // for date format : 2017-07-13 +0900
      if(value.match(/^\d{4}-\d{1,2}-\d{1,2}\s+\+\d{4}$/)){
        result[key] = value.replace(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+\+(\d{4})$/, "$1 $2 $3 00:00:00 GMT+$4")
      }

      return;
    }
  });
  return result;
}

export function extractYaml(content): [string, string] {
  //https://github.com/markedjs/marked/issues/485
  // this will use 貪欲的探索
  // let res = content.match(/^---$.*^---$/ms);
  // if (res && res.length > 0) {
  //   return res[0];
  // }
  let yaml = ""
  let body = ""
  let array = content.split(/\r?\n/);
  let yamlSplitterCounter = 0;
  array.forEach(line => {
    if (line.startsWith("---")) {
      yamlSplitterCounter++;
    }
    if (yamlSplitterCounter < 2){
      yaml += line + "\n"
    }
    else {
      body += line + "\n"
    }
  });
  return [yaml, body];
}
