<script lang="ts">
import { FormatDate } from "../../common/common";

  import { path, ESSAY } from "../../config/path";

  import type { IPostSummary } from "../../interface/IPostSummary";

  export let docListUrl: string;

  var content_list: IPostSummary[] = [];

  // todo: pagination
  // var pageNum = 0;
  // var contentNumberPerPage = default_number_per_page;

  const animation: string = "animated fadeIn";

  onLoad();

  async function onLoad() {
    if (!docListUrl) {
      return;
    }
    content_list = <IPostSummary[]>await (await fetch(docListUrl)).json();
  }
</script>

<div class={"pagelist " + animation}>
  <div class="home">
    <br />
    <div class="row" style="position: relative;">
      <h1 class="page-heading">Article List</h1>
    </div>

    {#await content_list}
      {#if $path == ESSAY}
        <div class="lds-heart"><div /></div>
      {:else}
        <div class="lds-circle"><div /></div>
      {/if}
    {:then content_list}
      <!-- promise was fulfilled -->
      <ul class="post-list">
        {#each content_list as post}
          <li>
            <span class="post-meta">{FormatDate(post.date)}</span>

            <h2>
              <a class="post-link" href={post.url}>{post.title}</a>
              <p class="main-tags">description: <span>{post.summary}</span></p>
              <p class="main-tags">
                tags: <span class="tags">{post.tags}</span>
              </p>
            </h2>
          </li>
        {/each}
      </ul>
    {:catch error}
      <!-- promise was rejected -->
      <p>Something went wrong: {error}</p>
    {/await}
  </div>
</div>
