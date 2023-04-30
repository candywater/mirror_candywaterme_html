<script lang="ts">
  import MainMenu from "../components/main/MainMenu.svelte";
  import MainMenuMobile from "../components/main/mainMenu/MainMenuMobile.svelte";

  let menuClass = "hide-main-menu";

  function toggleHideMainMenu() {
    if (menuClass) menuClass = "";
    else menuClass = "hide-main-menu";
  }
</script>

<div class="main-menu-layout">
  <div class="main-menu-mobile" on:click={toggleHideMainMenu}>
    <MainMenuMobile />
  </div>
  <div class="main-menu animated fadeIn flex-none {menuClass}">
    <MainMenu />
  </div>
  <div class="flex-initial">
    <slot />
  </div>
</div>

<style lang="scss">
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
  //   $size0: 0px;
  //     $size1: 576px;
  //     $size2: 768px;
  //     $size3: 992px;
  //     $size4: 1200px;
  //     $size5: 1700px;
  //     $size6: 2200px;
  //     $size7: 2700px;
  .main-menu-mobile {
    position: absolute;
    z-index: 20;
  }

  .hide-main-menu {
    display: none;
  }

  .main-menu {
    position: fixed;
    z-index: 20;
    margin: 2rem 0.5rem 0rem 0.5rem;
  }

  @media (min-width: 1280px) {
    .main-menu-mobile {
      display: none;
    }
    .hide-main-menu {
      // right: 25px;
      display: block;
    }
    .main-menu {
      position: relative;
      display: block;
      margin: 0rem 0.5rem;
    }
    .main-menu-layout {
      justify-content: center;
      display: flex;
    }
  }
</style>
