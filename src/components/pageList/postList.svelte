<script lang="ts">
  import { default_number_per_page } from "../../config/config";
  import page from "page.js";
  import type { IPostSummary } from "./IPost";
import { parseBlogUrl } from "../../common/common";

  export let url;

  var content_list: IPostSummary[] = [];

  // todo: pagination
  var pageNum = 0;
  var contentNumberPerPage = default_number_per_page;

  const animation: string = "animated fadeIn";

  onLoad();

  async function onLoad() {
    if (!url) {
      return;
    }
    content_list = await (await fetch(url)).json();
  }

  function jump_to_blog(e: MouseEvent, url: string) {
    e.preventDefault();

    let parsedUrl = parseBlogUrl(url);
    page(parsedUrl);
  }
</script>

<div class={"pagelist " + animation}>
  {#await content_list}
    <!-- promise is pending -->
    <p>waiting for query</p>
  {:then content_list}
    <!-- promise was fulfilled -->
    {#each content_list as post}
      <p>
        <a
          href={post.url}
          on:click={(e) => {
            jump_to_blog(e, post.url);
          }}>{post.title}</a
        >
      </p>
    {/each}
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="scss">
  .pagelist {
    position: absolute;
    top: 0%;
  }
</style>
