<script lang="ts">
    import { ESSAY, path, TECH } from "../../config/path";

    console.log($path)

    const _essay_spinner: string =
        '<div class="lds-ripple"><div></div><div></div></div>';
    const _tech_spinner: string = '<div class="lds-circle"><div></div></div>';
</script>

{#if $path == ESSAY}
    {@html _essay_spinner}
{:else if $path == TECH}
    {@html _tech_spinner}
{:else}
    {@html _essay_spinner}
{/if}
