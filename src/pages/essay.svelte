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

<!-- 
<br><br>
{% include paginator-footer.html %}
<br><br>
<p class="rss-subscribe">subscribe essay<a href="{{ '/rss/essay.xml' | relative_url }}"> via RSS</a></p> -->
