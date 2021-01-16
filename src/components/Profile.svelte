
<script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const MY_NAME = "Candy Water"
  const MY_DESCRIPTION_DEFAULT = "Full stack engineer, amateur content creator."
  const DEFAULT_QUOTE = "happy a new day!"
  const DEFAULT_QUOTE_URL = "/doc/index/index_quote.md"

  const ANIMATED_IN = "animated bounceIn"
  const ANIMATED_OUT= "animated bounceOut"
  

</script>

<script>
  import {path, INDEX, ABOUT, PROJECT} from "../store/path"
  let switcher = INDEX;
  const unsubscribe = path.subscribe(val => switcher = val)

  import {getRandomInt} from "../common/common"
  import ProjectList from "./ProjectList.svelte"
  import AboutMe from "./AboutMe.svelte"

  export let quote_url 
  export let quote_list 
  export let description

  let show_quote = false;
  let show_animation = ANIMATED_IN

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
    show_quote = !show_quote
  }

</script>


<div class="profile">
  <br>
  <div class="figure">
    <img src="/assets/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
        class="real-rounded-circle figure-img img-thumbnail text-center animated bounceIn" 
        alt="profile" id="profile_photo"
        title="why not try clicking this?"
        on:click="{OnImgClick}"
        >
    <p class="text-center">{MY_NAME}</p>
  </div>
  <p class="blockquote">
    {description}
  </p>
  {#if switcher == PROJECT}
    <ProjectList></ProjectList>
  {/if}
  {#if switcher == ABOUT}
    <AboutMe></AboutMe>
  {/if}

  {#if show_quote && switcher == INDEX}
    <div class="card card-outline-secondary about_profile">
    <span class="slide_down_words {show_animation}">
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
  margin: 0rem 1rem;
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
  .about_profile{
    padding: 0.5rem;
    margin: 0rem 0rem 0.5rem 0rem;
  }
}


</style>