<script lang="ts">
  import Post from "../components/post/post.svelte";
  import { BlogUrl2DocUrl } from "../common/common";
  import MainMenu from "../components/main/MainMenu.svelte";
  import SideMainMenuLayout from "../template/SideMainMenuLayout.svelte";
  export let blogpath: string;
  export let indexUrl: string;
  export let contentUrl: string;

  let docUrl: string = BlogUrl2DocUrl(blogpath);
  console.log(blogpath)
</script>

<SideMainMenuLayout>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <Post {docUrl} {indexUrl} {contentUrl} />
    </div>
  </main>
</SideMainMenuLayout>
