<script>

import page from "page.js"
  
import Index from './index.svelte';
import About from './about.svelte';
import Project from './project.svelte';

import {path, INDEX, ABOUT, PROJECT, TECH, ESSAY} from "./store/path"

page('/', ()=>{change_switcher(INDEX)})
page('/about', ()=>{change_switcher(ABOUT)})
page('/project', ()=>{change_switcher(PROJECT)})
// page('/blog/tech', ()=>{change_switcher(TECH)})
// page('/blog/essay', ()=>{change_switcher(ESSAY)})
page()

function change_switcher(pagename){
  path.set(pagename)
}

</script>

{#if $path === INDEX}
  <Index></Index>
{:else if $path === ABOUT}
  <About></About>
{:else if $path === PROJECT}
  <Project></Project>
{:else}
  <Index></Index>
{/if}