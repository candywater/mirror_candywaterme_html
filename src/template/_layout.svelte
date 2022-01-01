<script>
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


</script>

<svelte:head>
  <title>欢迎━(*｀∀´*)ノ亻!</title>
  {#if $path === TECH}
    <link rel="preload" href={TECH_PATH} as="document" />
  {/if}
  {#if $path === ESSAY}
    <link rel="preload" href={ESSAY_PATH} as="document" />
  {/if}
</svelte:head>

<main>
  <slot />
</main>

<style global lang="scss">
  body {
    /*idea: https://codepen.io/P1N2O/pen/pyBNzX*/
    background: linear-gradient(
        -45deg,
        rgb(179, 108, 87),
        rgba(155, 44, 44, 0.637),
        rgb(19, 90, 116),
        rgba(29, 104, 86, 0.534)
      ),
      linear-gradient(
        127deg,
        rgb(87, 44, 31),
        rgb(11, 75, 99),
        rgba(17, 100, 81, 0.534)
      );
    background-size: 400% 400%;
    animation: Gradient 25s ease infinite;
  }
  .hide {
    display: none !important;
  }
  .show {
    display: block !important;
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 75% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  main {
    max-width: 56rem;
    position: relative;
    margin: 0 auto;
  }
</style>
