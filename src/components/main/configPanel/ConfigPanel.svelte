<script>

import {panel_background_color} from "../../../store/config"
// import {hex2RGB} from "../../../common/common"

const btn_style = "btn bg-blue-500 hover:bg-blue-700"

</script>

<div class="panel">
  <div>
    <label>Panel Color Picker</label>
    <input type="color" bind:value={$panel_background_color} />
  </div>
</div>

<style lang="scss">
  $white-background : rgba(156, 163, 175, 0.7);
  .panel{
    background-color: $white-background;
    padding: 1rem;
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content:center;
    align-items: flex-start;
    div{
    }
  }
  .btn{
    display: block;
    width: 7rem;
    margin: 0.2rem 0rem;
    padding: 0.5rem 0.7rem;
    // font-size: 1.25rem;
    text-align: center;
    // font-weight: 400;
  }
</style>