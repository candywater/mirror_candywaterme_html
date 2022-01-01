<script>
  import { onDestroy } from "svelte";
  import Terminal from "svelte-terminal";

  import Layout from "../template/_layout.svelte";

  import Profile from "../components/main/Profile.svelte";
  import MainMenu from "../components/main/MainMenu.svelte";
  import Copyleft from "../components/main/Copyleft.svelte";
  import QuoteDisplay from "../components/index/QuoteDisplay.svelte";

  import ConfigGear from "../components/main/configPanel/ConfigGear.svelte";
  import FakePanel from "../components/common/FakePanel.svelte";

  /* Bouncing entrances  */
  import "animate.css/source/_vars.css";
  import "animate.css/source/_base.css";
  // import 'animate.css/source/bouncing_entrances/bounceIn.css';
  // import 'animate.css/source/attention_seekers/jello.css';
  // import 'animate.css/source/fading_entrances/fadeIn.css';
  import "animate.css/source/fading_exits/fadeOut.css";

  import {
    path,
    INDEX,
    ABOUT,
    PROJECT,
    TECH,
    ESSAY,
    TECH_PATH,
    ESSAY_PATH,
  } from "../store/path";

  import { show_config_panel, show_quote } from "../store/config";

  import { getRandomQuote, splitSerifs } from "../common/common.js";

  export let quote_url : string;
  export let quote_list;
  export let description;
  export let hide_all_content;

  const DEFAULT_QUOTE = "happy a new day!";
  const DEFAULT_QUOTE_URL = "/doc/index/index_quote.md";

  let quote = "";
  const unsubscribe = show_quote.subscribe((value) => {
    quote = getRandomQuote(quote_list);
  });
  onDestroy(unsubscribe);
  const HIDE_ANIMATION = "animated fadeOut";
  let fadeOutAnimation = "";

  onLoad();

  function on_click() {
    $show_config_panel = !$show_config_panel;
  }

  function onLoad() {
    if (hide_all_content === true) {
      hideContent();
    } else {
      hide_all_content = false;
    }

    if (!quote_list) {
      quote_list = splitSerifs(DEFAULT_QUOTE);
    } else {
      return;
    }
    if (!quote_url) {
      fetchQuote(DEFAULT_QUOTE_URL);
    } else {
      fetchQuote(quote_url);
    }
  }

  function hideContent() {
    fadeOutAnimation = HIDE_ANIMATION;
    setTimeout(() => {
      // if($path === TECH)
      //   window.location = TECH_PATH
      // if($path === ESSAY)
      //   window.location = ESSAY_PATH
    }, 300);
  }
  function onAnimationEnd() {
    if (hide_all_content) {
      fadeOutAnimation = "hide";
    }
  }

  async function fetchQuote(url) {
    let result = await fetch(url);
    if (result.ok) {
      let text = await result.text();
      quote_list = splitSerifs(text);
    }
  }
</script>

{#if $show_config_panel}
  <div on:click={on_click}>
    <FakePanel />
  </div>
{/if}

<Layout>
  <div class={fadeOutAnimation} on:animationend={onAnimationEnd}>
    <div class="container main">
      <div class="mainmenu-block">
        <MainMenu />
      </div>

      <div class="profile-block">
        <Profile {description}>
          <slot>
            <!--index page-->
            <QuoteDisplay {quote} show_quote={$show_quote} />
          </slot>
        </Profile>
      </div>

      <div class="config-block z-10" on:click={on_click}>
        <ConfigGear />
      </div>

      {#if $show_config_panel}
        <div class="absolute w-11/12 h-5/6">
          <Terminal
            exactClose={() => {
              $show_config_panel = false;
            }}
          />
        </div>
      {/if}
    </div>
    <div class="container copyleft-block">
      <Copyleft />
    </div>
  </div>
</Layout>

<style lang="scss">
  $white-background: rgba(245, 245, 245, 0.3);

  .main {
    margin-top: 5%;
    background-color: $white-background;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .mainmenu-block {
      margin: 1rem 1rem;
    }
    .config-block {
      position: absolute;
      right: 1rem;
      top: 1rem;
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
    $size0: 0px;
    $size1: 576px;
    $size2: 768px;
    $size3: 992px;
    $size4: 1200px;
    $size5: 1700px;
    $size6: 2200px;
    $size7: 2700px;

    $height0: 0px;
    $height1: 360px;
    $height2: 720px;
    $height3: 980px;
    $height4: 2000px;

    @media (min-height: $height1) {
      .main {
        margin-top: 13%;
      }
    }
    @media (min-height: $height2) {
      .main {
        margin-top: 17%;
      }
    }
    @media (min-height: $height3) {
      .main {
        margin-top: 23%;
      }
    }
    @media (min-height: $height4) {
      .main {
        margin-top: 27%;
      }
    }

    @media (min-width: $size0) {
      .main,
      .copyleft-block {
        max-width: 50rem;
      }
      .profile-block {
        margin-left: 0.5rem;
        width: 30rem;
      }
    }

    @media (min-width: $size1) {
      .main,
      .copyleft-block {
        max-width: 50rem;
      }
      .profile-block {
        margin-left: 1rem;
        width: 30rem;
      }
    }
    @media (min-width: $size2) {
      .main,
      .copyleft-block {
        max-width: 56rem;
      }
      .profile-block {
        margin-left: 1rem;
        width: 30rem;
      }
    }
    @media (min-width: $size3) {
      .main,
      .copyleft-block {
        max-width: 56rem;
      }
      .profile-block {
        margin-left: 2rem;
        width: 30rem;
      }
    }
    @media (min-width: $size4) {
      .main,
      .copyleft-block {
        max-width: 56rem;
      }
      .profile-block {
        margin-left: 3rem;
        width: 30rem;
      }
    }
    @media (min-width: $size5) {
      .main,
      .copyleft-block {
        max-width: 60rem;
      }
    }
    @media (min-width: $size6) {
      .main,
      .copyleft-block {
        max-width: 80rem;
      }
    }
    @media (min-width: $size7) {
      .main,
      .copyleft-block {
        max-width: 100rem;
      }
    }
  }

  .copyleft-block {
    padding: 0rem;
    display: flex;
    justify-content: end;
    align-items: end;
  }
</style>
