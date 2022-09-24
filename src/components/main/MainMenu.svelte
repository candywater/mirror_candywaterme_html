<script lang="ts">
  import Btn from "./mainMenu/MainMenuButton.svelte";
  import {
    ESSAY_PATH,
    TECH_PATH,
    PROJECT_PATH,
    ABOUT_PATH,
    INDEX_PATH,
  } from "../../ts/config/path";

  const basicstyle = "text-white rounded shadow"; //  = "border border-light-blue-500 border-opacity-5"
  const border = "border border-indigo-500";

  const button_style_1 = `${basicstyle} ${border} bg-blue-500 hover:bg-blue-700 `;
  const button_style_2 = `${basicstyle} ${border} bg-indigo-500 hover:bg-indigo-700 `;
  const button_style_3 = `${basicstyle} ${border} bg-purple-500 hover:bg-purple-700 `;
  const button_style_4 = `${basicstyle} ${border} bg-yellow-500 hover:bg-yellow-700 `;
  const button_style_5 = `${basicstyle} ${border} bg-red-500 hover:bg-red-700 `;

  // function getStyle(color:string): string {
  //   return `bg-${color}-500 hover:bg-${color}-700`;
  // }
</script>

<div class="main-menu">
  <Btn external={true} href={ESSAY_PATH} style={button_style_1} title="Essay" />
  <Btn external={true} href={TECH_PATH} style={button_style_2} title="Tech" />
  <Btn
    external={false}
    href={PROJECT_PATH}
    style={button_style_3}
    title="Project"
  />
  <Btn
    external={false}
    href={ABOUT_PATH}
    style={button_style_4}
    title="About"
  />
  <Btn external={false} href={INDEX_PATH} style={button_style_5} title="Main" />
</div>

<style lang="scss">
  .main-menu {
    width: 7rem;
  }
</style>
