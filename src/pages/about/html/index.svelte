<script lang="ts">
    import "tailwindcss/tailwind.css";
    import type { Readable } from "svelte/store";
    import { getReadableConfig, aboutDocUrl, getReadableConfigFromBackend } from "@/ts/config/configReader";
    import Layout from "./_layout.svelte";
    import Home from "./home.svelte";
    import Contact from "./contact.svelte";
    import About from "@/pages/about/html/about.svelte";
    import Projects from "@/pages/about/html/projects.svelte";
    import Newpaper from "./newpaper.svelte";
    import { DOC_SRC_URL } from "@/ts/config/path";

    import "@/sass/about.scss";

    let resumeDocUrl = new URL(window.location.href);
    resumeDocUrl.href = window.location.href;
    resumeDocUrl.pathname = `/cwapi/about/`;
    let resumeDocFailbackUrl = DOC_SRC_URL + `/config/about/index.json`;

    let resume: Readable<IPageData> = getReadableConfigFromBackend(resumeDocUrl, resumeDocFailbackUrl, {})

    interface IPageData {
        home?: string;
        about?: string;
        experience?: string;
        projects?: [[]];
        contact?: string;
    }

    const pageData: Readable<IPageData> = getReadableConfig(aboutDocUrl, {
        home: "",
        about: "",
        experience: "",
        projects: [],
        contact: "",
    });
</script>

<Layout>

<div class="main__wrapper">
    <main>
    <!-- <Home pageData={$pageData} />
        <About pageData={$pageData} />
        <Projects pageData={$pageData} />
        <Contact pageData={$pageData} /> -->
    <Newpaper />
    </main>
</div>
</Layout>
