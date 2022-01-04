<script lang="ts">
  import Markdown from "../markdown/markdown.svelte";
  import Comment from "../comment/comment.svelte";

  export let docurl: string;
</script>


<article class="page">
  <Markdown {docurl} />
  <Comment />
</article>

<style lang="scss">
  .page {
    position: absolute;
    top: 0%;
  }
</style>
