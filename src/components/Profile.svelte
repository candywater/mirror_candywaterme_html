
<script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte

  export async function preload(page, session) {
    let quote_url = "/doc/index/index_quote.md"
    const response = await this.fetch(quote_url);
    const json = await response.json();
    return { result: json }
  }
</script>

<script>
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const DEFAULT_QUOTE = "happy a new day!"

  let show_quote = false;
  let quote = DEFAULT_QUOTE;

  export let result;


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
      <span id="slide_down_words">
        <!-- {quote === "" ? DEFAULT_QUOTE : quote} -->
        {result}
      </span>
    </div>
  {/if}


</div>

<style lang="scss">

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

</style>