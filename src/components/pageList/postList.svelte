<script lang="ts">
  // import { default_number_per_page } from "../../config/config";
  import page from "page.js";
  import type { IPostSummary } from "./IPost";
  import { DocUrl2BlogUrl } from "../../common/common";
  import Post from "../post/post.svelte";

  export let docUrl: string;

  var content_list: IPostSummary[] = [];

  // todo: pagination
  // var pageNum = 0;
  // var contentNumberPerPage = default_number_per_page;

  const animation: string = "animated fadeIn";

  onLoad();

  async function onLoad() {
    if (!docUrl) {
      return;
    }
    content_list = await (await fetch(docUrl)).json();
  }

  function jump_to_blog(e: MouseEvent, url: string) {
    e.preventDefault();

    let parsedUrl = DocUrl2BlogUrl(url);
    page(parsedUrl);
  }
</script>

<div class={"pagelist " + animation}>
  <div class="home">
    <br />
    <div class="row" style="position: relative;">
      <h1 class="page-heading">Article List</h1>
    </div>

    {#await content_list}
      <!-- promise is pending -->
      <p>waiting for query</p>
    {:then content_list}
      <!-- promise was fulfilled -->
      <ul class="post-list">
        {#each content_list as post}
          <li>
            <span class="post-meta">{post.date}</span>

            <h2>
              <a
                class="post-link"
                href={post.url}
                on:click={(e) => {
                  jump_to_blog(e, post.url);
                }}>{post.title}</a
              >
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


