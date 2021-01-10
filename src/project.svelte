<script>
  import Main from "./_main_layout.svelte";

  const quote_url = ""
  const quote_list = ["meow!"]
</script>

<svelte:head>
  <title>my side-work list</title>
</svelte:head>

<Main 
  quote_url={quote_url}
  quote_list={quote_list}
></Main>