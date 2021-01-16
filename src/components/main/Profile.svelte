
<script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const MY_NAME = "Candy Water"
</script>

<script>

  import {getRandomInt} from "../../common/common.js"
  import {path, INDEX, ABOUT, PROJECT} from "../../store/path"
  import ProjectList from "../project/ProjectList.svelte"
  import AboutMe from "../about/AboutMe.svelte"
  import QuoteDisplay  from "../index/QuoteDisplay.svelte"

  export let quote_url 
  export let quote_list 
  export let description

  const PROFILE_IMG_URL = "/assets/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const DEFAULT_QUOTE = "happy a new day!"
  const DEFAULT_QUOTE_URL = "/doc/index/index_quote.md"
  const MY_DESCRIPTION_DEFAULT = "Full stack engineer, amateur content creator."

  let show_quote = false
  let quote = ""
  
  OnLoad();

  function OnImgClick(e){
    show_quote = !show_quote
    quote = get_random_quote(quote_list)
  }

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

  async function fetch_quote(url){
    let result = await fetch(url);
    if(result.ok){
      let text = await result.text();
      quote_list = split_serifs(text);
    }
  }

  function split_serifs(str){
    str = str.split(/(?:\r\n){2,}/g);
    for(var ele in str ){
      str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
    } 
    return str;
  }

  function get_random_quote(list){
    return list[getRandomInt(0, list.length - 1)]
  }
</script>


<div class="profile">
  <br>
  <div class="figure">
    <img src={PROFILE_IMG_URL}
        class="real-rounded-circle animated bounceIn" 
        alt="profile" id="profile_photo"
        title="why not try clicking this?"
        on:click="{OnImgClick}"
        >
    <p class="text-center">{MY_NAME}</p>
  </div>
  <p class="blockquote">
    {description}
  </p>
  {#if $path == PROJECT}
    <ProjectList></ProjectList>
  {/if}
  {#if $path == ABOUT}
    <AboutMe></AboutMe>
  {/if}
  {#if $path == INDEX}
    <QuoteDisplay {quote} {show_quote}></QuoteDisplay>
  {/if}
</div>

<style lang="scss">

.profile{
  margin: 0rem 1rem;
  .figure{
    img{
      width: 13rem;
    }
  }

  .real-rounded-circle{
    border-radius: 10em ;
  }
}


</style>