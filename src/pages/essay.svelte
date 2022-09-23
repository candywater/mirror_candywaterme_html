<script lang="ts">
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte";
  import { ESSAY_URL } from "../config/path";
  import MainMenuNav from "../layout/MainMenuLayout.svelte";

  const docListUrl = ESSAY_URL;
  const quote_url = "";
  const quote_list = [""];
  const description = "";

  const hide_main_block = true;

</script>

<svelte:head>
  <title>Essay</title>
</svelte:head>

<MainMenuNav>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <PostList {docListUrl} />
    </div>
  </main>
</MainMenuNav>

<!-- 
<br><br>
{% include paginator-footer.html %}
<br><br>
<p class="rss-subscribe">subscribe essay<a href="{{ '/rss/essay.xml' | relative_url }}"> via RSS</a></p> -->
