<script lang="ts">
    import MainMenu from "../components/main/MainMenu.svelte";
</script>

<div class="main-menu-layout">
    <div class="main-menu animated fadeIn flex-none">
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

    .main-menu {
        // position: fixed;
        display: none;
        margin: 0.5rem;
    }

    @media (min-width: 1280px) {
        .main-menu {
            // right: 25px;
            display: block;
        }
        .main-menu-layout {
            justify-content: center;
            display: flex
        }
    }
    // }
    // @media (min-width: 1280px) {
    //     .main-menu {
    //         right: 125px;
    //     }
    // }
    // @media (min-width: 1536px) {
    //     .main-menu {
    //         right: 240px;
    //     }
    // }
    // @media (min-width: 1700px) {
    //     .main-menu {
    //         right: 340px;
    //     }
    // }
    // @media (min-width: 1950px) {
    //     .main-menu {
    //         right: 460px;
    //     }
    // }
    // @media (min-width: 2200px) {
    //     .main-menu {
    //         right: 560px;
    //     }
    // }
    // @media (min-width: 2500px) {
    //     .main-menu {
    //         right: 700px;
    //     }
    // }
</style>
