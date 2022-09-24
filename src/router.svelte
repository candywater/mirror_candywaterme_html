<script lang="ts">
  import "tailwindcss/tailwind.css";

  /* Bouncing entrances  */
  import "animate.css/source/_vars.css";
  import "animate.css/source/_base.css";
  import "animate.css/source/bouncing_entrances/bounceIn.css";
  import "animate.css/source/attention_seekers/jello.css";
  import "animate.css/source/fading_entrances/fadeIn.css";
  import "animate.css/source/fading_exits/fadeOutUp.css";

  import page from "page.js";

  import Index from "./html/pages/index.svelte";
  import About from "./html/pages/about.svelte";
  import Project from "./html/pages/project.svelte";
  import Tech from "./html/pages/tech.svelte";
  import Essay from "./html/pages/essay.svelte";
  import Random from "./html/pages/random.svelte";
  import Blog from "./html/posts/blog.svelte";
  import Pureblog from "./html/posts/pureblog.svelte";
  import YearSummary from "./html/pages/year-summary.svelte";
  import Error from "./html/error/error.svelte";


  import {
    CurrentPath as path,
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
    OTHER_INDEX_URL,
    OTHER_URL,
    CurrentPage,
  } from "./ts/config/path";
  import pathDict from "./ts/config/path";
  
  let blogpath: string = "";

  // // set page info => hard to understand
  // for (const [pagename, pagepath] of Object.entries(pathDict)) {
  //   page(pagepath, (ctx: any) => {
  //     change_switcher(pagename);
  //     // when post
  //     if (pagename == BLOG) {
  //       blogpath = ctx.path;
  //       CurrentPage.set(ctx.params.type);
  //     } else if (pagename == BLOG_OTHER) {
  //       blogpath = ctx.path;
  //       CurrentPage.set(ctx.params.type);
  //     }
  //   });
  // }
  
  page(pathDict[INDEX], ()=> change_switcher(INDEX))
  page(pathDict[ABOUT], ()=> change_switcher(ABOUT))
  page(pathDict[PROJECT], ()=> change_switcher(PROJECT))
  page(pathDict[ESSAY], ()=> change_switcher(ESSAY))
  page(pathDict[TECH], ()=> change_switcher(TECH))
  page(pathDict[YEAR_SUMMARY], ()=> change_switcher(YEAR_SUMMARY))
  page(pathDict[BLOG], (ctx: any)=> {
    change_switcher(BLOG);
    blogpath = ctx.path;
    CurrentPage.set(ctx.params.type); // only ESSAY/TECH, restricted by below html
  })
  page(pathDict[BLOG_OTHER], (ctx: any)=> {
    change_switcher(BLOG_OTHER)
    blogpath = ctx.path;
    CurrentPage.set(ctx.params.type); // YEAR_SUMMARY or any others, restricted by below html
  })

  page(404);
  loadBackgroundColor();

  function change_switcher(pagename) {
    path.set(pagename);
    console.log(pagename);
  }

  function loadBackgroundColor() {
    let classname = localStorage.getItem("candy_background_setting");
    if (classname) document.querySelector("body").className = classname;
  }
</script>

<div>
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
  {:else if $path === YEAR_SUMMARY}
    <YearSummary />
  {:else if $path === RANDOM}
    <Random />
  {:else if $path === BLOG && $CurrentPage == ESSAY}
    <Blog {blogpath} indexUrl={ESSAY_INDEX_URL} contentUrl={ESSAY_URL} />
  {:else if $path === BLOG && $CurrentPage == TECH}
    <Blog {blogpath} indexUrl={TECH_INDEX_URL} contentUrl={TECH_URL} />
  {:else if $path === BLOG_OTHER && $CurrentPage == YEAR_SUMMARY}
    <Pureblog
      {blogpath}
      indexUrl={YEAR_SUMMARY_INDEX_URL}
      contentUrl={YEAR_SUMMARY_URL}
    />
  {:else if $path === BLOG_OTHER || $path === BLOG}
    <Blog {blogpath} indexUrl={OTHER_INDEX_URL} contentUrl={OTHER_URL} />
  {:else}
    <Error />
  {/if}
  <link
    rel="stylesheet"
    href="https://use.typekit.net/epg1wck.css"
    lazyload="1"
  />
</div>
