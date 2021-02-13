<script>

import {show_config_panel} from "../../../store/config"

const HELP_INFO = `HELP INFO
type following commands to use console.
:help help
:about about this console
:exit exit console
`
const ABOUT_INFO = `this is a console by candy water. ver 0.0.1
`
const EXIT_INFO = `have a nice day!
`
const ERROR_INFO = `command not found. Type :help for help.
`

let console_info = `type :help to show commands. \n`
let input_value = ""

function onCloseClick(){
  $show_config_panel = false
}

function onKeyDown(e){
  if(e.key === "Enter"){
    console_info += "> " + input_value // include enter(\n)
    consoleCommand(input_value)
    input_value = ""
  }
}

function consoleCommand(input){
  let str = input.trim();
  switch (str) {
    case ":help":
    case "help":
      console_info += HELP_INFO
      break;
    case ":about":
    case "about":
      console_info += ABOUT_INFO 
      break;
    case ":exit":
    case "exit":
      console_info += EXIT_INFO
      setTimeout(() => {
        $show_config_panel = false;
      }, 350);
      break;
    default:
      console_info += ERROR_INFO
      break;
  }
}

</script>

<div class="panel animated fadeIn faster">
  <div class="terminal">
    <div class="header">
      <span class="bullet bullet-red" on:click={onCloseClick}></span>
      <span class="bullet bullet-yellow"></span>
      <span class="bullet bullet-green"></span>
      <span class="title">~/candy-water/config/index.js</span>
    </div>
    <div class="window">
      <pre>
        {console_info}
      </pre>
      <div class="terminal-prompt" >
          <!-- svelte-ignore a11y-autofocus -->
          <textarea class="cli" rows="2" on:keyup={onKeyDown} bind:value={input_value} autofocus></textarea>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
$white-background : rgba(156, 163, 175, 0.7);
.panel{
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
}
//https://socket.io/
.terminal{
  background-color: $white-background;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.header{
  background: #e8e8e8;
  border-radius: 4px 4px 0 0;
  padding: 3px 1rem;
  // height: 2rem;
  .bullet{
    height: 11px;
    width: 11px;
    display: inline-block;
    background: #ccc;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 5px;
  }
  .bullet-red{
    background: #df7065;
  }
  .bullet-yellow{
    background: #e6bb46;;
  }
  .bullet-green{
    background: #5bcc8b;;
  }
}
.window{
  overflow-y: scroll;
  padding: 0.5rem;
  background-color: rgba(8, 8, 8, 0.5);
  height: 100%;
  color: #e8e8e8;
  pre{
    font-family: consolas,monospace;
  }
}

//--primary-color: #1a95e0;
//https://terminalcss.xyz/dark/#
.terminal-prompt{
  display: flex;
  //https://jsconsole.com/
  .cli{
    overflow-y: hidden;
    padding-left: 0.3rem;
    color: #dedede;
    resize: none;
    background: none;
    font-family: consolas,monospace;
    border: 0;
    display: inline-block;
    width: 100%;
    outline: none;
    font-size: inherit;
    line-height: inherit;
  }
}
.terminal-prompt::before {
  font-family: consolas,monospace;
  content: ">";
}

</style>