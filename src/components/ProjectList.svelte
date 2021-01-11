

<script>
  let list = [
    ["https://candywater.xyz/android-download", "九阴计算器apk"],
    ["https://candywater.xyz", "九阴计算器"]
  ]

  let list_type = [
    "list-group-item-primary",
    "list-group-item-secondary",
    "list-group-item-success",
    "list-group-item-danger",
    "list-group-item-warning",
    "list-group-item-info",
    "list-group-item-light",
    "list-group-item-dark",
  ]

</script>


<div class="list-group">
  {#each list as item, i}
    <a href={item[0]} class="list-group-item list-group-item-action {list_type[i%list_type.length]}">{item[1]}</a>
  {/each}
</div>