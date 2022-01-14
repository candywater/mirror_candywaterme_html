<script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const MY_NAME = "Candy Water";
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { show_quote } from "../../config/config";

  export let description: string;

  const PROFILE_IMG_URL =
    "/assets/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg";
  const MY_DESCRIPTION_DEFAULT =
    "Full stack engineer, amateur content creator.";

  function onImgClick() {
    show_quote.set(!$show_quote);
  }

  onMount(() => {
    if (!description) {
      description = MY_DESCRIPTION_DEFAULT;
    }
  });
</script>

<div class="profile">
  <br />
  <div class="figure">
    <img
      src={PROFILE_IMG_URL}
      class="real-rounded-circle border-double border-4 border-white 
        hover:border-solid active:ring active:ring-amber-500 "
      alt="profile"
      id="profile_photo"
      title="why not try clicking this?"
      on:click={onImgClick}
    />
    <p class="text-center">{MY_NAME}</p>
  </div>
  <p class="blockquote">
    {description}
  </p>
  <slot />
</div>

<style lang="scss">
  .profile {
    margin: 0rem 1rem;
    .figure {
      img {
        width: 13rem;
      }
    }

    .real-rounded-circle {
      border-radius: 10em;
    }
  }
</style>
