<script lang="ts">
    import "tailwindcss/tailwind.css";
    import "@/sass/about.scss";
    // import "simple-line-icons/scss/simple-line-icons.scss";
    import type { Readable } from "svelte/store";
    import { getReadableConfigFromBackend } from "@/ts/config/configReader";
    import Layout from "./_layout.svelte";
    import Newspaper from "./newspaper.svelte";
    import { DOC_SRC_URL } from "@/ts/config/path";
    import type { INewspaper } from "../ts/INewsPaper";

    let resumeDocUrl = new URL(window.location.href);
    resumeDocUrl.href = window.location.href;
    resumeDocUrl.pathname = `/cwapi/about/`;
    let resumeDocFailbackUrl = DOC_SRC_URL + `/config/about/index.json`;

    let pageData: Readable<INewspaper> = getReadableConfigFromBackend(
        resumeDocUrl,
        resumeDocFailbackUrl,
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

    console.log($pageData);
</script>

<Layout>
    <div class="main__wrapper">
        <main>
            <!-- <Home pageData={$pageData} />
        <About pageData={$pageData} />
        <Projects pageData={$pageData} />
        <Contact pageData={$pageData} /> -->
            <Newspaper data={$pageData} />
        </main>
    </div>
</Layout>
