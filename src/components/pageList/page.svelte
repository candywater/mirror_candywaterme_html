<script lang="ts">
    import Markdown from "../markdown/main.svelte"
    import Comment from "./comment.svelte"

    export let url: string;

</script>

<Markdown {url}>
</Markdown>
<Comment>
</Comment>
