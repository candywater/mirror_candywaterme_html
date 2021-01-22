<script>

import Layout from "./_layout.svelte"

import Profile from "./components/main/Profile.svelte"
import MainMenu from "./components/main/MainMenu.svelte"
import Copyleft from "./components/main/Copyleft.svelte"

import ConfigGear from "./components/main/configPanel/ConfigGear.svelte"
import ConfigPanel from "./components/main/configPanel/ConfigPanel.svelte"

import FakePanel from "./components/common/FakePanel.svelte"

export let quote_url 
export let quote_list 
export let description  

let show_panel = false;

function on_click(){
  show_panel = !show_panel
}

</script>


{#if show_panel}
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
      <Profile {quote_url} {quote_list} {description} />
    </div>
    <div class="config-block z-10" 
      on:click={on_click}
    >
      <ConfigGear></ConfigGear>
    </div>
    {#if show_panel}
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
  margin-top: 11% ;
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
  $size0 : 0px;
  $size1 : 576px;
  $size2 : 768px;
  $size3 : 992px;
  $size4 : 1200px;

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
}



.copyleft-block{
  padding: 0rem;
  display: flex;
  justify-content: end;
  align-items: end;
}


</style>