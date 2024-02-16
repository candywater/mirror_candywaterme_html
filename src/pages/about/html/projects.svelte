<script lang="ts">
    import Section from "./Section.svelte";
    export let pageData;
</script>

<Section id="projects">
    <!-- Projects content goes here -->
    {pageData.projects}
</Section>

<style>
    section {
        min-height: 100vh; /* Make each section at least as tall as the viewport */
    }
</style>
