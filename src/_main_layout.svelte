<script>

import Layout from "./_layout.svelte"

import Profile from "./components/main/Profile.svelte"
import MainMenu from "./components/main/MainMenu.svelte"
import Copyleft from "./components/main/Copyleft.svelte"

export let quote_url 
export let quote_list 
export let description  

</script>

<svelte:head>
  <title>欢迎━(*｀∀´*)ノ亻!</title>
</svelte:head>


<Layout>

  <div class="container main">
    <div class="mainmenu-block">
      <MainMenu></MainMenu>
    </div>
    <div class="profile-block">
      <Profile {quote_url} {quote_list} {description} />
    </div>
  </div>
  <div class="container copyleft-block">
    <Copyleft></Copyleft>
  </div>

</Layout>

<style lang="scss">

$white-background : rgba(245, 245, 245, 0.3);

.main{
  margin-top: 11% ;
  padding: 1rem 0.5rem;
  background-color: $white-background;
  display: flex;
  justify-content:center;
  align-items: flex-start;
  .mainmenu-block{
    margin: 1rem 1rem;
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