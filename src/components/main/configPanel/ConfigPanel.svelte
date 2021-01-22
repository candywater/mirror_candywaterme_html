<script>

const btn_style = "btn bg-blue-500 hover:bg-blue-700"

</script>

<div class="panel">
  <div class="terminal">
    <div class="header">
      <span class="bullet bullet-red"></span>
      <span class="bullet bullet-yellow"></span>
      <span class="bullet bullet-green"></span>
      <span class="title">~/candy-water/config/index.js</span>
    </div>
    <div class="window">
      <blockquote>
        I'm coding this part !
      </blockquote>
      <div class="terminal-prompt">
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
.terminal{
  background-color: $white-background;
  width: 100%;
  height: 100%;
  padding: 1rem;
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
}

//--primary-color: #1a95e0;

.terminal-prompt {
  position: relative;
  white-space: nowrap;
}

.terminal-prompt::before {
  content: "> ";
}

.terminal-prompt::after {
  content: "";
  -webkit-animation: cursor 800ms infinite;
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

@-webkit-keyframes cursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes cursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}


</style>