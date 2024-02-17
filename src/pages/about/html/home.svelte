<script lang="ts">
    import Section from "./_section.svelte";
    export let pageData;
</script>

<Section id="home">
    <div id="home">
        <!-- Home content goes here -->
        {pageData.home}
    </div>
</Section>

<style lang="scss">
    #home {
        min-height: 100vh; /* Make each section at least as tall as the viewport */
    }
</style>
