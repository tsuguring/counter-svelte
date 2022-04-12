<script lang="ts">
  import Counter from "./counter.svelte";

  interface CounterItems {
    countername: string;
    count: number;
  }

  let counterItems: CounterItems[] = [{ countername: "new", count: 0 }];

  function addCounter() {
    counterItems = [...counterItems, { countername: "new", count: 0 }];
  }

  $: titlelist = counterItems.map((Item) => {
    return Item.countername;
  });

  $: sum = counterItems
    .map((Item) => {
      return Item.count;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
</script>

<main>
  <h1>Multiple Counter</h1>
  {#each counterItems as item, index}
    <Counter
      bind:counterItems
      bind:countername={item.countername}
      bind:count={item.count}
      {index}
    />
  {/each}
  <button on:click={addCounter}>new Counter</button>
  <div class="titleList">
    <p>title list:{titlelist}</p>
  </div>
  <div class="countList">
    <p>sum of count:{sum}</p>
  </div>
</main>

<style>
  main {
    text-align: center;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  button {
    max-width: 27rem;
    background-color: #68d391;
    color: white;
    border-color: rgb(250, 250, 250);
    border-radius: 0.5rem;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .titleList {
    display: flex;
    justify-content: center;
  }
  .countList {
    display: flex;
    justify-content: center;
  }
</style>
