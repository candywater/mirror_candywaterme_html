<script lang="ts">
  import type { IPostHeader } from "../../interface/IPostHeader";

  import { markdownParse } from "./markdownParse";
  import { extractYaml, yamlParse } from "./yamlParse";
  // front-matter has a bit size, do not use it
  // import frontmatter from "front-matter"

  export let docurl: string;

  let renderedContent: string = "";
  let header : IPostHeader 

  onLoad();

  async function onLoad() {
    if (!docurl) return;
    // console.log(docurl)
    let content: string = await (await fetch(docurl)).text();

    let yamlContent = extractYaml(content);
    header = yamlParse(yamlContent); // todo: should take value from json file

    let markdownContent = content.replace(yamlContent, ""); //https://github.com/markedjs/marked/issues/485
    renderedContent = markdownParse(markdownContent);
  }
</script>

<div>
  <h1>{header?.title}</h1>
  {@html renderedContent}
</div>
