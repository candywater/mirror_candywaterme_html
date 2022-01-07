<script lang="ts">
  import Main from "./main.svelte";
  import PostList from "../components/pageList/postList.svelte";
  import { ESSAY_URL } from "../config/path";

  export let firstTimeShow: boolean;

  const docListUrl = ESSAY_URL;
  const quote_url = "";
  const quote_list = [""];
  const description = "";

  const hide_main_block = true;

  firstTimeShow = false;
</script>

{#if firstTimeShow}
  <Main
    {quote_url}
    {quote_list}
    {description}
    firstTimeShow={false}
    isHide={hide_main_block}
  />
{/if}
<main class="page-content" aria-label="Content">
  <div class="wrapper">
    <PostList docListUrl={docListUrl} />
  </div>
</main>

<!-- 
<br><br>
{% include paginator-footer.html %}
<br><br>
<p class="rss-subscribe">subscribe essay<a href="{{ '/rss/essay.xml' | relative_url }}"> via RSS</a></p> -->
