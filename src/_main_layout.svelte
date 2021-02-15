<script>

  import { onDestroy } from 'svelte';

  import Layout from "./_layout.svelte"

  import Profile from "./components/main/Profile.svelte"
  import MainMenu from "./components/main/MainMenu.svelte"
  import Copyleft from "./components/main/Copyleft.svelte"
  import QuoteDisplay  from "./components/index/QuoteDisplay.svelte"

  import ConfigGear from "./components/main/configPanel/ConfigGear.svelte"
  import ConfigPanel from "./components/main/configPanel/ConfigPanel.svelte"
  import FakePanel from "./components/common/FakePanel.svelte"


  import {show_config_panel} from "./store/config"
  import {show_quote} from "./store/config"

  import {getRandomInt} from "./common/common.js"

  export let quote_url 
  export let quote_list 
  export let description  


  const DEFAULT_QUOTE = "happy a new day!"
  const DEFAULT_QUOTE_URL = "/doc/index/index_quote.md"
  const MY_DESCRIPTION_DEFAULT = "Full stack engineer, amateur content creator."


  let quote = ""
  const unsubscribe = show_quote.subscribe(value => {
    quote = getRandomQuote(quote_list)
	});
  onDestroy(unsubscribe);

  
  onLoad();

  function on_click(){
    $show_config_panel = !$show_config_panel
  }

  function onLoad(){
    if(!description){
      description = MY_DESCRIPTION_DEFAULT
    }
    if(!quote_list){
      quote_list = splitSerifs(DEFAULT_QUOTE);
    }
    else{
      return
    }
    if(!quote_url){
      fetchQuote(DEFAULT_QUOTE_URL)
    }
    else{
      fetchQuote(quote_url)
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


{#if $show_config_panel}
  <div on:click={on_click}>
    <FakePanel> </FakePanel>
  </div>
{/if}

<Layout>
  <div class="container main">

    <div class="mainmenu-block">
      <MainMenu></MainMenu>
    </div>

    <div class="profile-block">
      <Profile {quote_url} {quote_list} {description} >
        <slot>
          <!--index page-->
          <QuoteDisplay {quote} show_quote={$show_quote}></QuoteDisplay>
        </slot>
      </Profile>
    </div>

    <div class="config-block z-10" on:click={on_click}>
      <ConfigGear></ConfigGear>
    </div>

    {#if $show_config_panel}
      <ConfigPanel></ConfigPanel>
    {/if}
    
  </div>
  <div class="container copyleft-block">
    <Copyleft></Copyleft>
  </div>
</Layout>

<style lang="scss">

$white-background : rgba(245, 245, 245, 0.3);

.main{
  margin-top: 5% ;
  background-color: $white-background;
  display: flex;
  justify-content:center;
  align-items: flex-start;
  .mainmenu-block{
    margin: 1rem 1rem;
  }
  .config-block{
    position: absolute;
    right: 1rem;
    top: 1rem
  }
}

@media screen {
  /**
  16:9
  640x360
  1280x720
  1366x768
  1600x900
  1920x1080
  2048x1152
  2560x4110
  3840x2160
  */
  $size0 : 0px;
  $size1 : 576px;
  $size2 : 768px;
  $size3 : 992px;
  $size4 : 1200px;
  $size5 : 1700px;
  $size6 : 2200px;
  $size7 : 2700px;

  $height0: 0px;
  $height1: 360px;
  $height2: 720px;
  $height3: 980px;
  $height4: 2000px;


  @media (min-height: $height1){
    .main{
      margin-top: 13%;
    }
  }
  @media (min-height: $height2){
    .main{
      margin-top: 17%;
    }
  }
  @media (min-height: $height3){
    .main{
      margin-top: 23%;
    }
  }
  @media (min-height: $height4){
    .main{
      margin-top: 27%;
    }
  }

  @media (min-width: $size0){
    .main, .copyleft-block{
      max-width: 50rem;
    }
    .profile-block{
      margin-left: 0.5rem;
      width: 30rem;
    }
  }

  @media (min-width: $size1){
    .main, .copyleft-block{
      max-width: 50rem;
    }
    .profile-block{
      margin-left: 1rem;
      width: 30rem;
    }
  }
  @media (min-width: $size2){
    .main, .copyleft-block{
      max-width: 56rem;
    }
    .profile-block{
      margin-left: 1rem;
      width: 30rem;
    }
  }
  @media (min-width: $size3){
    .main, .copyleft-block{
      max-width: 56rem;
    }
    .profile-block{
      margin-left: 2rem;
      width: 30rem;
    }
  }
  @media (min-width: $size4){
    .main, .copyleft-block{
      max-width: 56rem;
    }
    .profile-block{
      margin-left: 3rem;
      width: 30rem;
    }
  }
  @media (min-width: $size5){
    .main, .copyleft-block{
      max-width: 60rem;
    }
  }
  @media (min-width: $size6){
    .main, .copyleft-block{
      max-width: 80rem;
    }
  }
  @media (min-width: $size7){
    .main, .copyleft-block{
      max-width: 100rem;
    }
  }
}



.copyleft-block{
  padding: 0rem;
  display: flex;
  justify-content: end;
  align-items: end;
}


</style>