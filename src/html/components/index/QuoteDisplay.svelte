<script lang="ts">
  export let quote: string;
  export let show_quote: Boolean;

  const ANIMATED_IN = "animated bounceIn";

  let show_animation = ANIMATED_IN;
</script>

{#if show_quote && quote}
  <div class="card about_profile rounded-md">
    <span class="slide_down_words {show_animation}">
      {@html quote}
    </span>
  </div>
{/if}

<style lang="scss">
  .about_profile {
    // position: absolute;
    padding: 0.5rem;
    z-index: 20;
  }
  .card {
    background-color: rgba(245, 245, 245, 0.4);
    margin: 2rem 1rem 1rem 1rem;
  }
</style>
