

<script>
  let list = [
     ["https://candywater.xyz/android-download", "九阴计算器apk"],
     ["https://candywater.xyz", "九阴计算器"],
     ["#", "discord chat bot"],
  ]

  let list_type = [
    "bg-gray-300 hover:bg-gray-500 text-black rounded"
  ]

</script>


<ol class="list-disc">
  {#each list as item, i}
    <li>
      <a href={item[0]} class="{list_type[i%list_type.length]}">{item[1]}</a>
    </li>
  {/each}
</ol>

<style>
  li{
    margin: 0.1rem 0.1rem;
    padding: 0.1rem 0.2rem;
  }


</style>