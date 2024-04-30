<script lang="ts">
    import type { ISkill } from "../ts/interface/IResume";

    export let skill: ISkill;
</script>

<div class="extra">
    <div class="extra-info">
        {skill.name}
        <br />
        <small>
            {#each skill.items as item, i}
                {item}
                {#if i === skill.items.length - 1}
                    {""}
                {:else}
                    {" · "}
                {/if}
            {/each}
        </small>
    </div>
    <div class="extra-details">
        <div class="extra-details__progress" style={`width: ${skill.level}%`}></div>
    </div>
</div>
