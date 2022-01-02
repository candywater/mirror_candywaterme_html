<script lang="ts">
  import page from "page.js";

  import Index from "./pages/index.svelte";
  import About from "./pages/about.svelte";
  import Project from "./pages/project.svelte";
  import Tech from "./pages/tech.svelte";
  import Essay from "./pages/essay.svelte";
  import Random from "./pages/random.svelte";

  import { onDestroy } from "svelte";

  import {
    path,
    INDEX,
    ABOUT,
    PROJECT,
    TECH,
    ESSAY,
    RANDOM,
TECH_BLOG,
  } from "./store/path";
  import sitepath from "./store/path";

  var currentPath:string = INDEX;

  for (const [pagename, pagepath] of Object.entries(sitepath)) {
    page(pagepath, ()=>{
      console.log(`pagepath: ${pagepath}`)
      change_switcher(pagename);
    })
  }
  page(TECH_BLOG, ()=>{console.log("test")})
  page();

  function change_switcher(pagename) {
    path.set(pagename);
  }

  const unsubscribe = path.subscribe((value) => {
    currentPath = value;
  });
  onDestroy(unsubscribe);
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
