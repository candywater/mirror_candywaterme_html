
<script>
import Main from "./_main_layout.svelte";

const quote_url = ""
const quote_list = ["happy a new day!"]
</script>

<svelte:head>
  <title>This a my small profile</title>
</svelte:head>

<Main 
  quote_list={quote_list}
></Main>