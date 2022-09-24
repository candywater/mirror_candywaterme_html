<script lang="ts">
  import PostList from "../components/pageList/postList.svelte";
  import { TECH_URL } from "../ts/config/path";
  import SideMainMenuLayout from "../template/SideMainMenuLayout.svelte";


  const docListUrl = TECH_URL;

</script>

<svelte:head>
  <title>Tech</title>
</svelte:head>

<SideMainMenuLayout>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </main>
</SideMainMenuLayout>
