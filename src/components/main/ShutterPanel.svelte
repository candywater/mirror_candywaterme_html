<script>
    function set_background(classname) {
        document.querySelector("body").className = classname;
        localStorage.setItem("candy_background_setting", classname)
    }
</script>

<div class="relative">
    <div class="flex text-center text-gray-500 ">
        <div
            class="pushable inline-block bg-teal-400"
            on:click={() => set_background("bg1")}
        >
            <span class="front bg-teal-300" />
        </div>

        <div
            class="pushable inline-block bg-orange-400"
            on:click={() => set_background("bg2")}
        >
            <span class="front bg-orange-300" />
        </div>

        <div
            class="pushable inline-block bg-green-400"
            on:click={() => set_background("bg3")}
        >
            <span class="front bg-green-300" />
        </div>

        <div
            class="pushable inline-block bg-sky-400"
            on:click={() => set_background("bg4")}
        >
            <span class="front bg-sky-300" />
        </div>

        <div
            class="pushable inline-block bg-blue-400"
            on:click={() => set_background("bg5")}
        >
            <span class="front bg-blue-300" />
        </div>

        <div
            class="pushable inline-block bg-violet-400"
            on:click={() => set_background("bg6")}
        >
            <span class="front bg-violet-300" />
        </div>

        <div
            class="pushable inline-block bg-pink-400"
            on:click={() => set_background("bg7")}
        >
            <span class="front bg-pink-300" />
        </div>
    </div>
</div>

<style lang="scss">
    div {
        div {
            margin: 0rem;
            div {
                margin: 0.5rem 0.5rem 0rem 0rem;
            }
        }
    }
    //https://www.joshwcomeau.com/animation/3d-button/
    .pushable {
        // background: hsl(340deg 100% 32%);
        border: none;
        // border-radius: 12px;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        padding: 0;
        cursor: pointer;
    }
    .front {
        display: block;
        // padding: 12px 42px;
        padding: 0.75rem 1rem 0.5rem 1rem;
        // border-radius: 12px;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        font-size: 1.25rem;
        // background: hsl(345deg 100% 47%);
        color: white;
        transform: translateY(-4px);
    }

    .pushable:active .front {
        transform: translateY(-2px);
    }

    .pushable:focus:not(:focus-visible) {
        outline: none;
    }
    .front {
        transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    }

    .pushable:hover .front {
        transform: translateY(-6px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }

    .pushable:active .front {
        transform: translateY(-2px);
        transition: transform 34ms;
    }
</style>
