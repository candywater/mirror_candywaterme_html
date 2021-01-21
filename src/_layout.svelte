<script>
// import 'animate.css/animate.min.css'
import 'animate.css/source/_vars.css';
import 'animate.css/source/_base.css';

/* Bouncing entrances  */
import 'animate.css/source/bouncing_entrances/bounceIn.css';
import 'animate.css/source/attention_seekers/jello.css';
import "animate.css/animate.compat.css"

import { onDestroy } from 'svelte';
import {is_hide_all_content} from "./store/config"

const HIDE_ANIMATION = "animated fadeOut"
let animation = ""

const unsubscribe = is_hide_all_content.subscribe(isHide => {
  if(isHide){
    animation = HIDE_ANIMATION
  }
  else{
    animation = ""
  }
});
onDestroy(unsubscribe);

function OnAnimationEnd(){
  if($is_hide_all_content)
    animation += " hide "
}

</script>

<main class={animation} on:animationend={OnAnimationEnd}>
  <slot></slot>
</main>


<style global lang="scss">
body{
  /*https://codepen.io/P1N2O/pen/pyBNzX*/
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