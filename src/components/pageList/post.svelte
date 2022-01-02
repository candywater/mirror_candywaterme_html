<script lang="ts">
    import Markdown from "../markdown/main.svelte";
    import Comment from "./comment.svelte";

    export let url: string;
    export let isHide: boolean;
</script>

<div class="page">
    <Markdown {url} />
    <Comment />
</div>

<style lang="scss">
    .page {
        position: absolute;
        top: 0%;
    }
</style>
