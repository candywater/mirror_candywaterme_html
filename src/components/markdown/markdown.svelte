<script lang="ts">
  import type { IPostHeader } from "../../interface/IPostHeader";
  import {ESSAY, path, TECH} from "../../config/path"

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

<svelte:head>
  <title>{header?.title}</title>
</svelte:head>

<div class="post-header">
  <div class="post-title">
    <h1>{header?.title}</h1>
  </div>
  <div class="post-meta"></div>
</div>

<div class="page-content">
  {@html renderedContent}
  <br>
  {#if $path == ESSAY }
    <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="creativ common license" style="border-width:0" src="/assets/logos/cc/by_nc_sa_4.0.png" /></a>
  {:else if $path == TECH}
    <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/4.0/"><img alt="creativ common license" style="border-width:0" src="/assets/logos/cc/by_4.0.png" /></a>
  {:else}
    <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)" style="border-width:0" src="/assets/logos/cc/by_nc_4.0.png" /></a>
  {/if}
  <br />
</div>
