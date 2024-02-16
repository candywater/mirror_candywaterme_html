<script lang="typescript">
    import PostArrow from "@/pages/components/postArrow.svelte";
</script>

<div class="mainlayout">
    <div class="main">
        <div class="page-content">
            <div class="wrapper">
                <slot />
                <PostArrow />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .wrapper {
        max-width: 800px;
    }
</style>
