<svelte:head>
  <title>欢迎━(*｀∀´*)ノ亻!</title>
  {#if show_blog && $path === TECH}
    <link rel="preload" href="/blog/tech/" as="document">
  {/if}
  {#if show_blog && $path === ESSAY}
    <link rel="preload" href="/blog/essay/" as="document">
  {/if}
</svelte:head>

<script>
// import 'animate.css/animate.min.css'
import 'animate.css/source/_vars.css';
import 'animate.css/source/_base.css';

/* Bouncing entrances  */
import 'animate.css/source/bouncing_entrances/bounceIn.css';
import 'animate.css/source/attention_seekers/jello.css';
import 'animate.css/source/fading_entrances/fadeIn.css';
import 'animate.css/source/fading_exits/fadeOut.css';

import { onDestroy } from 'svelte';
import {is_hide_all_content} from "./store/config"
import {path, INDEX, ABOUT, PROJECT, TECH, ESSAY} from "./store/path"

const HIDE_ANIMATION = "animated fadeOut faster"
const SHOW_ANIMATION = "animated fadeIn faster"
let fadeOutAnimation = ""
// it seems that... no need to delete show animation after animationEnd
// let fadeInAnimation = ""
let show_blog = false

const unsubscribe = is_hide_all_content.subscribe(isHide => {
  if(isHide){
    fadeOutAnimation = HIDE_ANIMATION
  }
  else{
    fadeOutAnimation = ""
  }
});
onDestroy(unsubscribe);

function OnAnimationEnd(){
  if($is_hide_all_content){
    fadeOutAnimation += " hide ";
    show_blog = true;
  }
}

</script>

<main class={fadeOutAnimation} on:animationend={OnAnimationEnd}>
  <slot></slot>
</main>

<!--because /blog/tech/ point different things between app and backend server, so, use this as a trick.-->
{#if show_blog && $path === TECH}
  <iframe 
    title="Candy Water's Cyber Space"
    class={SHOW_ANIMATION}
    frameborder="0" 
    marginheight="0" 
    marginwidth="0" 
    width="100%" 
    height="100%" 
    scrolling="auto"
    src="/blog/tech/"></iframe>
{/if}
{#if show_blog && $path === ESSAY}
  <iframe 
    title="Candy Water's Cyber Space"
    class={SHOW_ANIMATION}
    frameborder="0" 
    marginheight="0" 
    marginwidth="0" 
    width="100%" 
    height="100%" 
    scrolling="auto"
    src="/blog/essay/"></iframe>
{/if}



<style global lang="scss">
//https://www.geeksforgeeks.org/how-to-set-fullscreen-iframe/
html{
  overflow: auto;
}
html, body, div, iframe 
{
 margin: 0px; 
 padding: 0px; 
 height: 100%; 
 border: none;
}
iframe {
  display: block; 
  width: 100%; 
  border: none; 
  overflow-y: auto; 
  overflow-x: hidden;
}

body{
  /*idea: https://codepen.io/P1N2O/pen/pyBNzX*/
  background: linear-gradient(-45deg, rgb(179, 108, 87), rgba(155, 44, 44, 0.637), rgb(19, 90, 116), rgba(29, 104, 86, 0.534)),
              linear-gradient(127deg, rgb(87, 44, 31),  rgb(11, 75, 99), rgba(17, 100, 81, 0.534));
  background-size: 400% 400%;
  animation: Gradient 25s ease infinite;
}
.hide{
  display: none !important;
}
.show{
  display: block !important;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50%{
    background-position: 75% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

main{
  max-width: 56rem;
  position: relative;
  margin: 0 auto;
}


</style>