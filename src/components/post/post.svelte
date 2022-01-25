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
  // import Player from "../musicplayer/player.svelte";

  export let docUrl: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let _renderedContent: string;
  let _header: IPostHeader;
  let _header_list: IHeaderPair[] = [];

  onMount(async () => {
    let res = await markDown(docUrl, indexUrl, contentUrl);
    if(!res) return;
    _header = res.header;
    _renderedContent = res.renderedContent;
    _header_list = res.headerList;
  });
</script>

<svelte:head>
  <title>{_header ? _header.title : "欢迎━(*｀∀´*)ノ亻!"}</title>
</svelte:head>

<article class="post">
  <header class="post-header">
    <div class="post-title">
      <h1 class="post-title capitalize">
        {#if _header?.title}
          {_header?.title}
        {/if}
      </h1>
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
    <!-- {#if _header?.bgm}
      <Player bgm_list={_header.bgm} />
    {/if} -->
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
</article>
