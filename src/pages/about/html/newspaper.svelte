<script lang="ts">
  import type { INewspaper } from "../ts/INewsPaper";

  export let data: INewspaper;

  // function onResumeClick(){
  //   let resumeUrl = new URL(window.location.href);
  //   resumeUrl.href = window.location.href;
  //   resumeUrl.search = window.location.search;
  //   resumeUrl.pathname = `/pages/resume/`;

  //   window.open(resumeUrl, '_blank');
  // }

  function onResumeClick(event: MouseEvent) {
    let resumeUrl = new URL(window.location.href);
    resumeUrl.href = window.location.href;
    resumeUrl.search = window.location.search;
    resumeUrl.pathname = `/pages/resume/`;

    const resumeWindow = window.open(
      resumeUrl,
      "",
      // "location=0,status=0,width=600,height=400",
      "location=0,status=0,width=840,height=1143",
    );

    const authInterval = window.setInterval(function () {
      if (resumeWindow?.closed) {
        window.clearInterval(authInterval);
        // window.location.reload();
      }
    }, 500);

    return false;
  }
</script>

<h1>{data.title}</h1>
<aside>
  <div>
    <div class="issue">{data.issue}</div>
    <div class="date">{data.date}</div>
    <!-- svelte-ignore a11y-click-events-have-key-events-->
    <div class="edition" role="button" tabindex="0">
      {data.edition}
    </div>
  </div>
</aside>
<h2 class="title--large main-title">{data.headline.title}</h2>

<div class="main-text multi-column">
  {#each data.headline.text as text}
    {@html text}
  {/each}
</div>

<a class="terrarium" href={data.anchors.terrarium.href} target="_blank">
  <figure>
    <img
      src={data.anchors.terrarium.imgsrc}
      alt={data.anchors.terrarium.tooltip}
      title={data.anchors.terrarium.tooltip}
    />
    <figcaption>{data.anchors.terrarium.caption}</figcaption>
  </figure></a
>

<a
  class="item-with-image plan span--2 long--2"
  href={data.anchors.plan.href}
  target="_blank">
  <img src={data.anchors.plan.imgsrc} alt={data.anchors.plan.tooltip} title={data.anchors.plan.tooltip} />

  <h4>{data.anchors.plan.captionTitle}</h4>
  <div class="multi-column">
    <p>{data.anchors.plan.caption}</p>
  </div>
</a>

<a class="hogwarts" href={data.anchors.hogwarts.href} target="_blank">
  <div class="hogwarts__title">{data.anchors.hogwarts.captionTitle}</div>
  <div class="hogwarts__image">
    <span>{data.anchors.hogwarts.caption}</span>
    <img
      src={data.anchors.hogwarts.imgsrc}
      alt={data.anchors.hogwarts.tooltip}
      title={data.anchors.hogwarts.tooltip}
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
  {@html data.anchors.style.caption}
</a>

<a
  class="item-with-image toggles"
  href={data.anchors.toggles.href}
  target="_blank"
  ><img src={data.anchors.toggles.imgsrc} alt={data.anchors.toggles.tooltip} title={data.anchors.toggles.tooltip} />

  <h4>{data.anchors.toggles.captionTitle}</h4>
  {@html data.anchors.toggles.caption}
</a>

<a class="menu" href={data.anchors.menu.href} target="_blank">
  <figure>
    <img src={data.anchors.menu.imgsrc} alt={data.anchors.menu.tooltip} title={data.anchors.menu.tooltip}/>
    <figcaption>{data.anchors.menu.caption}</figcaption>
  </figure>
</a>

<a class="social" href={data.anchors.social.href} target="_blank"
  ><img
    class="social__image"
    src={data.anchors.social.imgsrc}
    alt={data.anchors.social.tooltip}
    title={data.anchors.social.tooltip}
  />
  <div class="social__subtitle">{data.anchors.social.captionTitle}</div>
  <div class="social__content">{data.anchors.social.caption}</div>
</a>

<div class="item-with-image cssgrid-collection">
  <a class="cssgrid-collection__image" href={data.footline.href} target="_blank"
    ><img src={data.footline.imgsrc} alt={data.footline.title} title={data.footline.title}/></a
  >
  <div class="cssgrid-collection__content">
    <h4>{@html data.footline.title}</h4>
    <!-- <div class="multi-column-3"> -->
    <div class="">
      {#each data.footline.text ?? [] as text}
        {@html text}
      {/each}
    </div>
  </div>
</div>

<div class="sidebar">
  <h3 class="title--big">{data.sidebarline.title}</h3>

  <a
    class="codepen-item pie"
    href={data.sidebarline.items.pie.href}
    target="_blank"
    on:click={onResumeClick}
  >
    <img
      class="pie__image"
      src={data.sidebarline.items.pie.imgsrc}
      alt={data.sidebarline.items.pie.title}
      title={data.sidebarline.items.pie.title}
    />
    <div class="pie__subtitle">{data.sidebarline.items.pie.title}</div>
    <div class="pie__content">
      {@html data.sidebarline.items.pie.text}
    </div>
  </a>

  <a
    class="sidebar-item captcha"
    href={data.sidebarline.items.captcha.href}
    target="_blank"
  >
    <h5>{data.sidebarline.items.captcha.title}</h5>
    {@html data.sidebarline.items.captcha.text}
  </a>

  <a
    class="sidebar-item slack-ui with-border"
    href={data.sidebarline.items.slackui.href}
    target="_blank"
  >
    <h5>{data.sidebarline.items.slackui.title}</h5>
    {@html data.sidebarline.items.slackui.text}</a
  >

  <a class="workout" href={data.sidebarline.items.workout.href} target="_blank">
    <div class="workout__image">
      <img
        src={data.sidebarline.items.workout.imgsrc}
        alt={data.sidebarline.items.workout.title}
        title={data.sidebarline.items.workout.title}
      />
    </div>
    <div class="workout__blurb">{data.sidebarline.items.workout.title}</div>
    <div class="workout__title">{data.sidebarline.items.workout.text}</div>
  </a>
</div>
