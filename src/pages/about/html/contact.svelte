<script lang="ts">
    import Section from "./_section.svelte";
    export let pageData;
</script>

<Section>
    <div id="contact">
        <!-- Contact content goes here -->
        {pageData.contact}
    </div>
</Section>

<style lang="scss">
    #contact {
       //min-height: 30vh; /* Make each section at least as tall as the viewport */
    }
</style>
