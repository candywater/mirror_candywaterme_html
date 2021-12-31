<script>

    let min = 1;
    let max = 8;

    let number = 0;

    function onclick(){
        number = getRandomIntInclusive(min, max);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

</script>

<input type="number" bind:value={number}><br>
<input type="range" bind:value={min}>
<input type="number" bind:value={min}><br>
<input type="range" bind:value={max}>
<input type="number" bind:value={max}><br>
<button on:click={onclick}>generate</button>