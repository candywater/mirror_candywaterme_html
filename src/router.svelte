<script>

import page from "page.js"
  
import Index from './index.svelte';
import About from './about.svelte';
import Project from './project.svelte';

import {path, INDEX, ABOUT, PROJECT} from "./store/path"

let switcher = INDEX;

const unsubscribe = path.subscribe(val => switcher = val)

page('/', ()=>{change_switcher(INDEX)})
page('/about', ()=>{change_switcher(ABOUT)})
page('/project', ()=>{change_switcher(PROJECT)})
page()

function change_switcher(pagename){
  path.set(pagename)
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