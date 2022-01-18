<script lang="ts">
  import type { IPostSummary } from "../../interface/IPostSummary";

  import {
    current_page_number,
    DEFAULT_NUMBER_PER_PAGE,
  } from "../../config/config";

  export let content_list: IPostSummary[];

  function MoveNextPage(e: MouseEvent) {
    e.preventDefault();
    if (
      ($current_page_number + 1) * DEFAULT_NUMBER_PER_PAGE <
      content_list.length
    )
      current_page_number.set($current_page_number + 1);
  }
  function MoveFrontPage(e: MouseEvent) {
    e.preventDefault();
    if ($current_page_number - 1 >= 0)
      current_page_number.set($current_page_number - 1);
  }
  function NotAllowClick(e: MouseEvent) {
    e.preventDefault();
  }
  function ChangeCurrentPage(e: Event) {
    let value = (<HTMLInputElement>e.target).value;
    let number = parseInt(value) - 1;
    if (number >= 0 && number < content_list.length / DEFAULT_NUMBER_PER_PAGE) {
      current_page_number.set(number);
    } else if (number < 0) current_page_number.set(0);
    else if (number >= content_list.length / DEFAULT_NUMBER_PER_PAGE) {
      current_page_number.set(
        parseInt((content_list.length / DEFAULT_NUMBER_PER_PAGE).toString())
      );
    }
  }
</script>

<ul class="post-list">
  <slot />
  <div class="pager_now">
    {#if $current_page_number > 0}
      <div class="previous_page">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" on:click={MoveFrontPage}>&larr; Newer</a>
      </div>
    {:else}
      <div class="previous_page">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" on:click={NotAllowClick} class="line-through"
          >&larr; Newer</a
        >
      </div>
    {/if}

    <div class="current_page">
      <!-- <span>{$current_page_number + 1}</span> -->
      <input value={$current_page_number + 1} on:change={ChangeCurrentPage} />
    </div>

    {#if ($current_page_number + 1) * DEFAULT_NUMBER_PER_PAGE < content_list.length}
      <div class="next_page">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" on:click={MoveNextPage}>Older &rarr;</a>
      </div>
    {:else}
      <div class="next_page">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" on:click={NotAllowClick} class="line-through"
          >Older &rarr;</a
        >
      </div>
    {/if}
  </div>
</ul>

<style lang="scss">
  .pager_now {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    //.previous_page a, .next_page a,
    .current_page > input {
      padding: 0.3rem 1rem 0.3rem 1rem;
      border: 1px solid #111111;
      margin: 0rem 0rem 0rem 0rem;
      border-radius: 15px;
      width: 3rem;
      text-align: center;
    }
  }
  .line-through {
    text-decoration-line: line-through;
  }
</style>
