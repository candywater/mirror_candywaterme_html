
<script>
  import Btn from "./MainMenuButton.svelte"

  const essay = "/blog/essay"
  const tech = "/blog/tech"
  const project = "/project"
  const about = "/about"
  const index = "/"
  
  const basicstyle = "text-white rounded shadow" //  = "border border-light-blue-500 border-opacity-5"
  const border = "border border-indigo-500"

  const button_style_1 = `${basicstyle} ${border} bg-blue-500 hover:bg-blue-700 `
  const button_style_2 = `${basicstyle} ${border} bg-indigo-500 hover:bg-indigo-700 `
  const button_style_3 = `${basicstyle} ${border} bg-purple-500 hover:bg-purple-700 `
  const button_style_4 = `${basicstyle} ${border} bg-yellow-500 hover:bg-yellow-700 `
  const button_style_5 = `${basicstyle} ${border} bg-red-500 hover:bg-red-700 `

  function getStyle(color){
    return `bg-${color}-500 hover:bg-${color}-700`
  }

</script>

<div class="main-menu">

  <Btn href="/blog/essay" style={button_style_1} title="Essay"></Btn>
  <Btn href="/blog/tech" style={button_style_2} title="Tech"></Btn>
  <Btn href="/project" style={button_style_3} title="Project"></Btn>
  <Btn href="/about" style={button_style_4} title="About"></Btn>
  <Btn href="/" style={button_style_5} title="Main"></Btn>
</div>

<style>

.main-menu{
  width: 7rem;
}
</style>