<script lang="ts">
  import type { IPostHeader } from "../../interface/IPostHeader";
  import { ESSAY, path, TECH } from "../../config/path";

  import { markdownParse } from "./markdownParse";
  import { extractYaml, yamlParse } from "./yamlParse";
  import type { IPostSummary } from "../../interface/IPostSummary";
  // front-matter has a bit size, do not use it
  // import frontmatter from "front-matter"

  export let docurl: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let _renderedContent: string = "";
  let _header: IPostHeader = {
    title: "　",
    date: new Date(),
  };

  let _index_list: string[] = [];
  let _content_list: IPostSummary[] = [];

  onLoad();

  async function fetchData() {
    let index_content = await (await fetch(indexUrl)).text();
    _index_list = index_content.split(/[\n]/g);
    _content_list = <IPostSummary[]>await (await fetch(contentUrl)).json();

    let index = await _index_list.findIndex((val) => val == docurl);
    return await _content_list[index];
  }
  async function onLoad() {
    if (!docurl) return;
    // console.log(docurl)
    let content: string = await (await fetch(docurl)).text();

    let yamlContent = extractYaml(content);
    // _header = yamlParse(yamlContent); // todo: should take value from json file
    _header = await fetchData();

    let markdownContent = content.replace(yamlContent, ""); //https://github.com/markedjs/marked/issues/485
    _renderedContent = markdownParse(markdownContent);
  }
</script>

<svelte:head>
  <title>{_header?.title}</title>
</svelte:head>

<header class="post-header">
  <div class="post-title">
    {#await _header}
      {#if $path == ESSAY}
        <h1 class="post-title"><div class="lds-heart"><div /></div></h1>
      {:else}
        <h1 class="post-title"><div class="lds-circle"><div /></div></h1>
      {/if}
    {:then _header}
      <h1 class="post-title">{_header?.title}</h1>
    {/await}
  </div>
  <p class="post-meta">
    {#await _header}
      {#if $path == ESSAY}
        <time><div class="lds-heart"><div /></div></time>
      {:else}
        <time><div class="lds-circle"><div /></div></time>
      {/if}
    {:then _header}
      <time>{_header?.date}</time>
    {/await}
  </p>
</header>
<hr />

<div class="page-content">
  {#await _renderedContent}
    <div class="lds-circle"><div /></div>
  {:then _renderedContent}
    {@html _renderedContent}
  {/await}
  <br />
  {#if $path == ESSAY}
    <a
      rel="license"
      target="_blank"
      href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
      ><img
        alt="creativ common license"
        style="border-width:0"
        src="/assets/logos/cc/by_nc_sa_4.0.png"
      /></a
    >
  {:else if $path == TECH}
    <a
      rel="license"
      target="_blank"
      href="http://creativecommons.org/licenses/by/4.0/"
      ><img
        alt="creativ common license"
        style="border-width:0"
        src="/assets/logos/cc/by_4.0.png"
      /></a
    >
  {:else}
    <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"
      ><img
        alt="Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)"
        style="border-width:0"
        src="/assets/logos/cc/by_nc_4.0.png"
      /></a
    >
  {/if}
  <br />
</div>
