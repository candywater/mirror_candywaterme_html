<script lang="ts">
  export let height;
  export let width;
</script>

<div class="fake-panel-comment" style={`height:${height};width:${width};`} />

<style lang="scss">
  .fake-panel-comment {
    height: 9.5rem;
    width: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: lavender;
  }
</style>
