<script>
  // export let segment;
  import switcher from "../router.svelte"
  let segment = switcher;

  // console.log(segment)

</script>

<nav>
  <ul>
    <li><a class="btn" 
      aria-current="{segment === undefined ? 'page' : undefined}" 
      href=".">home</a></li>
    <li><a class="btn" 
      aria-current="{segment === 'about' ? 'page' : undefined}" 
      href="about">about</a></li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    <li><a class="btn" rel=prefetch 
      aria-current="{segment === 'essay' ? 'page' : undefined}" 
      href="essay">essay</a></li>
    <li><a class="btn" rel=prefetch 
      aria-current="{segment === 'tech' ? 'page' : undefined}" 
      href="tech">tech</a></li>
  </ul>
</nav>


<style>
  nav {
    border-bottom: 1px solid rgba(255,62,0,0.1);
    font-weight: 300;
    padding: 0 1em;
    background-color: rgba(216, 207, 205, 0.418);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255,62,0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    /* padding: 1em 0.5em; */
    display: block;
  }
  
  /** from my-svelte-project global.css*/
  
a {
  color: rgb(0,100,200);
  text-decoration: none;
  margin: 0px 1px;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: rgb(0,80,160);
}


</style>

