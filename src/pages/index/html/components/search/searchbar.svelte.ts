import type { IPostSummary } from "@/ts/interface/IPostSummary";
import type { IResultItem } from "@/ts/interface/IResultItem";

export let content_list: IPostSummary[];

const SEARCH_NO_ITEM: string = "No Result";

let _res_list: IResultItem[] = [];
let _width: number;
let _search_key: string;

const isSafari =
  navigator.userAgent.includes("Safari/") &&
  navigator.userAgent.includes("Version/");
let _is_composing: boolean = false;

/**
 * todo:
 *  - https://qiita.com/darai0512/items/fac4f166c23bf2075deb
 *  - https://blog.utgw.net/entry/2021/06/29/212256
 * @param e
 */
function oninput(e: Event) {
  // console.log((<InputEvent>e).inputType);
  // console.log((<InputEvent>e).isComposing);
  // console.log((<InputEvent>e).data);
  // console.log("===========");
  if ((<InputEvent>e).isComposing) return;
  // if (_is_composing) return;
  search((<HTMLInputElement>e.target).value);
}

function onComposingStart() {
  _is_composing = true;
}
function onComposingEnd() {
  _is_composing = false;
}

function onfocusout() {
  // to avoid cannot jump issue
  if (_search_key) return;
  _res_list = [];
}

function search(key: string) {
  _res_list = [];
  for (const [_key, value] of Object.entries(content_list)) {
    if (existKey(value.title, key)) {
      addSearchItem(value.title, value.url, value.title);
    }
    if (existKey(value.summary, key)) {
      addSearchItem(value.summary, value.url, value.title);
    }
    if (existKey(value.tags?.toString(), key)) {
      addSearchItem(value.tags.toString(), value.url, value.title), value.title;
    }
    if (existKey(value.tag, key)) {
      addSearchItem(value.tag, value.url, value.title);
    }
    if (existKey(value.date?.toString(), key)) {
      // let date = new Date(key);
      // if (date && value.date == date)
      addSearchItem(value.date.toString(), value.url, value.title);
    }
    if (_res_list.length > 5) {
      addSearchItem("...", "", "");
      break;
    }
  }
  if (_res_list.length == 0 && key) {
    addSearchItem(SEARCH_NO_ITEM, "", "");
  }
  // console.log(_res_list);
}

function existKey(search: string, key: string): boolean {
  if (search && key && search.toLowerCase().includes(key.toLowerCase())) {
    return true;
  }
  return false;
}

function addSearchItem(value: string, url: string, title: string) {
  let duplicate = false;
  _res_list.forEach((element) => {
    if (element.url == url) duplicate = true;
  });
  if (duplicate) return;
  _res_list.push({
    result: value,
    url: url,
    title: title,
  });
}
