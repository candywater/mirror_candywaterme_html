<script lang="ts">
  import type { IPostHeader } from "../../interface/IPostHeader";
  import { ESSAY, path, TECH } from "../../config/path";

  import { markdownParse } from "./markdownParse";
  import { extractYaml, yamlParse } from "./yamlParse";
  import type { IPostSummary } from "../../interface/IPostSummary";
  import { FormatDate } from "../../common/common";
  import CcByNcSaIcon from "../common/CCByNcSaIcon.svelte";
  import CcByIcon from "../common/CCByIcon.svelte";
  import CcByNcIcon from "../common/CCByNcIcon.svelte";
  import Spinner from "../common/Spinner.svelte";
  // front-matter has a bit size, do not use it
  // import frontmatter from "front-matter"

  export let docurl: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let _renderedContent: string ;
  let _header: IPostHeader ;

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
    <h1 class="post-title">
      {#await _header}
        <Spinner />
      {:then _header}
        {_header?.title}
      {/await}
    </h1>
  </div>
  <p class="post-meta">
    <time>
      {#await _header}
        <Spinner />
      {:then _header}
        {FormatDate(_header?.date)}
      {/await}
    </time>
  </p>
</header>
<hr />

<div class="page-content">
  {#await _renderedContent}
    <Spinner />
  {:then _renderedContent}
    {@html _renderedContent}
  {/await}
  <br />
  {#if $path == ESSAY}
    <CcByNcSaIcon />
  {:else if $path == TECH}
    <CcByIcon />
  {:else}
    <CcByNcIcon />
  {/if}
  <br />
</div>
