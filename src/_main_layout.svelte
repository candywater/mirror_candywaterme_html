<script>

import Layout from "./_layout.svelte"

import Profile from "./components/main/Profile.svelte"
import MainMenu from "./components/main/MainMenu.svelte"
import Copyleft from "./components/main/Copyleft.svelte"

import ConfigGear from "./components/main/configPanel/ConfigGear.svelte"
import ConfigPanel from "./components/main/configPanel/ConfigPanel.svelte"

import FakePanel from "./components/common/FakePanel.svelte"

import {show_config_panel} from "./store/config"

export let quote_url 
export let quote_list 
export let description  

function on_click(){
  $show_config_panel = !$show_config_panel
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
        <slot></slot>
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
  margin-top: 30% ;
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