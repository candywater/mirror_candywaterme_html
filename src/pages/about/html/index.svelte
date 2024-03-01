<script lang="ts">
    // import "tailwindcss/tailwind.css";
    // import "@/sass/about.scss";
    // import "simple-line-icons/scss/simple-line-icons.scss";
    import type { Readable } from "svelte/store";
    import { getReadableConfigFromBackend , aboutDocFailBackUrl} from "@/ts/config/configReader";
    import Layout from "./_layout.svelte";
    import Newspaper from "./newspaper.svelte";
    import type { INewspaper } from "../ts/INewsPaper";

    let aboutDocUrl = new URL(window.location.href);
    aboutDocUrl.href = window.location.href;
    aboutDocUrl.search = window.location.search;
    aboutDocUrl.pathname = `/cwapi/about/`;

    let pageData: Readable<INewspaper> = getReadableConfigFromBackend(
        aboutDocUrl,
        aboutDocFailBackUrl,
        {
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
                captionTitle: "",
                caption: "",
            },
            sidebarline: {
                title: "",
                items: {
                    pie: {
                        href: "",
                        captionTitle: "",
                        caption: "",
                    },
                    captcha: {
                        href: "",
                        captionTitle: "",
                        caption: "",
                    },
                    slackui: {
                        href: "",
                        captionTitle: "",
                        caption: "",
                    },
                    workout: {
                        href: "",
                        captionTitle: "",
                        caption: "",
                    },
                },
            },
        } as INewspaper,
    );
</script>

<Layout>
    <div class="main__wrapper appearance-none">
        <main>
            <!-- <Home pageData={$pageData} />
        <About pageData={$pageData} />
        <Projects pageData={$pageData} />
        <Contact pageData={$pageData} /> -->
            <Newspaper data={$pageData} />
        </main>
    </div>
</Layout>
