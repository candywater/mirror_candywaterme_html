<script lang="ts">
    import "tailwindcss/tailwind.css";
    import type { IResume } from "../ts/interface/IResume";
    import { getReadableConfig, resumeDocUrl } from "@/ts/config/configReader";
    import type { Readable } from "svelte/store";
    import Experience from "./experience.svelte";
    import Skill from "./skill.svelte";
    import Language from "./language.svelte";

    const handlePrint = () => window.print();
    let resume: Readable<IResume> = getReadableConfig(resumeDocUrl, {
        name: "",
        address: "",
        email: "",
        phone: "",
        summary: {
            name: "", // Add the 'name' property with an empty string
            content: [], // Change 'undefined[]' to 'string[]'
            details: [],
        },
        experiences: {
            name: "", // Add the 'name' property with an empty string
            details: [], // Change 'undefined[]' to 'IExperience[]'
        },
        skills: {
            name: "",
            details: [],
        },
        languages: {
            name: "",
            details: [],
        },
    } as IResume);
</script>

<div class="A4 resume-content">
    <div class="wrapper">
        <div class="sheet">
            <button
                class="btn btn-print btn-sm bg-slate-100 hover:bg-slate-300"
                on:click={handlePrint}
                ><i class="fa fa-print"></i>
                Print
            </button>
            <div class="two-column resume">
                <section class="resume__section resume__header">
                    <div class="resume__content">
                        <h1>{$resume.name}</h1>
                        <div class="info-item">
                            <span class="info-label">
                                <i class="fa fa-location-arrow"></i>
                            </span>
                            <span class="info-text">{$resume.address}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">
                                <i class="fa fa-envelope"></i>
                            </span>
                            <span class="info-text">{$resume.email}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label"
                                ><i class="fa fa-phone"></i></span
                            ><span class="info-text">{$resume.phone}</span>
                        </div>
                    </div>
                </section>
                <div class="resume__columns">
                    <div class="resume__main">
                        <section class="resume__section resume__summary">
                            <div class="resume__content">
                                <div class="resume__section-title subtitle">
                                    <i class="fa fa-pencil-square-o"></i>
                                    <h2>{$resume.summary.name}</h2>
                                </div>
                                <div class="other">
                                    <div class="other-info">
                                        <p>{$resume.summary.content}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="resume__section resume__experience">
                            <div class="resume__content">
                                <div class="resume__section-title subtitle">
                                    <i class="fa fa-briefcase"></i>
                                    <h2>{$resume.experiences.name}</h2>
                                </div>
                                {#each $resume.experiences.details as experience, i}
                                    <Experience {experience} />
                                {/each}
                            </div>
                        </section>
                    </div>
                    <div class="resume__side">
                        <section class="resume__section resume__skills">
                            <div class="resume__content">
                                <div class="resume__section-title subtitle">
                                    <i class="fa fa-align-center"></i>
                                    <h2>{$resume.skills.name}</h2>
                                </div>
                                <div class="resume__text">
                                    {#each $resume.skills.details as skill, i}
                                        <Skill {skill} />
                                    {/each}
                                </div>
                            </div>
                        </section>
                        <section class="resume__section resume__languages">
                            <div class="resume__content">
                                <div class="resume__section-title subtitle">
                                    <i class="fa fa-globe"></i>
                                    <h2>{$resume.languages.name}</h2>
                                </div>
                                {#each $resume.languages.details as language, i}
                                    <Language {language} />
                                {/each}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
</style>
