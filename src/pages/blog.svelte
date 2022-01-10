<script lang="ts">
  import Post from "../components/post/post.svelte";
  import { BlogUrl2DocUrl } from "../common/common";
  import MainMenu from "../components/main/MainMenu.svelte";
  import MainMenuNav from "../components/main/MainMenuNav.svelte";
  export let blogpath: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let docUrl: string = BlogUrl2DocUrl(blogpath);
</script>

<MainMenuNav />
<main class="page-content" aria-label="Content">
  <div class="wrapper">
    <Post {docUrl} {indexUrl} {contentUrl} />
  </div>
</main>
