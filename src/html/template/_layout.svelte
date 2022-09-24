<script lang="ts">
  import { CurrentPath, TECH, ESSAY, TECH_PATH, ESSAY_PATH } from "../ts/config/path";
</script>

<svelte:head>
  <title>欢迎━(*｀∀´*)ノ亻!</title>
  {#if $CurrentPath === TECH}
    <link rel="preload" href={TECH_PATH} as="document" />
  {/if}
  {#if $CurrentPath === ESSAY}
    <link rel="preload" href={ESSAY_PATH} as="document" />
  {/if}
</svelte:head>

<main>
  <slot />
</main>

<style global lang="scss">
  .hide {
    display: none !important;
  }
  .show {
    display: block !important;
  }

  main {
    max-width: 56rem;
    position: relative;
    margin: 0 auto;
  }
</style>
