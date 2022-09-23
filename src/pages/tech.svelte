<script lang="ts">
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte";
  import { TECH_URL } from "../config/path";
  import MainMenuNav from "../layout/MainMenuLayout.svelte";


  const docListUrl = TECH_URL;
  const quote_url = "";
  const quote_list = [""];
  const description = "";
  const hide_main_block = true;

</script>

<svelte:head>
  <title>Tech</title>
</svelte:head>

<MainMenuNav>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </main>
</MainMenuNav>
