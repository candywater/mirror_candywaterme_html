<script lang="ts">
    import "tailwindcss/tailwind.css";
    import type { Readable } from "svelte/store";
    import { getReadableConfig, aboutDocUrl } from "@/ts/config/configReader";
    import Layout from "./_layout.svelte";
    import Home from "./home.svelte";
    import Contact from "./contact.svelte";
    import About from "@/pages/about/html/about.svelte";
    import Projects from "@/pages/about/html/projects.svelte";

    import "@/sass/about.scss"

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
    <main>
        <Home pageData={$pageData} />
        <About pageData={$pageData} />
        <Projects pageData={$pageData} />
        <Contact pageData={$pageData} />
    </main>
</Layout>