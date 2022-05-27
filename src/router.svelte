<script lang="ts">
  import "tailwindcss/tailwind.css"

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
  import Pureblog from "./pages/pureblog.svelte";

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
    ESSAY_URL,
    TECH_URL,
    TECH_INDEX_URL,
    YEAR_SUMMARY_URL,
    YEAR_SUMMARY_INDEX_URL,
    ESSAY_INDEX_URL,
    YEAR_SUMMARY,
    blogtype,
  } from "./config/path";
  import sitepath from "./config/path";
  import YearSummary from "./pages/year-summary.svelte";
  import Error from "./errorpages/error.svelte";

  let blogpath: string = "";
  let firstTimeShow: boolean = false;

  for (const [pagename, pagepath] of Object.entries(sitepath)) {
    page(pagepath, (ctx: any) => {
      // console.log('=====ctx===========')
      // for (const [key, value] of Object.entries(ctx)) {
      //   console.log(`${key}: ${value}`);
      // }
      // console.log('======ctx.state==========')
      // for (const [key, value] of Object.entries(ctx.state)) {
      //   console.log(`${key}: ${value}`);
      // }
      // console.log('=====ctx.params===========')
      // for (const [key, value] of Object.entries(ctx.params)) {
      //   console.log(`${key}: ${value}`);
      // }
      // console.log('================')
      // console.log(ctx.init)
      if (ctx.init && ctx.init === true) {
        firstTimeShow = true;
      } else {
        firstTimeShow = false;
      }

      change_switcher(pagename);
      if (pagename == BLOG) {
        blogpath = ctx.path;
        blogtype.set(ctx.params.type);
      } else if (pagename == BLOG_OTHER) {
        blogpath = ctx.path;
        blogtype.set(ctx.params.type);
      }
    });
  }
  page(404);

  function change_switcher(pagename) {
    path.set(pagename);
    console.log(pagename);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/epg1wck.css">
  <!-- <script>
    (function (d) {
      var config = {
          kitId: "rsf7iyt",
          scriptTimeout: 3000,
          async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
          h.className =
            h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
          Typekit.load(config);
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s);
    })(document);
  </script> -->
</svelte:head>

{#if $path === INDEX}
  <Index {firstTimeShow} />
{:else if $path === ABOUT}
  <About {firstTimeShow} />
{:else if $path === PROJECT}
  <Project {firstTimeShow} />
{:else if $path === TECH}
  <Tech {firstTimeShow} />
{:else if $path === ESSAY}
  <Essay {firstTimeShow} />
{:else if $path === YEAR_SUMMARY}
  <YearSummary {firstTimeShow} />
{:else if $path === RANDOM}
  <Random />
{:else if $path === BLOG && $blogtype == ESSAY}
  <Blog {blogpath} indexUrl={ESSAY_INDEX_URL} contentUrl={ESSAY_URL} />
{:else if $path === BLOG && $blogtype == TECH}
  <Blog {blogpath} indexUrl={TECH_INDEX_URL} contentUrl={TECH_URL} />
{:else if $path === BLOG_OTHER && $blogtype == YEAR_SUMMARY}
  <Pureblog
    {blogpath}
    indexUrl={YEAR_SUMMARY_INDEX_URL}
    contentUrl={YEAR_SUMMARY_URL}
  />
{:else if $path === BLOG_OTHER || $path === BLOG}
  <Blog {blogpath} indexUrl={TECH_INDEX_URL} contentUrl={TECH_URL} />
{:else}
  <Error />
{/if}
