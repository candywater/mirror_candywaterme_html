<script lang="ts">
  import { FormatDateSimple } from "@/ts/common/common";

  import type { IPostSummary } from "@/ts/interface/IPostSummary";

  export let post: IPostSummary;
</script>

<li>
  <span class="post-meta">{FormatDateSimple(post.date)}</span>

  <h2>
    <a class="post-link capitalize" href={post.url}>{post.title}</a>
    <p class="main-tags"><span>{post.summary}</span></p>
    <p class="main-tags">
      tags:
      <!-- svelte-ignore empty-block -->
      {#if !post.tags}{:else if typeof post.tags == "string"}
        {#each post.tags.split(" ") as tag}
          <span class="tags">{tag}</span>
        {/each}
      {:else if typeof post.tags == "object"}
        {#each post.tags as tag}
          <span class="tags">{tag}</span>
        {/each}
      {:else}
        <span class="tags">{post.tags}</span>
      {/if}
    </p>
  </h2>
</li>

<style lang="scss">
  .post-link {
    font-family: /*etna,*/ source-han-sans-simplified-c, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
