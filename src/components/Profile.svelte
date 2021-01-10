
<!-- <script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
</script> -->

<script>
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"

  import {getRandomInt} from "../common/common"

  const DEFAULT_QUOTE = "happy a new day!"
  const quote_url = "/doc/index/index_quote.md"

  let show_quote = false;

  let quote_list = split_serifs(DEFAULT_QUOTE);

  fetch_quote(quote_url)

  function split_serifs(str){
    str = str.split(/(?:\r\n){2,}/g);
    for(var ele in str ){
      str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
    } 
    return str;
  }

  async function fetch_quote(url){
    let result = await fetch(url);
    let text = await result.text();
    quote_list = split_serifs(text);
  }

  function OnImgClick(e){
    show_quote = !show_quote;
  }

</script>


<div class="profile">
  <br>
  <div class="figure">
    <img src="/assets/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
        class=" real-rounded-circle figure-img img-thumbnail text-center " 
        alt="profile" id="profile_photo"
        title="why not try clicking this?"
        on:click="{OnImgClick}"
        >
    <p class="text-center">Candy&nbsp;Water</p>
  </div>
  <p class="blockquote">Full stack engineer, amateur content creator.</p>

  {#if show_quote}
    <div class="card card-outline-secondary" id="about_profile">
      <span id="slide_down_words" class="animate__animated animate__fadeIn">
        {@html quote_list[getRandomInt(0, quote_list.length - 1)]}
      </span>
    </div>
  {/if}


</div>

<style lang="scss">

.profile{
  max-width: 21rem;
  .figure{
    img{
      width: 13rem;
    }
  }
  .card{
    background-color: rgba(245, 245, 245, 0.4);
    margin: 0rem 2rem 0rem 1rem;
  }
  .real-rounded-circle{
    border-radius: 10em ;
  }
}


</style>