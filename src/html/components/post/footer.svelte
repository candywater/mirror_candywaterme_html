<script lang="ts">
  import { FormatDateYear } from "../../../ts/common/common";
  import { SiteInfo } from "../../../ts/config/siteinfo";
</script>

<footer class="$SiteInfo-footer">
  <div class="">
    <h2 class="footer-heading">[{$SiteInfo.title}]</h2>

    <div class="footer-col-wrapper flex justify-between">
      <div class="footer-col footer-col-2">
        {#if $SiteInfo.github_username}
          <a href={"https://github.com/" + $SiteInfo.github_username}>
            <div class="nes-icon github is-a-little-small" />
          </a>
        {/if}

        {#if $SiteInfo.twitter_username}
          <a href={"https://twitter.com/" + $SiteInfo.twitter_username}>
            <div class="nes-icon twitter is-a-little-small" />
          </a>
        {/if}

        {#if $SiteInfo.author}
          <a href={"https://about.me/" + $SiteInfo.author}>
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
        <div class="contact-list">
          <ul>
            {#if $SiteInfo.email}
              <li><a href="mailto:{$SiteInfo.email}">{$SiteInfo.email}</a></li>
            {/if}
          </ul>
        </div>
      </div>

      <div class="footer-col footer-col-3">
        <!-- <p>{$SiteInfo.description}</p> -->
        <p>
          copyleft &copy; {$SiteInfo.author}
          {FormatDateYear($SiteInfo.time)}
        </p>
      </div>
    </div>
  </div>
</footer>
