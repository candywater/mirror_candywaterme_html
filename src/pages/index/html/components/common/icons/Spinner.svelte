<script lang="ts">
  import { ESSAY, CurrentPath, TECH } from "@/ts/config/path";

  const _essay_spinner: string =
    '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
  const _tech_spinner: string =
    '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
  const _other_spinner: string = '<div class="lds-circle"><div></div></div>';
</script>

{#if $CurrentPath == ESSAY}
  {@html _essay_spinner}
{:else if $CurrentPath == TECH}
  {@html _tech_spinner}
{:else}
  {@html _other_spinner}
{/if}
