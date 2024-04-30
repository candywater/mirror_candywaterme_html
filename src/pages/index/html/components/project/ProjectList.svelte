<script lang="ts">
  import { getReadableConfig, projectDocUrl } from "@/ts/config/configReader";
  import type { Readable } from "svelte/store";

  const list: Readable<[]> = getReadableConfig(projectDocUrl, []);

  let list_type = ["bg-gray-300 hover:bg-gray-500 text-black rounded"];
</script>

<ol class="list-disc">
  {#each $list as item, i}
    <li>
      <a href={item[0]} class={list_type[i % list_type.length]}
        >{item[1]} ({item[2]})</a
      >
    </li>
  {/each}
</ol>

<style lang="scss">
  li {
    margin: 0.1rem 0.1rem;
    padding: 0.1rem 0.2rem;
  }
</style>
