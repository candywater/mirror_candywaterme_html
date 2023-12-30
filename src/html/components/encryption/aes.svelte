<script lang="ts">
    function initializeAes(params) {}

</script>

<svelte:head>
    <script
        src="https://cdn.jsdelivr.net/npm/aes-js@3.1.2/index.min.js"
        integrity="sha512-qe3tMl5So3PPvTaPsfRHXrW7G3i9QK+Q34WzyIrZAtt1ph2Wwd8od+yOyRLbUeVG24rDaWAPpUmnIrxON8aPGw=="
        crossorigin="anonymous"
        blocking="render"
        on:load={initializeAes}
    ></script>
</svelte:head>
