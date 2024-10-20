<a
    href={location.href}
    on:click={() => {
        document.body.scrollIntoView();
    }}
    class="postarrow shadow">↑</a
>

<style>
    .postarrow {
        position: fixed;
        padding: 10px;
        bottom: 1rem;
        right: -1rem;
        background-color: white;
    }
</style>
