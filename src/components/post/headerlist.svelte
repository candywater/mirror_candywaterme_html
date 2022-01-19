<script lang="ts">
    import type { IHeaderPair } from "../../interface/IHeaderPair";

    export let headerList: IHeaderPair[];

    function escapedText(text: string) {
        return text.toLowerCase().replace(/[^\w]+/g, "-");
    }
</script>

<div class="headernav mt-1">
    {#await headerList then headerList}
            {#each headerList as headerPair}
                <a class="before:content-['\00d8'] mr-2 border pl-1 pr-1" href={"#" + escapedText(headerPair.text)}>{headerPair.text}</a>
            {/each}
    {/await}
</div>

<style lang="scss">
</style>
