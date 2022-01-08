
import type { IPostHeader } from "../../interface/IPostHeader";
import { markdownParse } from "./markdownParse";
import { extractYaml, yamlParse } from "./yamlParse";
import type { IPostSummary } from "../../interface/IPostSummary";




let _index_list: string[] = [];
let _content_list: IPostSummary[] = [];

export async function markDown
  (docurl: string, indexUrl: string, contentUrl: string)
  : Promise<{ header: IPostHeader, renderedContent: string }> {
  if (!docurl) return;
  // console.log(docurl)
  let content: string = await (await fetch(docurl)).text();

  let yamlContent = extractYaml(content);
  // _header = yamlParse(yamlContent);
  let header = await fetchData();

  let markdownContent = content.replace(yamlContent, ""); //https://github.com/markedjs/marked/issues/485
  let renderedContent = markdownParse(markdownContent);

  return { header, renderedContent }
}

async function fetchData() {
  let index_content = await (await fetch(indexUrl)).text();
  _index_list = index_content.split(/[\n]/g);
  _content_list = <IPostSummary[]>await (await fetch(contentUrl)).json();

  let index = await _index_list.findIndex((val) => val == docurl);
  return await _content_list[index];
}
