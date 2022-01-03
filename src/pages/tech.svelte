<script lang="ts">
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte";
  import { TECH_URL } from "../config/path";

  export let firstTimeShow: boolean;

  const url = TECH_URL;
  const quote_url = "";
  const quote_list = [""];
  const description = "";
  const hide_main_block = true;
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
<PostList {url} />
