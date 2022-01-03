<script lang="ts">
    import Markdown from "../markdown/markdown.svelte";
    import Comment from "./comment.svelte";

    export let docurl: string;
</script>

<div class="page">
    <Markdown {docurl} />
    <Comment />
</div>

<style lang="scss">
    .page {
        position: absolute;
        top: 0%;
    }
</style>
