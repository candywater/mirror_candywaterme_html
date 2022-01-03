<script lang='ts'>
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte"
  import {TECH_URL} from "../config/path"

  export let firstShow: boolean;
  
  const url = TECH_URL
  const quote_url = "";
  const quote_list = [""];
  const description = "";
  const hide_main_block = true;
</script>

<Main {quote_url} {quote_list} {description} isHide={hide_main_block}/>
<PostList {url}></PostList>
