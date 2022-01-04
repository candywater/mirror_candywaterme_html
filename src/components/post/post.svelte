<script lang="ts">
  import Markdown from "../markdown/markdown.svelte";
  import Comment from "../comment/comment.svelte";

  export let docurl: string;
</script>


<article class="post">
  <Markdown {docurl} />
  <hr id="comment_hr" />
  <Comment />
</article>

