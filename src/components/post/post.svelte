<script lang="ts">
  import Markdown from "../markdown/markdown.svelte";
  import Comment from "../comment/comment.svelte";
  import type { IPostSummary } from "../../interface/IPostSummary";

  export let docUrl: string;
  export let indexUrl: string;
  export let contentUrl: string;
</script>

<article class="post">
  <Markdown docurl={docUrl} {indexUrl} {contentUrl} />
  <hr id="comment_hr" />
  <Comment />
</article>
