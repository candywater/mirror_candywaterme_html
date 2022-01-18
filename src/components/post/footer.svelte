<script lang="ts">
  import type { ISiteInfo } from "../../interface/ISiteInfo";

  export let site: ISiteInfo;
</script>

<footer class="site-footer">
  <div class="wrapper">
    <h2 class="footer-heading">{site.title}</h2>

    <div class="footer-col-wrapper">
      <div class="footer-col footer-col-1">
        <ul class="contact-list">
          <li>
            {#if site.author}
              {site.author}
            {:else if site.title}
              {site.title}
            {/if}
          </li>
          {#if site.email}
            <li><a href="mailto:{site.email}">{site.email}</a></li>
          {/if}
        </ul>
      </div>

      <div class="footer-col footer-col-2">
        <ul class="social-media-list">
          {#if site.github_username}
            <li>
              <!-- { /*todo: add github*/ } -->
            </li>
          {/if}

          {#if site.twitter_username}
            <li>
              <!-- {/*todo: add twitter*/} -->
            </li>
          {/if}
        </ul>
      </div>

      <div class="footer-col footer-col-3">
        <p>{site.description}</p>
        <p>copyleft &copy; {site.time}</p>
      </div>
    </div>
  </div>
</footer>
