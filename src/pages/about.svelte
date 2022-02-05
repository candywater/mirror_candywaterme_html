<script lang="ts">
  import Main from "./main.svelte";
  import AboutMe from "../components/about/AboutMe.svelte";

  export let firstTimeShow: boolean;

  const description = "";
  const quote_url = "";
  const quote_list = ["happy a new day!"];
</script>

<svelte:head>
  <title>This a my small profile</title>
</svelte:head>

<Main {quote_url} {quote_list} {description} {firstTimeShow} isHide={false}>
  <AboutMe site={{
    title: "",
    author: "candywater",
    github_username: "candywater",
    twitter_username: "candywater1",
    description: "",
    time: new Date()
  }}/>
</Main>
