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
    padding: 0.5rem;
    margin: 0rem 0rem 0.5rem 0rem;
  }
  .card {
    background-color: rgba(245, 245, 245, 0.4);
    margin: 1rem 1rem 1rem 1rem;
  }
</style>
