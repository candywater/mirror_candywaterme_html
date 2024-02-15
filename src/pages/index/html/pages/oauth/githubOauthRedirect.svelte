<script lang="ts">
    //https://candywaters.com/comments/oauth_callback?code=<random_string>
    //https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    import { onMount } from "svelte";

    import Spinner from "../../components/common/icons/Spinner.svelte";
    import type { IGithubOauthQueryString } from "../../../ts/interface/IOauth";

    let value = "afdsaf";

    onMount(() => {
        const params: IGithubOauthQueryString = new Proxy(
            new URLSearchParams(window.location.search),
            {
                get: (searchParams, prop: string) => searchParams.get(prop),
            },
        );
        // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        value = params.code; // "some_value"
    });
</script>

{value}
<Spinner></Spinner>
