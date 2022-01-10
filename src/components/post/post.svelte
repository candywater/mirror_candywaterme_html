<script lang="ts">
  import type { IPostHeader } from "../../interface/IPostHeader";
  import { FormatDate } from "../../common/common";
  import { onMount } from "svelte";

  import { markDown } from "../markdown/markdown";
  import Comment from "../comment/comment.svelte";
  import Spinner from "../common/Spinner.svelte";
  import CcIcon from "../common/CCIcon.svelte";

  export let docUrl: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let _renderedContent: string;
  let _header: IPostHeader;

  onMount(async () => {
    let res = await markDown(docUrl, indexUrl, contentUrl);
    _header = res.header;
    _renderedContent = res.renderedContent;
  });
</script>

<svelte:head>
  <title>{_header?.title}</title>
</svelte:head>

<article class="post">
  <header class="post-header">
    <div class="post-title">
      <h1 class="post-title">
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
    </p>
  </header>
  <hr />

  <div class="page-content">
    {#if _renderedContent}
      {@html _renderedContent}
    {:else}
      <Spinner />
    {/if}
    <slot></slot>
    <br />
    <CcIcon />
    <br />
  </div>
  <hr id="comment_hr" />
  <Comment />
</article>
