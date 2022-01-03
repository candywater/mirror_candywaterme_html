<script lang="ts">
  import { markdownParse } from "./markdownParse";
  import { extractYaml } from "./yamlParse";
  // front-matter has a bit size, do not use it
  // import frontmatter from "front-matter"

  export let docurl: string;

  let renderedContent: string = "";

  onLoad();

  async function onLoad() {
    if (!docurl) return;
    // console.log(docurl)
    let content: string = await (await fetch(docurl)).text();

    extractYaml(content);

    let markdownContent = content.replace(/^---$.*^---$/ms, ""); //https://github.com/markedjs/marked/issues/485
    renderedContent = markdownParse(markdownContent);
  }
</script>

<div>
  <!-- <h1>{header.title}</h1> -->
  {@html renderedContent}
</div>
