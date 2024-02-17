<script lang="typescript">
    import PostArrow from "@/pages/components/postArrow.svelte";
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
</script>

<div class="mainlayout">

    <Header />
    <div class="">
        <div class="">
            <div class="wrapper">
                <slot />
                <PostArrow />
            </div>
        </div>
    </div>

    <Footer />
</div>

<style lang="scss">
    $spacing-unit: 30px !default;

    .wrapper {
        background-color: #fff;
        margin-right: auto;
        margin-left: auto;
        padding-right: $spacing-unit;
        padding-left: $spacing-unit;
    }
</style>
