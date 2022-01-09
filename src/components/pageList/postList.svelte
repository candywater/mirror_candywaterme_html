<script lang="ts">
  import { onMount } from "svelte";
  import { FormatDateSimple } from "../../common/common";

  import type { IPostSummary } from "../../interface/IPostSummary";
  import Spinner from "../common/Spinner.svelte";
import SpinnerFacebook from "../common/SpinnerFacebook.svelte";
import Pagination from "./pagination.svelte";
import PostItem from "./postItem.svelte";

  export let docListUrl: string;

  var _content_list: IPostSummary[];

  // todo: pagination
  // var pageNum = 0;
  // var contentNumberPerPage = default_number_per_page;

  const animation: string = "animated fadeIn";

  onMount(async () => {
    if (!docListUrl) {
      return;
    }
    _content_list = <IPostSummary[]>await (await fetch(docListUrl)).json();
  });
</script>

<div class={"pagelist " + animation}>
  <div class="home">
    <br />
    <div class="row" style="position: relative;">
      <h1 class="page-heading">Article List</h1>
    </div>

    {#if _content_list }
      <!-- promise was fulfilled -->
      <Pagination content_list={_content_list}></Pagination>
    {:else}
      <SpinnerFacebook />
    {/if}
  </div>
</div>
