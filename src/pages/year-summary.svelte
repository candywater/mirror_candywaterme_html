<script lang="ts">
    import Main from "./main.svelte";
    import PostList from "../components/pageList/postList.svelte";
    import { YEAR_SUMMARY_URL } from "../config/path";
    import MainMenuNav from "../layout/MainMenuLayout.svelte";
  
    export let firstTimeShow: boolean;
  
    const docListUrl = YEAR_SUMMARY_URL;
    const quote_url = "";
    const quote_list = [""];
    const description = "";
    const hide_main_block = true;
  
    firstTimeShow = false;
  </script>
  
  {#if firstTimeShow}
    <Main
      {quote_url}
      {quote_list}
      {description}
      firstTimeShow={false}
      isHide={hide_main_block}
    />
  {/if}
  <MainMenuNav />
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </main>
  