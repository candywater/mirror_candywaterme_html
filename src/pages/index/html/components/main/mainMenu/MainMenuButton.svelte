<script lang="ts">
  import { CurrentPath } from "@/ts/config/path";
  import { onMount } from "svelte";

  export let style: string;
  export let href: string;
  export let title: string;

  export const external: boolean = false;

  const animation = "animated jello";
  let anime = "";
  let underline = "";
  if ($CurrentPath.toLowerCase() == title.toLowerCase()) {
      anime = animation;
    underline = "underline";
  }
</script>

<!-- {#if external}
  <a
    {href}
    rel="external"
    role="button"
    name="button"
    class="btn {style} {anime} {underline}">{title}</a
  >
{:else} -->
<a {href} role="button" name="button" class="btn {style} {anime} {underline}">
  {title}
</a>

<!-- {/if} -->

<style lang="scss">
  .btn {
    display: block;
    width: 7rem;
    margin: 0rem 0rem 0.2rem 0rem;
    padding: 0.5rem 0.7rem;
    font-size: 1.25rem;
    text-align: center;
    // font-family: sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
