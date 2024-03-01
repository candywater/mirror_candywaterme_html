<script lang="ts">
  // import { Howl, Howler } from "howler";
  // import { onMount } from "svelte";

  export let bgm_list: string[];

  interface IBgmInfo {
    url?: string;
    singer?: string;
    title?: string;
    albumImg?: string;
  }

  let bgm_info_list: IBgmInfo[] = [];
  let _sound: Howl;

  let _is_playing: boolean = false;
  let _now_playing_albumImg: string = "";
  let _now_playing_title: string = "Loading...";
  let _now_playing_singer: string = "Loading...";

  const music_prefix = "https://d1qieyxrtbynoa.cloudfront.net/music/";

  let initializeHowl = () => {
    var bgm_url_list = bgm_list.map((element) => {
      var bgm = JSON.parse(element);
      bgm_info_list.push(bgm);
      var url = bgm?.url;
      return music_prefix + url;
    });

    // console.log(bgm_list);
    _sound = new Howl({
      src: bgm_url_list,
      html5: true,
      loop: true,
      volume: 0.5,
      onend: function () {
        console.log("Finished!");
      },
    });
    // console.log(bgm_list);
    for (let index = 0; index < bgm_info_list.length; index++) {
      const element = bgm_info_list[index];
      _now_playing_albumImg = element?.albumImg ?? "";
      _now_playing_singer = element?.singer ?? "";
      _now_playing_title = element?.title ?? "";
      break;
    }
  };

  function onplay() {
    if (_sound.playing()) {
      _is_playing = false;
      _sound.pause();
    } else {
      _is_playing = true;
      _sound.play();

      if (_sound.playing()) {
        setCurrentStatus();
      }

      setTimeout(() => {
        setCurrentStatus();
      }, 1000);
    }
  }

  function setCurrentStatus() {
    if (!_sound.playing()) {
      return;
    }
    var _now_playing = getNowPlaying();
    // console.log(_now_playing);
    _now_playing_title = _now_playing?.title ?? "No music";
    _now_playing_singer = _now_playing?.singer ?? "";
    _now_playing_albumImg = _now_playing?.albumImg ?? "";
  }

  function getNowPlaying(): IBgmInfo {
    for (let index = 0; index < bgm_info_list.length; index++) {
      const element = bgm_info_list[index];
      if (_sound.playing(element.url)) {
        return element;
      }
    }
  }
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"
    integrity="sha256-D+v9meJzO2kOysLcNsgohfWBprXHO2WJWJj/hUhBX1s="
    crossorigin="anonymous"
    on:load={initializeHowl}
  ></script>
</svelte:head>

<div class="flex items-center justify-center mb-2">
  <div class="bg-white p-1 rounded-lg shadow-md w-80">
    <div class="flex p-5 border-b">
      {#if _now_playing_albumImg}
        <img
          class="w-20 h-20 object-cover"
          alt="User avatar"
          src={_now_playing_albumImg}
        />
      {/if}
      <div class="flex flex-col px-2 w-full">
        <!-- <span class="text-xs text-gray-700 uppercase font-medium">
          {#if _is_playing}
            now playing
          {:else}
            now pausing
          {/if}
        </span> -->
        <span class="text-sm text-red-500 capitalize font-semibold pt-1 capitalize ">
          {_now_playing_title}
        </span>
        <span class="text-xs text-gray-500 uppercase font-medium capitalize ">
          {_now_playing_singer}
        </span>
      </div>
    </div>
    <!-- Music Controls -->
    <div class=" flex justify-center items-center">
      <button class="focus:outline-none">
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><polygon points="19 20 9 12 19 4 19 20"></polygon><line
            x1="5"
            y1="19"
            x2="5"
            y2="5"
          ></line></svg
        >
      </button>
      <button
        class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-red-400 focus:outline-none"
        on:click={onplay}
      >
        {#if _is_playing}
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="19" x2="5" y2="5"></line>
            <line x1="17" y1="5" x2="17" y2="19"></line>
          </svg>
        {:else}
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
          >
        {/if}
      </button>
      <button class="focus:outline-none">
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><polygon points="5 4 15 12 5 20 5 4"></polygon><line
            x1="19"
            y1="5"
            x2="19"
            y2="19"
          ></line></svg
        >
      </button>
    </div>
    <!-- <div class="flex flex-col p-5">
      <div class="border-b pb-1 flex justify-between items-center mb-2">
        <span class=" text-base font-semibold uppercase text-gray-700">
          play list
        </span>
      </div>
      {#each bgm_names as bgmname}
        <div class="flex border-b py-3 cursor-pointer hover:shadow-md px-2">
          <div class="flex flex-col px-2 w-full">
            <span class="text-sm text-red-500 capitalize font-semibold pt-1">
            </span>
            <span class="text-xs text-gray-500 uppercase font-medium">
              {bgmname}
               -"Boston," Augustana 
            </span>
          </div>
        </div>
      {/each}
    </div> -->
  </div>
</div>
