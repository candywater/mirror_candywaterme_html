<script>
  import Main from "./_main_layout.svelte";

  const quote_url = ""
  const quote_list = ["meow!"]
  const description = `My side work list`
</script>

<svelte:head>
  <title>"my side work list"</title>
</svelte:head>

<Main {quote_url} {quote_list} {description}></Main>