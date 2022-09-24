<script context="module">
  //https://stackoverflow.com/questions/63044344/api-requests-in-svelte
  // import profile from "/stills/profile/steffen-petermann-457910-unsplash_resize_320x266.jpg"
  const MY_NAME = "Candy Water";
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { show_quote } from "../../ts/config/config";

  export let description: string;
  let _img_anime: string = "blur-sm";

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
    setTimeout(() => (_img_anime = "blur-none"), 100);
  });
</script>

<div class="profile">
  <br />
  <div class="figure">
    <img
      src={PROFILE_IMG_URL}
      class="real-rounded-circle border-solid border-4 border-white 
        hover:border-double active:border-0 active:ring active:ring-violet-500 {_img_anime}"
      alt="profile"
      id="profile_photo"
      title="why not try clicking this?"
      on:click={onImgClick}
    />
    <span class=" clear-left float-right">
      <img src="/assets/logos/candywater/signed/candywater.png" alt="candywater" />
      <!-- <span class="sign">CandyWater</span> -->
    </span>
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
      img:hover {
        transform: scale(1.02);
      }
    }

    .real-rounded-circle {
      border-radius: 10em;
    }

    .sign{
      font-family:  looking-flowers-script, sans-serif; 
      font-size:2.5rem;
    }
  }

</style>
