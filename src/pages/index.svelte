<script lang='ts'>
  import Main from "./main.svelte";

  export let firstShow: boolean;

  const quote_url = "";
  const quote_list = [];
  const description = "";
</script>

<Main {quote_url} {quote_list} {description} {firstShow} />
