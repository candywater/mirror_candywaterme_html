<script lang="ts">
    import type { ILanguage } from "../ts/interface/IResume";

    export let language: ILanguage;
</script>

<div class="extra">
    <div class="extra-info">
        {language.name} <small>({language.level})</small>
    </div>
    <div class="extra-details">
        <div
            class="extra-details__progress"
            style={`width: ${language.levelNumber}%`}
        ></div>
    </div>
</div>