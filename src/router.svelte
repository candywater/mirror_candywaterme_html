<script>
  import page from "page.js";

  import Index from "./pages/index.svelte";
  import About from "./pages/about.svelte";
  import Project from "./pages/project.svelte";
  import Tech from "./pages/tech.svelte";
  import Essay from "./pages/essay.svelte";
  import Random from "./pages/random.svelte";
  import Blog from "./pages/blog.svelte";

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
  import {
    INDEX_PATH,
    ABOUT_PATH,
    PROJECT_PATH,
    TECH_PATH,
    ESSAY_PATH,
    RANDOM_PATH,
    BLOG_PATH,
  } from "./store/path";
  import { is_hide_all_content } from "./store/config";

  page(INDEX_PATH, () => {
    change_switcher(INDEX);
  });
  page(ABOUT_PATH, () => {
    change_switcher(ABOUT);
  });
  page(PROJECT_PATH, () => {
    change_switcher(PROJECT);
  });
  page(TECH_PATH, () => {
    change_switcher(TECH);
  });
  page(ESSAY_PATH, () => {
    change_switcher(ESSAY);
  });
  page(BLOG_PATH, () => {
    change_switcher(BLOG);
  });
  page(RANDOM_PATH, () => {
    change_switcher(RANDOM);
  });
  page();

  function change_switcher(pagename) {
    path.set(pagename);
    // if(pagename === TECH || pagename === ESSAY || pagename === BLOG)
    //   $is_hide_all_content = true
    // else
    //   $is_hide_all_content = false
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
{:else if $path === BLOG}
  <Blog />>
{:else if $path === RANDOM}
  <Random />
{:else}
  <Index />
{/if}
