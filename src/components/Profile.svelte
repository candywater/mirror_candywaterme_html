
<!-- <script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
</script> -->

<script>
  import {getRandomInt} from "../common/common"
  import ProjectList from "./ProjectList.svelte"
  import AboutMe from "./AboutMe.svelte"

  const MY_NAME = "Candy Water"
  const MY_DESCRIPTION_DEFAULT = "Full stack engineer, amateur content creator."
  const DEFAULT_QUOTE = "happy a new day!"
  const DEFAULT_QUOTE_URL = "/doc/index/index_quote.md"
  
  export let quote_url 
  export let quote_list 
  export let description

  export let isProject
  export let isAbout

  let show_quote = false;

  OnLoad();

  function OnLoad(){
    if(!description)
      description = MY_DESCRIPTION_DEFAULT

    if(!quote_list){
      quote_list = split_serifs(DEFAULT_QUOTE);
      if(quote_url)
        fetch_quote(quote_url)
      else
        fetch_quote(DEFAULT_QUOTE_URL)
    }
  }

  function split_serifs(str){
    str = str.split(/(?:\r\n){2,}/g);
    for(var ele in str ){
      str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
    } 
    return str;
  }

  async function fetch_quote(url){
    let result = await fetch(url);
    if(result.ok){
      let text = await result.text();
      quote_list = split_serifs(text);
    }
  }

  function OnImgClick(e){
    show_quote = !show_quote;
  }

</script>


<div class="profile">
  <br>
  <div class="figure">
    <img src="/assets/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
        class="real-rounded-circle figure-img img-thumbnail text-center " 
        alt="profile" id="profile_photo"
        title="why not try clicking this?"
        on:click="{OnImgClick}"
        >
    <p class="text-center">{MY_NAME}</p>
  </div>
  <p class="blockquote">
    {description}
  </p>
  {#if isProject}
    <ProjectList></ProjectList>
  {/if}
  {#if isAbout}
    <AboutMe></AboutMe>
  {/if}

  {#if show_quote && !isProject}
    <div class="card card-outline-secondary" id="about_profile">
      <span class="slide_down_words animate__animated animate__fadeIn">
        {@html quote_list[getRandomInt(0, quote_list.length - 1)]}
      </span>
    </div>
  {/if}


</div>

<style lang="scss">

.profile{
  // max-width: 23rem;
  // width: 23rem;
  // max-height: 30rem;
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
  .slide_down_words{
    // max-height: 10rem;
    // overflow-y: scroll;
  }
}


</style>