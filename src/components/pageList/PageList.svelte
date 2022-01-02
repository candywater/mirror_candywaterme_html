<script lang="ts">
  import { default_number_per_page } from "../../store/config";
  import page from "page.js";

  export let url;

  var content;
  var content_list = [];

  var pageNum = 0;
  var contentNumberPerPage = default_number_per_page;

  const animation : string = 'animated fadeIn'

  onLoad();

  async function onLoad() {
    if (!url) {
      url = "/doc/essay.txt";
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

  function jump_to_blog(e: MouseEvent){
    e.preventDefault();
    
    if(!url.startsWith('/'))
      url = '/' + url;
    page(url);
  }


</script>

<div class={"pagelist " + animation}>
  {#await content_list}
    <!-- promise is pending -->
    <p>waiting for query</p>
  {:then content_list}
    <!-- promise was fulfilled -->
    {#each content_list as article_url}
      <p>
        <a href={article_url} on:click={jump_to_blog}>{article_url}</a>
        <!-- <Page url={article_url} isHide={true} /> -->
      </p>
    {/each}
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="scss">
  .pagelist{
    position: absolute;
    top: 0%;
  }
</style>