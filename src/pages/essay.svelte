<script>
  import Main from "./main.svelte";
  import PageList from "../components/pageList/pageList.svelte"
  import {ESSAY_URL} from "../store/path"

  const url = ESSAY_URL
  const quote_url = "";
  const quote_list = [""];
  const description = "";
  const hide_all_content = true;
</script>

<PageList {url}></PageList>