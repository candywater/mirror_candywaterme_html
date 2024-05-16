<script lang="ts">
  import PostList from "../components/pageList/postList.svelte";
  import { YEAR_SUMMARY_URL } from "@/ts/config/path";
  import SideMainMenuLayout from "../template/SideMainMenuLayout.svelte";


  const docListUrl = YEAR_SUMMARY_URL;

</script>

<SideMainMenuLayout>
  <div class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </div>
</SideMainMenuLayout>
