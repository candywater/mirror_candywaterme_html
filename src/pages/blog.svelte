<script lang="ts">
  import Post from "../components/post/post.svelte";
  import { BlogUrl2DocUrl } from "../common/common";

  export let blogpath: string;

  let docurl: string = BlogUrl2DocUrl(blogpath);
</script>

<Post {docurl} />
