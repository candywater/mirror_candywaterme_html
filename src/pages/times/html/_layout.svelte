<script lang="ts">
    import PostArrow from "@/components/postArrow.svelte";
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
    import SideMainMenuLayout from "@/pages/index/html/template/SideMainMenuLayout.svelte";
</script>

<div class="mainlayout">
    <SideMainMenuLayout>
        <Header />
        <div class="wrapper">
            <slot />
            <PostArrow />
        </div>

        <Footer />
    </SideMainMenuLayout>
</div>

<style lang="scss">
    $spacing-unit: 30px !default;

    .wrapper {
        background-color: #fff;
        // margin-right: auto;
        // margin-left: auto;
        padding-right: $spacing-unit;
        padding-left: $spacing-unit;
    }
</style>
