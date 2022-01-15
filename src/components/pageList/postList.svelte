<script lang="ts">
  import { onMount } from "svelte";

  import type { IPostSummary } from "../../interface/IPostSummary";
  import SpinnerFacebook from "../common/icons/SpinnerFacebook.svelte";
  import Pagination from "./pagination.svelte";

  export let docListUrl: string;

  var _content_list: IPostSummary[];

  // todo: pagination
  // var pageNum = 0;
  // var contentNumberPerPage = default_number_per_page;

  // todo: only from main/about/project will have anime
  const animation: string = "animated fadeIn";

  onMount(async () => {
    if (!docListUrl) {
      return;
    }
    let fetchRes = await fetch(docListUrl)
    _content_list = <IPostSummary[]>await fetchRes.json();
    
  });
</script>

<div class={"pagelist "}>
  <div class="home">
    <br />
    <div class="row" style="position: relative;">
      <h1 class="page-heading capitalize">Article List</h1>
    </div>

    {#if _content_list}
      <!-- promise was fulfilled -->
      <Pagination content_list={_content_list} />
    {:else}
      <SpinnerFacebook />
    {/if}
  </div>
</div>
