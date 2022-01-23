<script lang="ts">

// this file is not used yet.

    import { Howl, Howler } from "howler";
    import { onMount } from "svelte";

    export let bgm_list: string[];
    let _bgm_list: string[];
    let _sound : Howl;

    const music_prefix = "/doc/music/";

    onMount(() => {
        bgm_list.forEach((element) => {
            _bgm_list.push(music_prefix + element);
        });
        _sound = new Howl({
            src: _bgm_list,
            html5: true,
            volume: 0.5,
            onend: function () {
                console.log("Finished!");
            },
        });
    });

    function onplay() {
        _sound.play();
    }

</script>
