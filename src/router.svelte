<script>

import page from "page.js"
  
import Index from './index.svelte';
import About from './about.svelte';
import Project from './project.svelte';
import Tech from './tech.svelte';
import Essay from './essay.svelte';

import {path, INDEX, ABOUT, PROJECT, TECH, ESSAY} from "./store/path"
import {is_hide_all_content} from "./store/config"

page('/', ()=>{change_switcher(INDEX)})
page('/about', ()=>{change_switcher(ABOUT)})
page('/project', ()=>{change_switcher(PROJECT)})
page('/blog/tech', ()=>{change_switcher(TECH)})
page('/blog/essay', ()=>{change_switcher(ESSAY)})
page()

function change_switcher(pagename){
  path.set(pagename)
  if(pagename === TECH || pagename === ESSAY)
    $is_hide_all_content = true
  else
    $is_hide_all_content = false
}

</script>

{#if $path === INDEX}
  <Index></Index>
{:else if $path === ABOUT}
  <About></About>
{:else if $path === PROJECT}
  <Project></Project>
{:else if $path === TECH}
  <Tech></Tech>
{:else if $path === ESSAY}
  <Essay></Essay>
{:else}
  <Index></Index>
{/if}