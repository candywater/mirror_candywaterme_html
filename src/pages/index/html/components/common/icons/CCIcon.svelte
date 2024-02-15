<script lang="ts">
  import CcByNcSaIcon from "./CCByNcSaIcon.svelte";
  import CcByIcon from "./CCByIcon.svelte";
  import CcByNcIcon from "./CCByNcIcon.svelte";

  import { ESSAY, CurrentPath, TECH } from "../../../../ts/config/path";
</script>

{#if $CurrentPath == ESSAY}
  <CcByNcSaIcon />
{:else if $CurrentPath == TECH}
  <CcByIcon />
{:else}
  <CcByNcIcon />
{/if}
