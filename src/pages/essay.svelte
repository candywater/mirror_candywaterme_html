<script lang="ts">
  import PostList from "../components/pageList/postList.svelte";
  import { ESSAY_URL } from "../config/path";
  import SideMainMenuLayout from "../template/SideMainMenuLayout.svelte";

  const docListUrl = ESSAY_URL;

</script>

<svelte:head>
  <title>Essay</title>
</svelte:head>

<SideMainMenuLayout>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </main>
</SideMainMenuLayout>

