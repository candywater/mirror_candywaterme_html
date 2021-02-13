
<script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const MY_NAME = "Candy Water"
</script>

<script>

  import {getRandomInt} from "../../common/common.js"
  import {path, INDEX, ABOUT, PROJECT} from "../../store/path"
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
  
  onLoad();

  function OnImgClick(e){
    show_quote = !show_quote
    quote = getRandomQuote(quote_list)
  }

  function onLoad(){
    if(!description){
      description = MY_DESCRIPTION_DEFAULT
    }
    if(quote_list){
      return
    }
    else{
      quote_list = splitSerifs(DEFAULT_QUOTE);
    }
    if(quote_url){
      fetchQuote(quote_url)
    }
    else{
      fetchQuote(DEFAULT_QUOTE_URL)
    }
  }

  async function fetchQuote(url){
    let result = await fetch(url);
    if(result.ok){
      let text = await result.text();
      quote_list = splitSerifs(text);
    }
  }

  function splitSerifs(str){
    str = str.split(/(?:\r\n){2,}/g);
    for(var ele in str ){
      str[ele] = str[ele].replace(/(?:\r\n)/g, "<br>");
    } 
    return str;
  }

  function getRandomQuote(list){
    return list[getRandomInt(0, list.length - 1)]
  }
</script>


<div class="profile">
  <br>
  <div class="figure">
    <img src={PROFILE_IMG_URL}
        class="real-rounded-circle border-double border-4 border-light-blue-500" 
        alt="profile" id="profile_photo"
        title="why not try clicking this?"
        on:click="{OnImgClick}"
        >
    <p class="text-center">{MY_NAME}</p>
  </div>
  <p class="blockquote">
    {description}
  </p>
  <slot>
  </slot>
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