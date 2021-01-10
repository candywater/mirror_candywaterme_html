<script>

import page from "page.js"
  
import Index from './index.svelte';
import About from './about.svelte';
import Project from './project.svelte';


export const INDEX = "index"
export const ABOUT = "about"
export const PROJECT = "project"

export let switcher = INDEX

page('/', ()=>{change_switcher(INDEX)})
page('/about', ()=>{change_switcher(ABOUT)})
page('/project', ()=>{change_switcher(PROJECT)})
page()

function change_switcher(pagename){
  switcher = pagename
}

</script>

{#if switcher === INDEX}
  <Index></Index>
{:else if switcher === ABOUT}
  <About></About>
{:else if switcher === PROJECT}
  <Project></Project>
{:else}
  <Index></Index>
{/if}