<script>

import page from "page.js"
  
import Index from './index.svelte';
import About from './about.svelte';
import Project from './index.svelte';

const INDEX = "index"
const ABOUT = "about"
const PROJECT = "project"

let switcher = INDEX

page('/', ()=>{switcher = INDEX})
page('/about', ()=>{switcher = ABOUT})
page('/project', ()=>{switcher = PROJECT})
page()

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