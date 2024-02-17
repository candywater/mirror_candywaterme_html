<script lang="ts">
    import Section from "./_section.svelte";

    export let pageData;
</script>

<Section>
    <div id="about">
        <!-- About content goes here -->
        {pageData.about}
    </div>
</Section>

<style lang="scss">
    #about {
        // min-height: 70vh; /* Make each section at least as tall as the viewport */
    }
</style>
