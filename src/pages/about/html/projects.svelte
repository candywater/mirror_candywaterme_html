<script lang="ts">
    import Section from "./_section.svelte";
    export let pageData;
</script>

<Section>
    <div id="projects">
        <!-- Projects content goes here -->
        {pageData.projects}
    </div>
</Section>

<style lang="scss">
    #projects {
        // min-height: 70vh; /* Make each section at least as tall as the viewport */
    }
</style>
