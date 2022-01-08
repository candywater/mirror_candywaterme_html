<script lang="ts">
    import CcByNcSaIcon from "../common/CCByNcSaIcon.svelte";
    import CcByIcon from "../common/CCByIcon.svelte";
    import CcByNcIcon from "../common/CCByNcIcon.svelte";

    import { ESSAY, path, TECH } from "../../config/path";
</script>

{#if $path == ESSAY}
    <CcByNcSaIcon />
{:else if $path == TECH}
    <CcByIcon />
{:else}
    <CcByNcIcon />
{/if}
