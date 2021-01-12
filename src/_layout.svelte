<script>
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
// import "animate.css/animate.min.css"
import 'animate.css/source/_vars.css';
import 'animate.css/source/_base.css';

/* Bouncing entrances  */
import 'animate.css/source/bouncing_entrances/bounceIn.css';


  import Nav from './components/Nav.svelte';
</script>

<main>
  <slot></slot>
</main>

<style lang="scss">

// @use "bootstrap/dist/css/bootstrap.min.css";
// @use "bootstrap/dist/css/bootstrap-grid.min.css";
// @use "animate.css/animate.min.css";

:global(body){
  /*https://codepen.io/P1N2O/pen/pyBNzX*/
  background: linear-gradient(-45deg, rgb(179, 108, 87), rgba(155, 44, 44, 0.637), rgb(19, 90, 116), rgba(29, 104, 86, 0.534)),
              linear-gradient(127deg, rgb(87, 44, 31),  rgb(11, 75, 99), rgba(17, 100, 81, 0.534));
  background-size: 400% 400%;
  animation: Gradient 25s ease infinite;
}
:global(.hide){
  display: none !important;
}
:global(.show){
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


</style>