<script lang="ts">

    export let data : INewspaper;


    interface INewspaper {}
</script>




<h1>{data.title}</h1>
<aside> 
  <div>
    <div class="issue">{data.issue}</div>
    <div class="date">{data.date}</div>
    <div class="edition">{data.edition}</div>
  </div>
</aside>
<h2 class="title--large main-title">{data.headline.title}</h2>

<div class="main-text multi-column">
  {#each data.headline.texts as text }
    html`<p>{text}</p>`
  {/each}   
</div>

    <a class="terrarium" href={data.anchors.headline.href} target="_blank">
  <figure><img src={data.anchors.headline.imgsrc}/>
    <figcaption>{data.anchors.headline.caption}</figcaption>
  </figure></a>
  
  <a class="item-with-image plan span--2 long--2" href={data.anchors.plan.href} target="_blank"><img src={data.anchors.plan.imgsrc}/>
  
    <h4>{data.anchors.plan.captionTitle}</h4>
  <div class="multi-column">
    <p>{data.anchors.plan.caption}</p>
  </div></a>
  
  <a class="hogwarts" href={data.anchors.hogwarts.href} target="_blank">
  <div class="hogwarts__title">{data.anchors.hogwarts.captionTitle}</div>
  <div class="hogwarts__image"> <span>{data.anchors.hogwarts.caption}</span><img src={data.anchors.hogwarts.imgsrc}/></div></a>

  <a class="item-with-image pasta with-border" href={data.anchors.pasta.href} target="_blank">

  <h4>{data.anchors.pasta.captionTitle}</h4>
  <p>{data.anchors.pasta.caption}</p></a>
  
  <a class="item-with-image magazine with-border" href={data.anchors.magazine.href} target="_blank">
  
    <h4>{data.anchors.magazine.captionTitle}</h4>
    <p>{data.anchors.magazine.caption}</p>
  </a>
  
  <a class="item-with-image style" href="https://codepen.io/collection/XJyNPm" target="_blank">
  <h4>Let's adopt, don't shop.</h4>
  <p>Explore a style guide and various page layouts for a pet adoption site in the  <em>Style Guide</em> collection. Inspired by the <em>Atomic Design</em> principle, this 8-pen collection includes a 404 page concept, an admin dashboard and what a Twitter user calls a 'media card zen garden'. Each pen comes with five (yes, five) color themes, including the  precious dark mode.</p></a>
  
  <a class="item-with-image toggles" href="https://codepen.io/oliviale/full/xxboXzo" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-toggle.gif"/>

  <h4>Toggles</h4>
  <p>Eight playful toggles to toggle on and off for your amusement. Is it possible to use these on your site and still adhere to assessibility rules? No. But there's a really cute dog one you <em>have  </em>to see.</p></a>
  
  <a class="menu" href="https://codepen.io/oliviale/full/LYYrKMV" target="_blank">
  <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-menu.jpg"/>
    <figcaption>See the new and improved menu for Toasty!</figcaption>
  </figure></a>
  
  <a class="social" href="https://codepen.io/oliviale/full/QWjjrZX" tagrget="_blank"><img class="social__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-social.gif"/>
  <div class="social__subtitle">World News</div>
  <div class="social__content">Looks like Covid-19 is gonna be around for a while so here is another friendly reminder to practice social distancing. Oh, and wear a mask! </div></a>

<div class="item-with-image cssgrid-collection"><a class="cssgrid-collection__image" href="https://codepen.io/collection/DQvYpQ" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-co-grid.jpg"/></a>
  <div class="cssgrid-collection__content">
    <h4> <a href="https://codepen.io/collection/DQvYpQ" target="_blank">More CSS Grid things like this one. Shelves, coupons and more!  </a></h4>
    <div class="multi-column-3">
      <p>Get your fill of more CSS Grid items in this collection. There are a total of 32 pens to date... well, 33, if you count this one too. What can you expect in this collection? The hidden gems, in my totally  unbiased opinion, are <a href="https://codepen.io/oliviale/full/wbyVWr" target="_blank">the recreation of the Pac-Man layout</a> and  <a href="https://codepen.io/oliviale/pen/wbyVWr" target="_blank">coupons inspired by junk mail</a>. A lot of joke items of things that shouldn't be done in CSS Grid, such as <a href="https://codepen.io/oliviale/full/PXGgMG" target="_blank">a shelf</a>?   <a href="https://codepen.io/oliviale/full/qggOog" target="_blank">Bathroom tiles wtf</a>? and  <a href="https://codepen.io/oliviale/full/bOWqbj" target="_blank">makeup palettes </a>. If you are a cultured person, you will have a chance to enjoy a couple of pens inspired by <a href="https://codepen.io/oliviale/full/JxVZpX" target="_blank">Harry Potter  </a>and  <a href="https://codepen.io/oliviale/full/RwNdeeQ" target="_blank">Pokemon.</a> On the rare occasion that you are looking at this profile for something you can use in production, you really shouldn't. But, there are <em> some   </em>real-world applications, such as <a href="https://codepen.io/oliviale/full/GPXozx" target="_blank">the recipe layout</a>,   <a href="https://codepen.io/oliviale/full/pqoEoJ" target="_blank">the product catalog</a>, and  <a href="https://codepen.io/oliviale/full/XyqQYL" target="_blank">color palettes for a style guide</a>.</p>
    </div>
  </div>
</div>

<div class="sidebar">
  <h3 class="title--big">Hot this month</h3><a class="codepen-item pie" href="https://codepen.io/oliviale/full/BaovGmg" target="_blank"><img class="pie__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-pie.jpg"/>
    <div class="pie__subtitle">Food </div>
    <div class="pie__content">
      <h4>Pies for everyone!</h4>
      <p>No man is left behind. There's infinite pie with this one div and a repeating background.</p>
    </div></a><a class="sidebar-item captcha" href="https://codepen.io/oliviale/full/RwWdNRd" target="_blank">
    <h5>Frustrated designer runs amok with Captcha ideas</h5>
    <p>From Tic Tac Toe to solving meme-based questions, this is a different take on how web captchas should be. "I have not successfully picked out all photos of a truck on the first try. Something's gotta change," says the designer, who has requested to remain anonymous.</p></a><a class="sidebar-item slack-ui with-border" href="https://codepen.io/oliviale/full/GRpvNBa" target="_blank">
    <h5>Slack UI gets reverse engineered</h5>
    <p>Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showcase Codepens instead of mock conversations. This is a codepen showcase inception situation.</p></a><a class="workout" href="https://codepen.io/oliviale/full/RwWKybY" target="_blank">
    <div class="workout__image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-workout.jpg" alt="Workout"/></div>
    <div class="workout__blurb">Always failing to keep track of your workouts? </div>
    <div class="workout__title">Use this tool!</div></a>
</div>