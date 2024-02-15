<script lang="ts">
    import type { IExperience } from "../ts/interface/IResume";

    export let experience : IExperience;
</script>

<div class="xp-item">
    <div class="xp-job">
        {experience.job}
        <span>@ {experience.company}</span><br
        /><small>{experience.location}</small>
    </div>
    <div class="xp-date">
        {experience.date}
    </div>
    <div class="xp-detail">
        <ul>
            <li>
                {experience.description}
            </li>
            {#each experience.details as detail}
                <li>
                    {detail}
                </li>
            {/each}
        </ul>
    </div>
</div>