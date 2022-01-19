<script lang="ts">
    import type { IHeaderPair } from "../../interface/IHeaderPair";

    export let headerList: IHeaderPair[];

    function escapedText(text: string) {
        return text.toLowerCase().replace(/[^\w]+/g, "-");
    }
    //Ø \00d8
    //θ \03b8
    //φ \03C6
    //† \2020
    //‡ \2021
    //✎ \270E
    //✝ \271D
    //✡ \2721
    //✭ \272D
    //✩ \2729
</script>

<div class="headernav mt-1">
    {#await headerList then headerList}
        <ul class="list-disc">
            {#each headerList as headerPair}
                <li>
                    <a
                        class="before:content-['\270E'] mr-2 border pl-1 pr-1"
                        href={"#" + escapedText(headerPair.text)}
                        >{" " + headerPair.text}</a
                    >
                </li>
            {/each}
        </ul>
    {/await}
</div>

<style lang="scss">
</style>
