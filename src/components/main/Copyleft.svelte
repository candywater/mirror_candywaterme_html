<script lang="ts">
  import { FormatDateYear } from "../../common/common";
  // const animation = "animated jello";
  import type { ISiteInfo } from "../../interface/ISiteInfo";

  let site: ISiteInfo = {
    author: "candywater",
    time: new Date(),
  };
</script>

<div class={"copyleft "}>
  <p>copyleft &copy; {site.author} {FormatDateYear(site.time)}</p>
</div>

<style lang="scss">
  .copyleft > p {
    margin-top: 1px;
    padding-left: 2px;
    padding-right: 2px;
    background-color: rgba(254, 254, 254, 0.3);
  }
</style>
