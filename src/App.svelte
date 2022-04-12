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

  function sumCount(Items: CounterItems[]) {
    let sumcount = 0;
    Items.forEach((element) => {
      sumcount += element.count;
    });
    return sumcount;
  }

  $: sum = sumCount(counterItems);
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
    <p>title list:</p>
    {#each counterItems as item, index}
      {#if index === counterItems.length - 1}
        <p class="counterName">{item.countername}</p>
      {:else}
        <p class="counterName">{item.countername},</p>
      {/if}
    {/each}
  </div>
  <div class="countList">
    <p>sum of count:</p>
    <p class="sumcount">{sum}</p>
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
  .counterName {
    margin-left: 5px;
  }
  .sumcount {
    margin-left: 5px;
  }
</style>
