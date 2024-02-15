<script lang="ts">
    import "tailwindcss/tailwind.css";
    import type { Readable } from "svelte/store";
    import { getReadableConfig, aboutDocUrl } from "@/ts/config/configReader";

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

<style lang="scss">
    // body {
    //     font-family: Arial, sans-serif;
    // }

    header {
        background-color: #f8f9fa;
    }

    nav ul {
        list-style-type: none;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin-right: 10px;
    }

    nav ul li a {
        text-decoration: none;
        color: #333;
    }

    section {
        padding: 20px;
    }

    footer {
        background-color: #f8f9fa;
        padding: 10px;
        text-align: center;
    }
</style>
