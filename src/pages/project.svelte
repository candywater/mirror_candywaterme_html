<script>
  import Main from "./main.svelte";
  import ProjectList from "../components/project/ProjectList.svelte"

  const quote_url = ""
  const quote_list = ["meow!"]
  const description = `My side work list`
  const hide_all_content = false
</script>

<svelte:head>
  <title>"my side work list"</title>
</svelte:head>

<Main {quote_url} {quote_list} {description} {hide_all_content}>
  <ProjectList></ProjectList>
</Main>