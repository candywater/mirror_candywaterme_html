<script lang='ts'>
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte"
  import {ESSAY_URL} from "../config/path"

  export let firstShow: boolean;

  const url = ESSAY_URL
  const quote_url = "";
  const quote_list = [""];
  const description = "";

  const hide_main_block = true;
</script>

{#if firstShow}
  <Main {quote_url} {quote_list} {description} isHide={hide_main_block} />
{/if}
<PostList {url}></PostList>

