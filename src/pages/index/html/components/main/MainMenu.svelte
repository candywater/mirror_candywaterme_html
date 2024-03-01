<script lang="ts">
  import Btn from "./mainMenu/MainMenuButton.svelte";
  import {
    ESSAY,
    TECH,
    PROJECT,
    ABOUT,
    INDEX,
    PATH_DICT,
    TIMES,
  } from "@/ts/config/path";

  const basicstyle =
    "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white capitalize rounded shadow focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 "; //  = "border border-light-blue-500 border-opacity-5"
  const border = "border border-indigo-500";

  const button_style_1 = `${basicstyle} ${border} bg-blue-500 hover:bg-blue-700 `;
  const button_style_2 = `${basicstyle} ${border} bg-indigo-500 hover:bg-indigo-700 `;
  const button_style_3 = `${basicstyle} ${border} bg-purple-500 hover:bg-purple-700 `;
  const button_style_4 = `${basicstyle} ${border} bg-yellow-500 hover:bg-yellow-700 `;
  const button_style_5 = `${basicstyle} ${border} bg-red-500 hover:bg-red-700 `;
  const button_style_6 = `${basicstyle} ${border} bg-gray-800 hover:text-white `;

  // function getStyle(color:string): string {
  //   return `bg-${color}-500 hover:bg-${color}-700`;
  // }
</script>

<div class="main-menu">
  <Btn href={PATH_DICT[ESSAY]} style={button_style_1} title={ESSAY} />
  <Btn href={PATH_DICT[TECH]} style={button_style_2} title={TECH} />
  <Btn href={PATH_DICT[PROJECT]} style={button_style_3} title={PROJECT} />
  <Btn href={PATH_DICT[ABOUT]} style={button_style_4} title={ABOUT} />
  <Btn href={PATH_DICT[TIMES]} style={button_style_6} title={TIMES} />
  <Btn href={PATH_DICT[INDEX]} style={button_style_5} title={INDEX} />
</div>

<style lang="scss">
  .main-menu {
    width: 7rem;
  }
</style>
