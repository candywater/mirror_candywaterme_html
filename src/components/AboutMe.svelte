<script>
  let show_quote = false;

  function OnImgClick(e){
    show_quote = !show_quote;
  }
</script>


<span class="">
    <a href="https://github.com/candywater">
      <div class="nes-icon github"></div>
    </a>
    <a href="https://twitter.com/candywater1">
      <div class="nes-icon twitter"></div>
    </a>
    <a href="https://about.me/candywater">
      <div class="nes-icon aboutme"></div>
  </a>
</span>

<div class="inline" id="credit">

<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/4.0/"><img alt="creativ common license" style="border-width:0" src="/assets/logos/cc/by_4.0.png" /></a> for technique, <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="creativ common license" style="border-width:0" src="/assets/logos/cc/by_nc_sa_4.0.png" /></a> for arts. Click <a href="#" 
  on:click="{OnImgClick}"
> Here </a> For More. </div>


{#if show_quote}
<div class="inline" id="credit_info">
Most techinical articles, in this site by <a xmlns:cc="http://creativecommons.org/ns#" href="http://candy-water.com/about" property="cc:attributionName" rel="cc:attributionURL">Candy Water</a>
 is under this <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">License</a>.
 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="/assets/logos/cc/small_by_4.0.png" /></a>

 <br>
And most artwork, like essays and some visual works, in this site by <a xmlns:cc="http://creativecommons.org/ns#" href="http://candy-water.com/about" property="cc:attributionName" rel="cc:attributionURL">candy water</a>
  is under this <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">License</a>.
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="/assets/logos/cc/small_by_nc_sa_4.0.png" /></a>
<br>
And for all code projects, read the license of that work, plz.
</div>

{/if}

<style lang="scss">


  //https://github.com/nostalgic-css/NES.css
/**
MIT License
Copyright (c) 2018 B.C.Rikko <https://github.com/BcRikko>
*/

@mixin pixelize($size, $matrix, $colors, $default-color: null) {
  $ret: "";
  $moz: "";
  @if ($default-color == null) {
    // count number of each color in matrix and decide main color by highest count
    $matrix-colors: ();
    $counts: ();
    @each $row in $matrix {
      @each $item in $row {
        @if $item != 0 {
          $index: index($matrix-colors, $item);
          @if not $index {
            $matrix-colors: append($matrix-colors, $item);
            $counts: append($counts, 1);
          } @else {
            $count: nth($counts, $index) + 1;
            $counts: set-nth($counts, $index, $count);
          }
        }
      }
    }
    // use index of the highest count to get the corresponding matrix color
    $default-color: nth($colors, nth($matrix-colors, index($counts, max($counts...))));
  }

  @for $i from 1 through length($matrix) {
    $row: nth($matrix, $i);

    @for $j from 1 through length($row) {
      $dot: nth($row, $j);

      @if $dot != 0 {
        @if $ret != "" {
          $ret: $ret + ",";
          $moz: $moz + ",";
        }

        $color: nth($colors, $dot);
        @if $color == $default-color {
          $ret: $ret + ($j * $size) + " " + ($i * $size);
          $moz: $moz + ($j * $size) + " " + ($i * $size) + " 0 0.020em";
        } @else {
          $ret: $ret + ($j * $size) + " " + ($i * $size) + " " + $color;
          $moz: $moz + ($j * $size) + " " + ($i * $size) + " 0 0.020em " + $color;
        }
      }
    }
  }

  width: $size;
  height: $size;
  color: $default-color;
  box-shadow: unquote($ret);

  // firefox only style
  @supports (-moz-appearance: meterbar) {
    box-shadow: unquote($moz);
  }
}


$icon-twitter-colors: (#fff, #2c9ceb);
// prettier-ignore
$icon-twitter: (
  ( 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 2,1,2,2,2,2,2,2,2,1,1,1,2,2,2,2 ),
  ( 2,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2 ),
  ( 2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2 ),
  ( 2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2 ),
  ( 2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2 ),
  ( 2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2 ),
  ( 2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2 ),
  ( 2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2 ),
  ( 2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2 ),
  ( 2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2 ),
  ( 2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,2 ),
  ( 2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0 )
);

$icon-github-colors: (#fff, #333);
// prettier-ignore
$icon-github: (
  ( 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0 ),
  ( 2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2 ),
  ( 2,2,2,2,1,1,2,2,2,2,2,2,1,1,2,2 ),
  ( 2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2 ),
  ( 2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2 ),
  ( 2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2 ),
  ( 2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2 ),
  ( 2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2 ),
  ( 2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2 ),
  ( 2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2 ),
  ( 2,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2 ),
  ( 2,2,2,1,2,2,1,1,1,1,1,1,2,2,2,2 ),
  ( 2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2 ),
  ( 2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2 ),
  ( 2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2 ),
  ( 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0 )
);

$icon-aboutme-colors: (#fff, #333);
// prettier-ignore
$icon-aboutme: (
  ( 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 2,1,1,1,2,1,1,1,2,1,1,1,1,1,2,2 ),
  ( 2,2,1,1,2,1,1,2,2,2,1,2,2,1,2,2 ),
  ( 2,2,1,2,1,2,1,2,2,2,1,2,2,2,2,2 ),
  ( 2,2,1,2,1,2,1,2,2,2,1,2,2,2,2,2 ),
  ( 2,2,1,2,1,2,1,2,2,2,1,1,1,2,2,2 ),
  ( 2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2 ),
  ( 2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2 ),
  ( 2,2,1,2,2,2,1,2,2,2,1,2,2,1,2,2 ),
  ( 2,1,1,1,2,1,1,1,2,1,1,1,1,1,2,2 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2 ),
  ( 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0 )
);

.nes-icon {
  $default-size: 1px;
  $icon-size: $default-size * 16;

  position: relative;
  display: inline-block;
  width: $icon-size;
  height: $icon-size;
  margin-right: $icon-size;
  margin-bottom: $icon-size;

  // NOTE: Use `transform: scale()` because cannot use font-size less than 10px on Chrome
  // default 2px
  transform: scale(2);
  transform-origin: top left;

  &.is-small {
    margin: 0;
    // 1px
    transform: scale(1);
  }

  &.is-medium {
    margin-right: $icon-size * 2;
    margin-bottom: $icon-size * 2;
    // 3px
    transform: scale(3);
  }

  &.is-large {
    margin-right: $icon-size * 3;
    margin-bottom: $icon-size * 3;
    // 4px
    transform: scale(4);
  }
  
  &::before {
    position: absolute;
    top: $default-size * -1;
    left: $default-size * -1;
    display: block;
    content: "";
    background: transparent;
  }

  &.github::before {
    @include pixelize($default-size, $icon-github, $icon-github-colors);
  }

  &.twitter::before {
    @include pixelize($default-size, $icon-twitter, $icon-twitter-colors);
  }

  &.aboutme::before {
    @include pixelize($default-size, $icon-aboutme, $icon-aboutme-colors);
  }
}

</style>