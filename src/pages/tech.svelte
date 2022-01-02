<script lang='ts'>
  import Main from "./main.svelte";
  import PageList from "../components/pageList/pageList.svelte"
  import {TECH_URL} from "../store/path"

  const url = TECH_URL
  const quote_url = "";
  const quote_list = [""];
  const description = "";
  const hide_main_block = true;
</script>

<Main {quote_url} {quote_list} {description} isHide={hide_main_block}/>
<PageList {url}></PageList>
