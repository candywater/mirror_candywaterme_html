<script lang="ts">
  import { FormatDateYear } from "@/ts/common/common";
  import { SiteInfo } from "@/ts/config/siteinfo";
  import BookIcon from "../common/icons/BookIcon.svelte";
  import GithubIcon from "../common/icons/GithubIcon.svelte";
  import TwitterXIcon from "../common/icons/TwitterXIcon.svelte";
  import RssIcon from "../common/icons/RssIcon.svelte";
  import { CurrentPath, ESSAY, TECH } from "@/ts/config/path";
</script>

<footer class="$SiteInfo-footer">
  <div class="">
    <h2 class="footer-heading">[{$SiteInfo.title}]</h2>

    <div class="footer-col-wrapper flex justify-between">
      <div class="footer-col footer-col-2 inline-flex">
        {#if $SiteInfo.github_username}
          <a
            href={"https://github.com/" + $SiteInfo.github_username}
            class="ml-2 mr-2"
          >
            <GithubIcon />
          </a>
        {/if}

        {#if $SiteInfo.twitter_username}
          <a
            href={"https://twitter.com/" + $SiteInfo.twitter_username}
            class="ml-2 mr-2"
          >
            <TwitterXIcon />
          </a>
        {/if}

        {#if $SiteInfo.author}
          <a href={"https://about.me/" + $SiteInfo.author} class="ml-2 mr-2">
            <BookIcon />
          </a>
        {/if}

        {#if $CurrentPath == ESSAY}
          <a href="https://candywater.me/doc/_info/essay.xml" class="ml-2 mr-2">
            <RssIcon />
          </a>
        {/if}
        {#if $CurrentPath == TECH}
          <a href="https://candywater.me/doc/_info/tech.xml" class="ml-2 mr-2"
            ><RssIcon />
          </a>
        {/if}
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
