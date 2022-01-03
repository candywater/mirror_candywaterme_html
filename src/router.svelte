<script lang="ts">
  /* Bouncing entrances  */
  import "animate.css/source/_vars.css";
  import "animate.css/source/_base.css";
  import "animate.css/source/bouncing_entrances/bounceIn.css";
  import "animate.css/source/attention_seekers/jello.css";
  import "animate.css/source/fading_entrances/fadeIn.css";
  // import "animate.css/source/fading_entrances/fadeInUpBig.css";
  // import "animate.css/source/fading_entrances/fadeInUp.css";
  //import "animate.css/source/fading_exits/fadeOut.css";
  import "animate.css/source/fading_exits/fadeOutUp.css";

  import page from "page.js";

  import Index from "./pages/index.svelte";
  import About from "./pages/about.svelte";
  import Project from "./pages/project.svelte";
  import Tech from "./pages/tech.svelte";
  import Essay from "./pages/essay.svelte";
  import Blog from "./pages/blog.svelte";
  import Random from "./pages/random.svelte";

  import {
    path,
    INDEX,
    ABOUT,
    PROJECT,
    TECH,
    ESSAY,
    RANDOM,
    BLOG,
    BLOG_OTHER,
  } from "./config/path";
  import sitepath from "./config/path";

  let type: string = "";
  let year: string = "";
  let articlepath: string = "";

  for (const [pagename, pagepath] of Object.entries(sitepath)) {
    page(pagepath, (ctx) => {
      console.log(`pagepath: ${pagepath}`);
      change_switcher(pagename);
      if (pagename == BLOG) {
        type = ctx.params.type;
        year = ctx.params.year;
        articlepath = ctx.params.articlepath;
      } else if (pagename == BLOG_OTHER) {
        type = ctx.params.type;
      }
    });
  }
  page();

  function change_switcher(pagename) {
    path.set(pagename);
  }
</script>

{#if $path === INDEX}
  <Index />
{:else if $path === ABOUT}
  <About />
{:else if $path === PROJECT}
  <Project />
{:else if $path === TECH}
  <Tech />
{:else if $path === ESSAY}
  <Essay />
{:else if $path === RANDOM}
  <Random />
{:else if $path === BLOG}
  <Blog {type} {year} {articlepath} />
{:else if $path === BLOG_OTHER}
  <Blog {type} {year} {articlepath} />
{:else}
  <Index />
{/if}
