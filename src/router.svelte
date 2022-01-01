<script>
  import page from "page.js";

  import Index from "./pages/index.svelte";
  import About from "./pages/about.svelte";
  import Project from "./pages/project.svelte";
  import Tech from "./pages/tech.svelte";
  import Essay from "./pages/essay.svelte";
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
  } from "./store/path";
  import sitepath from "./store/path";

  var currentPath = INDEX;

  for (const [pagename, pagepath] of Object.entries(sitepath)) {
    page(pagepath, ()=>{
      change_switcher(pagename, pagepath);
    })
  }
  page();

  function change_switcher(pagename, pagepath) {
    path.set(pagename);
    console.log(pagename)
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
{:else}
  <Index />
{/if}
