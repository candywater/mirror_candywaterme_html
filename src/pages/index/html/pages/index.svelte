<script lang="ts">
  import { CdnPrefixUrl } from "@/ts/config/config";
  import Main from "./main.svelte";

  const quote_url = "";
  const quote_list:string[] = [];
  const description = "";
</script>

<!--desktop-->
<!-- src="https://readme-typing-svg.herokuapp.com?font=sans-serif&color=%23000000&size=24&width=700&lines=%E2%80%9C%E8%99%BD%E7%84%B6%E7%9E%8E%E5%AD%90%E6%84%9F%E6%83%85%E5%A4%B1%E8%B4%A5%EF%BC%8C%E4%BD%86%E5%9C%A8%E6%AD%A4%E5%90%8E%E7%A7%89%E7%83%9B%E5%A4%9C%E8%81%8A%E4%B8%AD%E6%95%99%E4%BC%9A%E6%88%91%E5%BE%88%E5%A4%9A%E4%B8%9C%E8%A5%BF%E3%80%82;%E6%AF%94%E5%A6%82%EF%BC%9A%E5%AD%A6%E4%BC%9A%E8%87%AA%E6%88%91%E6%AC%BA%E9%AA%97%EF%BC%8C%E6%95%A2%E4%BA%8E%E9%9D%A2%E5%AF%B9%E8%87%AA%E5%B7%B1%E6%9C%80%E6%97%A0%E8%80%BB%E7%9A%84%E5%BF%B5%E5%A4%B4%EF%BC%8C;%E6%95%A2%E4%BA%8E%E8%A1%8C%E5%8A%A8%EF%BC%8C%E8%BF%87%E5%90%8E%E8%AF%B4%E5%AE%9E%E8%AF%9D%E3%80%82%E5%87%A1%E4%BA%8B%E6%83%B3%E5%81%9A%E5%B0%B1%E5%81%9A%EF%BC%8C%E6%83%B3%E5%A4%AA%E5%A4%9A%E6%B2%A1%E7%94%A8%E3%80%82;%E6%89%93%E6%9E%B6%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E6%B0%94%E5%8A%BF%EF%BC%8C%E4%B8%80%E6%97%A6%E5%8A%A8%E6%89%8B%EF%BC%8C%E5%85%88%E7%8E%AF%E8%A7%86%E5%9B%9B%E5%91%A8%EF%BC%8C;%E7%94%AD%E7%AE%A1%E7%9C%8B%E8%A7%81%E4%BB%80%E4%B9%88%EF%BC%8C%E8%B6%8A%E4%B8%8D%E6%95%A2%E6%8B%BF%E7%9A%84%E5%B0%B1%E8%B6%8A%E8%A6%81%E5%86%B2%E4%B8%8A%E6%8B%BF%E8%B5%B7%E6%9D%A5%EF%BC%8C%E6%B0%94%E5%8A%BF%E4%B8%8A%E7%BB%9D%E5%AF%B9%E8%A6%81%E5%85%88%E5%8E%8B%E8%BF%87%E5%AF%B9%E6%96%B9%E3%80%82;%E5%8F%A6%E5%A4%96%E5%BE%88%E5%A4%9A%E4%BB%A5%E5%89%8D%E6%83%B3%E8%BF%87%E7%9A%84%E7%83%A6%E6%81%BC%EF%BC%8C%E7%9C%9F%E6%AD%A3%E5%8E%BB%E9%9D%A2%E5%AF%B9%E6%97%B6%E5%B9%B6%E4%B8%8D%E9%9A%BE%E8%BF%87%E3%80%82;%E5%8D%B3%E4%BD%BF%E5%92%8C%E7%8C%B4%E5%AD%90%E5%8D%95%E6%8C%91CS%EF%BC%8C%E6%8A%8A%E6%8A%8A%E8%A2%AB%E4%BB%96%E6%89%8B%E6%9E%AA%E7%88%86%E5%A4%B4%EF%BC%8C%E4%B9%9F%E5%88%AB%E5%AF%B9%E4%BB%96%E5%A4%A7%E5%96%8A%E5%A4%A7%E5%8F%AB%EF%BC%8C;%E5%85%B6%E5%AE%9E%E5%9C%A8%E7%B2%BE%E7%A5%9E%E4%B8%8A%EF%BC%8C%E5%B7%B2%E7%BB%8F%E5%BC%BA%E5%A5%B8%E4%BA%86%E7%8C%B4%E5%AD%90%E3%80%82%E2%80%9D+from+%E5%B0%8F%E8%AF%B4%E3%80%8A%E9%80%9B%E8%8D%A1%C2%B7%E7%AC%AC%E4%B8%89%E5%8D%B7%C2%B7%E7%9E%8E%E5%AD%90%E3%80%8B" -->

<!--mobile-->
<!-- src="https://readme-typing-svg.herokuapp.com?font=system-ui&color=%23000000&size=36&height=70&lines=%E2%80%9C%E8%99%BD%E7%84%B6%E7%9E%8E%E5%AD%90%E6%84%9F%E6%83%85%E5%A4%B1%E8%B4%A5%EF%BC%8C;%E4%BD%86%E5%9C%A8%E6%AD%A4%E5%90%8E%E7%A7%89%E7%83%9B%E5%A4%9C%E8%81%8A%E4%B8%AD%E6%95%99%E4%BC%9A%E6%88%91%E5%BE%88%E5%A4%9A%E4%B8%9C%E8%A5%BF%E3%80%82;%E6%AF%94%E5%A6%82%EF%BC%9A%E5%AD%A6%E4%BC%9A%E8%87%AA%E6%88%91%E6%AC%BA%E9%AA%97%EF%BC%8C;%E6%95%A2%E4%BA%8E%E9%9D%A2%E5%AF%B9%E8%87%AA%E5%B7%B1%E6%9C%80%E6%97%A0%E8%80%BB%E7%9A%84%E5%BF%B5%E5%A4%B4%EF%BC%8C;%E6%95%A2%E4%BA%8E%E8%A1%8C%E5%8A%A8%EF%BC%8C%E8%BF%87%E5%90%8E%E8%AF%B4%E5%AE%9E%E8%AF%9D%E3%80%82;%E5%87%A1%E4%BA%8B%E6%83%B3%E5%81%9A%E5%B0%B1%E5%81%9A%EF%BC%8C%E6%83%B3%E5%A4%AA%E5%A4%9A%E6%B2%A1%E7%94%A8%E3%80%82;%E6%89%93%E6%9E%B6%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E6%B0%94%E5%8A%BF%EF%BC%8C;%E4%B8%80%E6%97%A6%E5%8A%A8%E6%89%8B%EF%BC%8C%E5%85%88%E7%8E%AF%E8%A7%86%E5%9B%9B%E5%91%A8%EF%BC%8C;%E7%94%AD%E7%AE%A1%E7%9C%8B%E8%A7%81%E4%BB%80%E4%B9%88%EF%BC%8C;%E8%B6%8A%E4%B8%8D%E6%95%A2%E6%8B%BF%E7%9A%84%E5%B0%B1%E8%B6%8A%E8%A6%81%E5%86%B2%E4%B8%8A%E6%8B%BF%E8%B5%B7%E6%9D%A5%EF%BC%8C;%E6%B0%94%E5%8A%BF%E4%B8%8A%E7%BB%9D%E5%AF%B9%E8%A6%81%E5%85%88%E5%8E%8B%E8%BF%87%E5%AF%B9%E6%96%B9%E3%80%82;%E5%8F%A6%E5%A4%96%E5%BE%88%E5%A4%9A%E4%BB%A5%E5%89%8D%E6%83%B3%E8%BF%87%E7%9A%84%E7%83%A6%E6%81%BC%EF%BC%8C;%E7%9C%9F%E6%AD%A3%E5%8E%BB%E9%9D%A2%E5%AF%B9%E6%97%B6%E5%B9%B6%E4%B8%8D%E9%9A%BE%E8%BF%87%E3%80%82;%E5%8D%B3%E4%BD%BF%E5%92%8C%E7%8C%B4%E5%AD%90%E5%8D%95%E6%8C%91CS%EF%BC%8C;%E6%8A%8A%E6%8A%8A%E8%A2%AB%E4%BB%96%E6%89%8B%E6%9E%AA%E7%88%86%E5%A4%B4%EF%BC%8C;%E4%B9%9F%E5%88%AB%E5%AF%B9%E4%BB%96%E5%A4%A7%E5%96%8A%E5%A4%A7%E5%8F%AB%EF%BC%8C;%E5%85%B6%E5%AE%9E%E5%9C%A8%E7%B2%BE%E7%A5%9E%E4%B8%8A%EF%BC%8C%E5%B7%B2%E7%BB%8F%E5%BC%BA%E5%A5%B8%E4%BA%86%E7%8C%B4%E5%AD%90%E3%80%82%E2%80%9D+++;from+%E5%B0%8F%E8%AF%B4%E3%80%8A%E9%80%9B%E8%8D%A1%C2%B7%E7%AC%AC%E4%B8%89%E5%8D%B7%C2%B7%E7%9E%8E%E5%AD%90%E3%80%8B" -->

<Main {quote_url} {quote_list} {description} isHide={false}>
  <p class="desktop">
    <a href="https://git.io/typing-svg"
      ><img src={CdnPrefixUrl + "desktop.herokuapp.svg"} alt="Typing SVG" /></a
    >
  </p>

  <p class="mobile">
    <a href="https://git.io/typing-svg"
      ><img src={CdnPrefixUrl + "mobile.herokuapp.svg"} alt="Typing SVG" /></a
    >
  </p>
</Main>

<style lang="scss">
  @media screen {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
    @media (max-width: 640px) {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }
</style>
