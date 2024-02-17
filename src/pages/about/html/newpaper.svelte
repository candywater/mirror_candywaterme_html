<script lang="ts">
  export let data: INewspaper;

  interface INewspaper {
    title: string;
    issue: string;
    date: string;
    edition: string;
    headline: ILineItermWithTextArray;
    anchors: {
      terrarium: IAnchor;
      plan: IAnchor;
      hogwarts: IAnchor;
      pasta: IAnchor;
      magazine: IAnchor;
      style: IAnchor;
      toggles: IAnchor;
      menu: IAnchor;
      social: IAnchor;
    };
    footline: ILineItem;
    sidebarline: {
      title: string;
      pie: ILineItem;
      captcha: ILineItem;
      slackui: ILineItem;
      workout: ILineItem;
    };
  }

  interface IAnchor {
    href?: string;
    imgsrc?: string;
    captionTitle?: string;
    caption?: string;
    class?: string;
    tooltip?: string;
  }

  interface ILineItem {
    href?: string;
    imgsrc?: string;
    title?: string;
    text?: string[] | string;
  }

  interface ILineItermWithTextArray extends Omit<ILineItem, "text"> {
    text: string[];
  }
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
  {#each data.headline.text as text}
    html`{text}`
  {/each}
</div>

<a class="terrarium" href={data.anchors.terrarium.href} target="_blank">
  <figure>
    <img src={data.anchors.terrarium.imgsrc} />
    <figcaption>{data.anchors.terrarium.caption}</figcaption>
  </figure></a
>

<a
  class="item-with-image plan span--2 long--2"
  href={data.anchors.plan.href}
  target="_blank"
  ><img src={data.anchors.plan.imgsrc} />

  <h4>{data.anchors.plan.captionTitle}</h4>
  <div class="multi-column">
    <p>{data.anchors.plan.caption}</p>
  </div></a
>

<a class="hogwarts" href={data.anchors.hogwarts.href} target="_blank">
  <div class="hogwarts__title">{data.anchors.hogwarts.captionTitle}</div>
  <div class="hogwarts__image">
    <span>{data.anchors.hogwarts.caption}</span><img
      src={data.anchors.hogwarts.imgsrc}
      alt={data.anchors.hogwarts.tooltip}
    />
  </div></a
>

<a
  class="item-with-image pasta with-border"
  href={data.anchors.pasta.href}
  target="_blank"
>
  <h4>{data.anchors.pasta.captionTitle}</h4>
  <p>{data.anchors.pasta.caption}</p></a
>

<a
  class="item-with-image magazine with-border"
  href={data.anchors.magazine.href}
  target="_blank"
>
  <h4>{data.anchors.magazine.captionTitle}</h4>
  <p>{data.anchors.magazine.caption}</p>
</a>

<a class="item-with-image style" href={data.anchors.style.href} target="_blank">
  <h4>{data.anchors.style.captionTitle}</h4>
  html`{data.anchors.style.caption}`
</a>

<a
  class="item-with-image toggles"
  href={data.anchors.toggles.href}
  target="_blank"
  ><img src={data.anchors.toggles.imgsrc} alt={data.anchors.toggles.tooltip}/>

  <h4>{data.anchors.toggles.captionTitle}</h4>
  html`{data.anchors.toggles.caption}`
</a>

<a class="menu" href={data.anchors.menu.href} target="_blank">
  <figure>
    <img src={data.anchors.menu.imgsrc} alt={data.anchors.menu.tooltip}/>
    <figcaption>{data.anchors.menu.caption}</figcaption>
  </figure>
</a>

<a class="social" href={data.anchors.social.href} target="_blank"
  ><img class="social__image" src={data.anchors.social.imgsrc} />
  <div class="social__subtitle">{data.anchors.social.captionTitle}</div>
  <div class="social__content">{data.anchors.social.caption}</div>
</a>

<div class="item-with-image cssgrid-collection">
  <a class="cssgrid-collection__image" href={data.footline.href} target="_blank"
    ><img src={data.footline.imgsrc} alt={data.footline.title}/></a
  >
  <div class="cssgrid-collection__content">
    <h4>{data.footline.title}</h4>
    <div class="multi-column-3">
      {data.footline.text}
    </div>
  </div>
</div>

<div class="sidebar">
  <h3 class="title--big">{data.sidebarline.title}</h3>

  <a class="codepen-item pie" href={data.sidebarline.pie.href} target="_blank"
    ><img class="pie__image" src={data.sidebarline.pie.imgsrc} alt={data.sidebarline.pie.title} />
    <div class="pie__subtitle">{data.sidebarline.pie.title}</div>
    <div class="pie__content">
      html`{data.sidebarline.pie.text}`
    </div>
  </a>

  <a
    class="sidebar-item captcha"
    href={data.sidebarline.captcha.href}
    target="_blank"
  >
    <h5>{data.sidebarline.captcha.title}</h5>
    html`{data.sidebarline.captcha.text}`
  </a>

  <a
    class="sidebar-item slack-ui with-border"
    href={data.sidebarline.slackui.href}
    target="_blank"
  >
    <h5>{data.sidebarline.slackui.title}</h5>
    html`{data.sidebarline.slackui.text}`</a
  >

  <a class="workout" href={data.sidebarline.workout.href} target="_blank">
    <div class="workout__image">
      <img src={data.sidebarline.workout.imgsrc} alt={data.sidebarline.workout.title} />
    </div>
    <div class="workout__blurb">{data.sidebarline.workout.title}</div>
    <div class="workout__title">{data.sidebarline.workout.text}</div>
  </a>
</div>
