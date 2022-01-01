<script>
  import Main from "./main.svelte";
  import AboutMe from "../components/about/AboutMe.svelte";

  const description = "";
  const quote_url = "";
  const quote_list = ["happy a new day!"];
  const hide_all_content = false;
</script>

<svelte:head>
  <title>This a my small profile</title>
</svelte:head>

<Main {quote_url} {quote_list} {description} {hide_all_content}>
  <AboutMe />
</Main>
