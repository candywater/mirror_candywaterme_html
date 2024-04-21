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

  import Index from "./pages/index.svelte";
  import About from "./pages/about.svelte";
  import Project from "./pages/project.svelte";
  import Tech from "./pages/tech.svelte";
  import Essay from "./pages/essay.svelte";
  import Random from "./pages/random.svelte";

  import Blog from "./pages/blog.svelte";
  import Pureblog from "./pages/pureblog.svelte";
  import YearSummary from "./pages/year-summary.svelte";
  import Error from "./error/error.svelte";

  import GithubOauthRedirect from "./pages/oauth/githubOauthRedirect.svelte"

  import {
    INDEX,
    ABOUT,
    PROJECT,
    TECH,
    ESSAY,
    RANDOM,
    BLOG,
    BLOG_OTHER,
    GITHUB_OAUTH_CALLBACK,
  } from "@/ts/config/path";
  import { CurrentPath as path, CurrentPageType } from "@/ts/config/path";
  import {
    ESSAY_URL,
    TECH_URL,
    TECH_INDEX_URL,
    YEAR_SUMMARY_URL,
    YEAR_SUMMARY_INDEX_URL,
    ESSAY_INDEX_URL,
    YEAR_SUMMARY,
    OTHER_INDEX_URL,
    OTHER_URL,
  } from "@/ts/config/path";
  import PATH_DICT from "@/ts/config/path";
    import { loadBackgroundColor } from "@/ts/common/ui";

  let blogpath: string = "";

  page(PATH_DICT[INDEX], () => navigateTo(INDEX));
  page(PATH_DICT[ABOUT], () => navigateTo(ABOUT));
  page(PATH_DICT[PROJECT], () => navigateTo(PROJECT));
  page(PATH_DICT[ESSAY], () => navigateTo(ESSAY));
  page(PATH_DICT[TECH], () => navigateTo(TECH));
  page(PATH_DICT[YEAR_SUMMARY], () => navigateTo(YEAR_SUMMARY));
  page(PATH_DICT[BLOG], (ctx: any) => {
    navigateTo(BLOG);
    blogpath = ctx.path;
    CurrentPageType.set(ctx.params.type); // only ESSAY/TECH, restricted by below html
  });
  page(PATH_DICT[BLOG_OTHER], (ctx: any) => {
    navigateTo(BLOG_OTHER);
    blogpath = ctx.path;
    CurrentPageType.set(ctx.params.type); // YEAR_SUMMARY or any others, restricted by below html
  });
  page(PATH_DICT[GITHUB_OAUTH_CALLBACK], () => navigateTo(GITHUB_OAUTH_CALLBACK));

  page(404);
  loadBackgroundColor();

  function navigateTo(pagename : string) {
    path.set(pagename);
    //window.history.pushState({}, null, PATH_DICT[pagename]);
    // console.log(PATH_DICT[pagename]);
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
  {:else if $path === BLOG && $CurrentPageType == ESSAY}
    <Blog {blogpath} indexUrl={ESSAY_INDEX_URL} contentUrl={ESSAY_URL} />
  {:else if $path === BLOG && $CurrentPageType == TECH}
    <Blog {blogpath} indexUrl={TECH_INDEX_URL} contentUrl={TECH_URL} />
  {:else if $path === BLOG_OTHER && $CurrentPageType == YEAR_SUMMARY}
    <Pureblog
      {blogpath}
      indexUrl={YEAR_SUMMARY_INDEX_URL}
      contentUrl={YEAR_SUMMARY_URL}
    />
  {:else if $path === BLOG_OTHER || $path === BLOG}
    <Blog {blogpath} indexUrl={OTHER_INDEX_URL} contentUrl={OTHER_URL} />
  {:else if $path === GITHUB_OAUTH_CALLBACK}
    <GithubOauthRedirect />
  {:else}
    <Error />
  {/if}
  <!-- <link
    rel="stylesheet"
    href="https://use.typekit.net/epg1wck.css"
    lazyload="1"
  /> -->
</div>
