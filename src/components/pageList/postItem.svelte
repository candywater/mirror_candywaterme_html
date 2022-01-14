<script lang="ts">
    import { FormatDateSimple } from "../../common/common";

    import type { IPostSummary } from "../../interface/IPostSummary";

    export let post: IPostSummary;
</script>

<li>
    <span class="post-meta">{FormatDateSimple(post.date)}</span>

    <h2>
        <a class="post-link capitalize" href={post.url}>{post.title}</a>
        <p class="main-tags">description: <span>{post.summary}</span></p>
        <p class="main-tags">
            tags: <span class="tags">{post.tags}</span>
        </p>
    </h2>
</li>
