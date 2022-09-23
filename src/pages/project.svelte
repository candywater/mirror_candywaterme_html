<script lang="ts">
  import Main from "./main.svelte";
  import ProjectList from "../components/project/ProjectList.svelte";


  const quote_url = "";
  const quote_list = ["meow!"];
  const description = `My side work list`;
</script>

<svelte:head>
  <title>"my side work list"</title>
</svelte:head>

<Main {quote_url} {quote_list} {description} isHide={false}>
  <ProjectList />
</Main>
