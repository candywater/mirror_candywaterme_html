<script>
  import { default_number_per_page } from "../../store/config";

  export let url;

  var content;
  var content_list = [];

  var pageNum = 0;
  var contentNumberPerPage = default_number_per_page;

  onLoad();

  async function onLoad() {
    if (!url) {
      url = "/blog_src/essay.txt";
    }
    content = await (await fetch(url)).text();
    var tmp_content_list = content.split(/[\r|\n]/g);
    var tmp_list = [];
    tmp_content_list.forEach((str) => {
      if (str) {
        tmp_list.push(str);
      }
    });
    content_list = tmp_list;
  }
</script>

{#await content_list}
  <!-- promise is pending -->
  <p>waiting for the promise to resolve...</p>
{:then content_list}
  <!-- promise was fulfilled -->
  {#each content_list as title}
    <p>
      <a href={title.replace("doc/", "/blog_src/")}>{title}</a>
    </p>
  {/each}
{:catch error}
  <!-- promise was rejected -->
  <p>Something went wrong: {error.message}</p>
{/await}
