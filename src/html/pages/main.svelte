<script lang="ts" src="./main.svelte.ts" />

{#if $show_config_panel}
  <div on:click={on_config_click}>
    <FakePanel />
  </div>
{/if}

<Layout>
  <div class={mainFadeAnimation} on:animationend={onAnimationEnd}>
    <div class="container main">
      <div class="shutter"><ShutterPanel /></div>
      <div class="main-bg">
        <div class="mainmenu-block">
          <MainMenu />
        </div>

        <div class="profile-block">
          <Profile {description}>
            <slot />
          </Profile>
        </div>

        <div class="config-block z-10" on:click={on_config_click}>
          <ConfigGear />
        </div>

        {#if $show_config_panel}
          <div class="absolute w-11/12 h-5/6">
            <Terminal
              exactClose={() => {
                $show_config_panel = false;
              }}
            />
          </div>
        {/if}
      </div>
    </div>
    
    <div class="container copyleft-block">
      <Copyleft />
    </div>
    <QuoteDisplay {quote} show_quote={$show_quote} />
  </div>

</Layout>

<style lang="scss" src="./main.svelte.scss" />
