<script lang="ts">
  import { onMount } from "svelte";

  import type { IPostSummary } from "../../interface/IPostSummary";
  import SpinnerFacebook from "../common/icons/SpinnerFacebook.svelte";
  import Pagination from "./pagination.svelte";
  import Footer from "../post/footer.svelte";

  import PostItem from "./postItem.svelte";
  import {
    current_page_number,
    DEFAULT_NUMBER_PER_PAGE,
  } from "../../config/config";
  import Searchbar from "../search/searchbar.svelte";

  export let docListUrl: string;

  var _content_list: IPostSummary[];

  // todo: pagination
  // var pageNum = 0;
  // var contentNumberPerPage = default_number_per_page;

  // todo: only from main/about/project will have anime
  // const animation: string = "animated fadeIn";

  onMount(async () => {
    if (!docListUrl) {
      return;
    }
    let fetchRes = await fetch(docListUrl);
    _content_list = <IPostSummary[]>await fetchRes.json();
  });
</script>

<div class={"pagelist "}>
  <div class="home">
    <br />
    <div class="row relative table lg:flex justify-between ">
      <div class="order-2">
        <Searchbar content_list={_content_list} />
      </div>
      <h1 class="page-heading capitalize order-1">Article List</h1>
    </div>

    {#if _content_list}
      <Pagination content_list={_content_list}>
        {#each _content_list as post, i}
          {#if i >= $current_page_number * DEFAULT_NUMBER_PER_PAGE && i < ($current_page_number + 1) * DEFAULT_NUMBER_PER_PAGE}
            <PostItem {post} />
          {/if}
        {/each}
      </Pagination>
    {:else}
      <SpinnerFacebook />
    {/if}
  </div>
</div>

<Footer />

<style lang="scss">
  .page-heading {
    padding-top: 0.75rem;
  }
</style>
