<script>
  import Main from "./main.svelte";
  import PageList from "../components/pageList/pageList.svelte"
  import {TECH_URL} from "../store/path"

  const url = TECH_URL
</script>

<PageList {url}></PageList>
