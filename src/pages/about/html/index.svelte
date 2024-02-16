<script lang="ts">
    import "tailwindcss/tailwind.css";
    import type { Readable } from "svelte/store";
    import { getReadableConfig, aboutDocUrl } from "@/ts/config/configReader";
    import Layout from "./layout.svelte";

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
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <!-- Home content goes here -->
            {$pageData.home}
        </section>
        <section id="about">
            <!-- About content goes here -->
            {$pageData.about}
        </section>
        <section id="projects">
            <!-- Projects content goes here -->
            {$pageData.projects}
        </section>
        <section id="contact">
            <!-- Contact content goes here -->
            {$pageData.contact}
        </section>
    </main>
    <footer>
        <!-- Footer content goes here -->
    </footer>
</Layout>

<style lang="scss">
    section {
        min-height: 100vh; /* Make each section at least as tall as the viewport */
        width: 100%; /* Make each section fill the width of the page */
        overflow: auto; /* Enable scrolling within each section */
    }

    @media (max-width: 600px) {
        /* Adjust styles for mobile screens here */
    }

    @media (min-width: 601px) {
        /* Adjust styles for desktop screens here */
    }
</style>
