<script lang="ts">
  let show_quote = false;

  function onImgClick() {
    show_quote = !show_quote;
  }
</script>

<span class="">
  <a href="https://github.com/candywater">
    <div class="nes-icon github" />
  </a>
  <a href="https://twitter.com/candywater1">
    <div class="nes-icon twitter" />
  </a>
  <a href="https://about.me/candywater">
    <div class="nes-icon aboutme" />
  </a>
</span>

<br />
<br />

<div class="inline" id="credit">
  <a
    rel="license"
    target="_blank"
    href="http://creativecommons.org/licenses/by/4.0/"
    ><img
      alt="creativ common license"
      style="border-width:0"
      src="/assets/logos/cc/by_4.0.png"
    /></a
  >
  for technique,
  <a
    rel="license"
    target="_blank"
    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
    ><img
      alt="creativ common license"
      style="border-width:0"
      src="/assets/logos/cc/by_nc_sa_4.0.png"
    /></a
  >
  for arts. Click <a class="underline" href={"#"} on:click={onImgClick}> Here </a> For More.
</div>

{#if show_quote}
  <div class="inline" id="credit_info">
    Most techinical articles, in this site by <a
      href="http://candy-water.com/about"
      property="cc:attributionName"
      rel="cc:attributionURL">Candy Water</a
    >
    is under this
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
      >License</a
    >.
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
      ><img
        alt="クリエイティブ・コモンズ・ライセンス"
        style="border-width:0"
        src="/assets/logos/cc/small_by_4.0.png"
      /></a
    >

    <br />
    And most artwork, like essays and some visual works, in this site by
    <a
      href="http://candy-water.com/about"
      property="cc:attributionName"
      rel="cc:attributionURL">candy water</a
    >
    is under this
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
      >License</a
    >.
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
      ><img
        alt="クリエイティブ・コモンズ・ライセンス"
        style="border-width:0"
        src="/assets/logos/cc/small_by_nc_sa_4.0.png"
      /></a
    >
    <br />
    And for all code projects, read the license of that work, plz.
  </div>
{/if}

<style lang="scss">
  .inline {
    img {
      display: inline;
    }
  }
</style>
