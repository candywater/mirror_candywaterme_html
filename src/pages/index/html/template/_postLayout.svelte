<script lang="ts">
    import { CurrentPath, TECH, ESSAY, PATH_DICT } from "@/ts/config/path";
  </script>
  
  <svelte:head>
    <title>欢迎━(*｀∀´*)ノ亻!</title>
    {#if $CurrentPath === TECH}
      <link rel="preload" href={PATH_DICT[TECH]} as="document" />
    {/if}
    {#if $CurrentPath === ESSAY}
      <link rel="preload" href={PATH_DICT[ESSAY]} as="document" />
    {/if}
  </svelte:head>
  
  <main>
    <slot />
  </main>
  
  <style global lang="scss">
  </style>
  