<script lang="ts">
  export let height;
  export let width;
</script>

<div class="fake-panel-comment text-center text-lg capitalize underline underline-offset-8 decoration-indigo-500 " style={`height:${height};width:${width};`} >
  out of service
</div>

<style lang="scss">
  .fake-panel-comment {
    height: 9.5rem;
    width: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: rgb(161 161 170);
  }
</style>
