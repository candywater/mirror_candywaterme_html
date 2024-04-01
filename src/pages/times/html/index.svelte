<script lang="ts">
    import "tailwindcss/tailwind.css";
    /* Bouncing entrances  */
    import "animate.css/source/_vars.css";
    import "animate.css/source/_base.css";
    import "animate.css/source/attention_seekers/jello.css";

    // import "@/sass/about.scss";
    // import "simple-line-icons/scss/simple-line-icons.scss";
    import type { Readable } from "svelte/store";
    import { readable } from "svelte/store";
    import Layout from "./_layout.svelte";
    import Newspaper from "./newspaper.svelte";
    import type { INewspaper } from "../ts/INewsPaper";
    import { CurrentPath, TIMES } from "@/ts/config/path";
    import { onMount } from "svelte";
    import { loadBackgroundColor } from "@/ts/common/ui";
    import { pageData } from "../ts/newsReader";

    onMount(()=>{
        loadBackgroundColor();
    })

    let initTimeOut: Readable<boolean> = readable(true, (set) => {
        setTimeout(() => {
            set(true);
        }, 1000);
    });

    CurrentPath.set(TIMES);
</script>

<Layout>
    <div class="main__wrapper appearance-none">
        {#if $initTimeOut}
            <main>
                <Newspaper data={$pageData} />
            </main>
        {:else}
            <img
                src="/assets/logos/candywater/signed/candywater.png"
                alt="candywater"
                class="candywater"
            />
        {/if}
    </div>
</Layout>
