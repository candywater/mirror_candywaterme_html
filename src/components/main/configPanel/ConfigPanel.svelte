<script>

import {show_config_panel} from "../../../store/config"

let show_cursor = true
let console_info = `type :help to show commands. \n`
let input_value = ""

function on_close_click(){
  $show_config_panel = false
}
function on_prompt_focus(){
  show_cursor = false;
}
function on_prompt_leave(){
  show_cursor = true;
}
function on_key_down(e){
  if(e.key === "Enter"){
    console_info += input_value // include enter(\n)
    input_value = ""
  }
}

</script>

<div class="panel animated fadeIn faster">
  <div class="terminal">
    <div class="header">
      <span class="bullet bullet-red" on:click={on_close_click}></span>
      <span class="bullet bullet-yellow"></span>
      <span class="bullet bullet-green"></span>
      <span class="title">~/candy-water/config/index.js</span>
    </div>
    <div class="window">
      <pre>
        {console_info}
      </pre>
      <div class="terminal-prompt" 
        on:focusin={on_prompt_focus}
        on:focusout={on_prompt_leave}
      >
        {#if show_cursor}
          <span class="terminal-cursor"></span>
        {/if}
          <textarea class="cli" rows="1" on:keyup={on_key_down} bind:value={input_value} autofocus></textarea>
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
  padding: 0.5rem;
  background-color: rgba(8, 8, 8, 0.5);
  height: 100%;
  color: #e8e8e8;
}

//--primary-color: #1a95e0;
//https://terminalcss.xyz/dark/#
.terminal-prompt{
  display: flex;
  //https://jsconsole.com/
  .cli{
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
  content: ">";
}

.terminal-cursor::before{
  content: "";
  animation: cursor 800ms infinite;
  background: #1a95e0;
  border-radius: 0;
  display: inline-block;
  height: 1em;
  margin-left: 0.2em;
  width: 3px;
  bottom: -2px;
  position: relative;
}

@keyframes cursor {
  0% { opacity: 0; } 
  50% { opacity: 1; } 
  to { opacity: 0; }
}


</style>