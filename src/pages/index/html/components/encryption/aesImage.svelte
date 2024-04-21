<script lang="ts">
    import { onMount } from "svelte";
    import { AesCtrCount, AesShareKey } from "@/ts/config/config";
    import { decryptImg } from "@/ts/encryption/aes";
    import { removeSpecialCharsInUrl } from "@/ts/common/common";

    export let url: string;

    onMount(() => {
        decrypt();
    });

    function decrypt() {
        decryptImg(url, $AesShareKey, $AesCtrCount, (imgDataUrl) => {
            var image = new Image();
            image.src = imgDataUrl
            // id would be "# + ${url}"
            document.querySelector(`#${removeSpecialCharsInUrl(url)}`).replaceWith(image);
        });
    }
</script>