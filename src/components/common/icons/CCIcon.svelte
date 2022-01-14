<script lang="ts">
    import CcByNcSaIcon from "./CCByNcSaIcon.svelte";
    import CcByIcon from "./CCByIcon.svelte";
    import CcByNcIcon from "./CCByNcIcon.svelte";

    import { ESSAY, path, TECH } from "../../../config/path";
</script>

{#if $path == ESSAY}
    <CcByNcSaIcon />
{:else if $path == TECH}
    <CcByIcon />
{:else}
    <CcByNcIcon />
{/if}
