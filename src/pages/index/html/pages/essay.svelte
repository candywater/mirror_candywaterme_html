<script lang="ts">
  import PostList from "../components/pageList/postList.svelte";
  import { SiteInfo } from "@/ts/config/siteinfo";
  import { ESSAY_URL } from "@/ts/config/path";
  import SideMainMenuLayout from "../template/SideMainMenuLayout.svelte";
  import { onMount } from "svelte";

  const docListUrl = ESSAY_URL;

  onMount(async () => {
    SiteInfo.set({
      ...$SiteInfo,
      title: "candywater" + " - essay",
    });
  });
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
