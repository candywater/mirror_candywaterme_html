<script lang="ts">
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte";
  import { YEAR_SUMMARY_URL } from "../config/path";
  import SideMainMenuLayout from "../template/SideMainMenuLayout.svelte";


  const docListUrl = YEAR_SUMMARY_URL;
  const quote_url = "";
  const quote_list = [""];
  const description = "";
  const hide_main_block = true;

</script>

<SideMainMenuLayout>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </main>
</SideMainMenuLayout>
