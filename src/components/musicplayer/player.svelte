<script lang="ts">
    // this file is not used yet.

    // import { Howl, Howler } from "howler";
    // import { onMount } from "svelte";

    export let bgm_list: string[];
    let _sound: Howl;

    let _now_playing: string;
    let _play_index: number;

    const music_prefix = "/doc/music/";

    let initializeHowl = () => {
        bgm_list = bgm_list.map((element) => {
            return music_prefix + element;
        });

        console.log(bgm_list);
        _sound = new Howl({
            src: bgm_list,
            html5: true,
            volume: 0.5,
            onend: function () {
                console.log("Finished!");
            },
        });
        // console.log(bgm_list);
    };

    function onplay() {
        _sound.play();
    }
</script>

<svelte:head>
    <script
        src="https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"
        integrity="sha256-D+v9meJzO2kOysLcNsgohfWBprXHO2WJWJj/hUhBX1s="
        crossorigin="anonymous"
        on:load={initializeHowl}></script>
</svelte:head>
<!-- This is an example component -->
<div class="w-full player">
    <div
        class="flex w-8/12  bg-white shadow-md rounded-lg overflow-hidden mx-auto"
    >
        <div class="flex flex-col w-full">
            <div class="flex p-5 border-b">
                <!-- <img class='w-20 h-20 object-cover' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'> -->
                <div class="flex flex-col px-2 w-full">
                    <span class="text-xs text-gray-700 uppercase font-medium ">
                        now playing
                    </span>
                    <span
                        class="text-sm text-red-500 capitalize font-semibold pt-1"
                    >
                        {_now_playing ? _now_playing : ""}
                    </span>
                    <span class="text-xs text-gray-500 uppercase font-medium ">
                        {_now_playing ? _now_playing : ""}
                    </span>
                    <div class="flex justify-end">
                        <!-- <img class="w-5 cursor-pointer" src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" />
                        <img class="w-5 cursor-pointer mx-2" src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" />
                        <img class="w-5 cursor-pointer" src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" /> -->
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center p-5">
                <div class="flex items-center">
                    <div class="flex space-x-3 p-2">
                        <button class="focus:outline-none">
                            <svg
                                class="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ef4444"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ><polygon points="19 20 9 12 19 4 19 20" /><line
                                    x1="5"
                                    y1="19"
                                    x2="5"
                                    y2="5"
                                /></svg
                            >
                        </button>
                        <button
                            class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-red-400 focus:outline-none"
                            on:click={onplay}
                        >
                            <svg
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ef4444"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ><polygon points="5 3 19 12 5 21 5 3" /></svg
                            >
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
                                ><polygon points="5 4 15 12 5 20 5 4" /><line
                                    x1="19"
                                    y1="5"
                                    x2="19"
                                    y2="19"
                                /></svg
                            >
                        </button>
                    </div>
                </div>
                <div class="relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2">
                    <div class="bg-red-300 h-2 w-full rounded-lg" />
                    <div
                        class="bg-red-500 h-2 w-1/2 rounded-lg absolute top-0"
                    />
                </div>
                <div class="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
                    <span
                        class="text-xs text-gray-700 uppercase font-medium pl-2"
                    >
                        02:00/04:00
                    </span>
                </div>
            </div>
            <!-- playlist -->
            <div class="flex flex-col p-1 ">
                <div
                    class="border-b pb-1 flex justify-between items-center mb-2"
                >
                    <span
                        class=" text-base font-semibold uppercase text-gray-700"
                    >
                        play list</span
                    >
                    <!-- <img
                        class="w-4 cursor-pointer"
                        src="https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png"
                    /> -->
                    <!-- <img
                        class="w-4 cursor-pointer"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVQ4T2NkoBAwUqifYdQAhtEwACai0XQwGMIAACaYABGnE9aRAAAAAElFTkSuQmCC"
                    /> -->
                </div>

                {#each bgm_list as bgm_url}
                    <div
                        class="flex border-b py-1 cursor-pointer hover:shadow-md "
                    >
                        <!-- <img class='w-10 h-10 object-cover rounded-lg' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'> -->

                        <div class="flex flex-col w-full">
                            <!-- <span
                                class="text-sm text-red-500 capitalize font-semibold pt-1"
                            >
                                {bgm_url.replace(/\..{1,4}$/, "")}
                            </span> -->
                            <span
                                class="text-xs text-gray-500 uppercase font-medium "
                            >
                                {bgm_url.replace(/\..{1,4}$/, "")}
                            </span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .player {
        margin: 0.5rem 0rem;
    }
</style>
