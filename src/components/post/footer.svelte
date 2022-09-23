<script lang="ts">
  import { FormatDateYear } from "../../common/common";
  import { ESSAY, CurrentPath, TECH } from "../../config/path";
  import { SiteInfo } from "../../config/siteinfo";

  import type { ISiteInfo } from "../../interface/ISiteInfo";

  let site: ISiteInfo = SiteInfo;
</script>

<footer class="site-footer">
  <div class="">
    <h2 class="footer-heading">{site.title}</h2>

    <div class="footer-col-wrapper flex justify-between">
      <div class="footer-col footer-col-2">
        {#if site.github_username}
          <a href={"https://github.com/" + site.github_username}>
            <div class="nes-icon github is-a-little-small" />
          </a>
        {/if}

        {#if site.twitter_username}
          <a href={"https://twitter.com/" + site.twitter_username}>
            <div class="nes-icon twitter is-a-little-small" />
          </a>
        {/if}

        {#if site.author}
          <a href={"https://about.me/" + site.author}>
            <div class="nes-icon aboutme is-a-little-small" />
          </a>
        {/if}

        <!-- {#if $CurrentPath == ESSAY}
          <a href="https://candywater.me/doc/_info/essay.xml">
            <div class="nes-icon rss is-a-little-small" /></a
          >
        {/if}
        {#if $CurrentPath == TECH}
          <a href="https://candywater.me/doc/_info/tech.xml"
            ><div class="nes-icon rss is-a-little-small" /></a
          >
        {/if} -->
      </div>

      <div class="footer-col footer-col-1">
        <ul class="contact-list">
          <li>
            {#if site.title}
              {site.title}
            {/if}
          </li>
          {#if site.email}
            <li><a href="mailto:{site.email}">{site.email}</a></li>
          {/if}
        </ul>
      </div>

      <div class="footer-col footer-col-3">
        <!-- <p>{site.description}</p> -->
        <p>copyleft &copy; {site.author} {FormatDateYear(site.time)}</p>
      </div>
    </div>
  </div>
</footer>
