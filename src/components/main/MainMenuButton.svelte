<script lang="ts">
  import { path } from "../../config/path";

  export let style: string;
  export let href: string;
  export let title: string;

  const animation = "animated jello";
  let anime = "";
  if ($path.toLowerCase() == title.toLowerCase()) anime = animation;
</script>

<a {href} role="button" name="button" class="btn {style} {anime}">{title}</a>

<style lang="scss">
  .btn {
    display: block;
    width: 7rem;
    margin: 0.2rem 0rem;
    padding: 0.5rem 0.7rem;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 400;
  }
</style>
