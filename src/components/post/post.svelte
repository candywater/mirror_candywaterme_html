<script lang="ts">
  import type { IPostHeader } from "../../interface/IPostHeader";
  import { FormatDate } from "../../common/common";
  import { onMount } from "svelte";

  import { markDown } from "../markdown/markdown";
  import Comment from "../comment/comment.svelte";
  import Spinner from "../common/icons/Spinner.svelte";
  import CcIcon from "../common/icons/CCIcon.svelte";
  import Headerlist from "./headerlist.svelte";
  import type { IHeaderPair } from "../../interface/IHeaderPair";
  import Player from "../musicplayer/player.svelte";
  import Footer from "./footer.svelte";
  import Searchbar from "../search/searchbar.svelte";
  import type { IPostSummary } from "../../interface/IPostSummary";

  export let docUrl: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let _content_list: IPostSummary[];

  let _renderedContent: string;
  let _header: IPostHeader;
  let _header_list: IHeaderPair[] = [];

  onMount(async () => {
    let res = await markDown(docUrl, indexUrl, contentUrl);
    if (!res) return;

    _header = res.header;
    _renderedContent = res.renderedContent;
    _header_list = res.headerList; // sub headers list
    _content_list = res.contentList; // all posts
    
  });
</script>

<svelte:head>
  <title>{_header ? _header.title : "欢迎━(*｀∀´*)ノ亻!"}</title>
  {#if _header?.urls}
    {#each _header.urls as url}
      <script src={url} async></script>
    {/each}
  {/if}
</svelte:head>

<article class="post">
  <header class="post-header">
    <div class="row relative table lg:flex justify-between ">
      <div class="order-2">
        <Searchbar content_list={_content_list} />
      </div>
      <!-- <h1 class="page-heading capitalize order-1">Article List</h1> -->
      <div class="post-title">
        <h1 class="post-title capitalize">
          {#if _header?.title}
            {_header?.title}
          {/if}
        </h1>
      </div>
    </div>

    <p class="post-meta">
      <time>
        {#if _header}
          {FormatDate(_header?.date)}
        {/if}
      </time>

      <Headerlist headerList={_header_list} />
    </p>
  </header>
  <hr />

  <div class="post-content">
    {#if _header?.bgm}
      <Player bgm_list={_header.bgm} />
    {/if}
    {#if _renderedContent}
      {@html _renderedContent}
    {:else}
      <Spinner />
    {/if}
    <slot />
    <br />
    <CcIcon />
    <br />
  </div>
  <hr id="comment_hr" />
  <Comment />

  <Footer />

  <a
    href={location.href}
    on:click={() => {
      document.body.scrollIntoView();
    }}
    class="postarrow shadow">↑</a
  >
</article>

<style>
  .postarrow {
    position: fixed;
    padding: 10px;
    bottom: 1rem;
    right: -1rem;
    background-color: white;
  }
  .post-title {
    font-family: /*etna, */source-han-sans-simplified-c, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .post-content {
    font-family: source-han-sans-simplified-c, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
