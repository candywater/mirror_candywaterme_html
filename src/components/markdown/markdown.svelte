<script lang="ts">
  import { markdownParse } from "./markdownParse";
  import { yamlParse, extractYaml } from "./yamlParse";
  import type { IMarkDownHeader } from "./IMarkdownHeader";
  // front-matter has a bit size, do not use it
  // import frontmatter from "front-matter"

  export let docurl: string;

  let renderedContent: string = "";
  let header: IMarkDownHeader;

  onLoad();

  async function onLoad() {
    if (!docurl) return;
    // console.log(docurl)
    let content: string = await (await fetch(docurl)).text();

    let headerPlain: string = extractYaml(content);
    // header = yamlParse(headerPlain);

    let markdownContent = content.replace(/^---$.*^---$/ms, ""); //https://github.com/markedjs/marked/issues/485
    renderedContent = markdownParse(await markdownContent);
  }
</script>

<div>
  <!-- <h1>{header.title}</h1> -->
  {@html renderedContent}
</div>
