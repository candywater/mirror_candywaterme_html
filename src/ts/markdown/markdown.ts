import type { IHeaderPair } from "../interface/IHeaderPair";
import type { IPostHeader } from "../interface/IPostHeader";
import type { IPostSummary } from "../interface/IPostSummary";
import { markdownParse, HeaderList } from "./markdownParse";
import { extractYaml, yamlParse } from "./yamlParse";

let _index_list: string[] = [];
let _content_list: IPostSummary[] = [];

export async function markDown(
  docurl: string,
  indexUrl: string,
  contentUrl: string,
): Promise<{
  header: IPostHeader;
  renderedContent: string;
  headerList: IHeaderPair[];
  contentList: IPostSummary[];
}> {
  if (!docurl) return;
  // console.log(docurl)
  let res = await fetch(docurl);
  if (!res.ok) return;
  let content: string = await res.text();

  let [yamlContent, markdownContent] = extractYaml(content);
  let header = yamlParse(yamlContent);
  //let header = await fetchData(docurl, indexUrl, contentUrl);

  // let markdownContent = content.replace(yamlContent, ""); //https://github.com/markedjs/marked/issues/485
  let renderedContent = markdownParse(markdownContent);

  return {
    header,
    renderedContent,
    headerList: HeaderList,
    contentList: _content_list,
  };
}

async function fetchData(
  docurl: string,
  indexUrl: string,
  contentUrl: string,
): Promise<IPostSummary> {
  let res = await fetch(indexUrl);
  if (!res.ok) return;
  let index_content = await res.text();
  _index_list = index_content.split(/[\n]/g);
  _content_list = <IPostSummary[]>await (await fetch(contentUrl)).json();

  let index = await _index_list.findIndex((val) => val == docurl);
  return await _content_list[index];
}
