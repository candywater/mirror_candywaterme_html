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
    import {
        getReadableConfigFromBackend,
        aboutDocFailBackUrl,
    } from "@/ts/config/configReader";
    import Layout from "./_layout.svelte";
    import Newspaper from "./newspaper.svelte";
    import type { INewspaper } from "../ts/INewsPaper";
    import { CurrentPath, TIMES } from "@/ts/config/path";
    import { onMount } from "svelte";
    import { loadBackgroundColor } from "@/ts/common/ui";

    onMount(()=>{
        loadBackgroundColor();
    })

    let initTimeOut: Readable<boolean> = readable(true, (set) => {
        setTimeout(() => {
            set(true);
        }, 1000);
    });

    let aboutDocUrl = new URL(window.location.href);
    aboutDocUrl.href = window.location.href;
    aboutDocUrl.search = window.location.search;
    aboutDocUrl.pathname = `/cwapi/about/`;

    const aboutDefaultValue: INewspaper = {
        title: "",
        issue: "",
        date: "",
        edition: "",
        headline: {
            title: "",
            text: [],
        },
        anchors: {
            terrarium: {
                href: "",
                imgsrc: "",
                caption: "",
            },
            plan: {
                href: "",
                imgsrc: "",
                captionTitle: "",
                caption: "",
            },
            hogwarts: {
                href: "",
                imgsrc: "",
                captionTitle: "",
                caption: "",
                tooltip: "",
            },
            pasta: {
                href: "",
                captionTitle: "",
                caption: "",
            },
            magazine: {
                href: "",
                captionTitle: "",
                caption: "",
            },
            style: {
                href: "",
                captionTitle: "",
                caption: "",
            },
            toggles: {
                href: "",
                captionTitle: "",
                caption: "",
            },
            menu: {
                href: "",
                captionTitle: "",
                caption: "",
            },
            social: {
                href: "",
                captionTitle: "",
                caption: "",
            },
        },
        footline: {
            href: "",
            text: "",
        },
        sidebarline: {
            title: "",
            items: {
                pie: {
                    href: "",
                    text: "",
                },
                captcha: {
                    href: "",
                    text: "",
                },
                slackui: {
                    href: "",
                    text: "",
                },
                workout: {
                    href: "",
                    text: "",
                },
            },
        },
    };

    CurrentPath.set(TIMES);

    let pageData: Readable<INewspaper> = getReadableConfigFromBackend(
        aboutDocUrl,
        aboutDocFailBackUrl,
        aboutDefaultValue,
    );
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
