<script lang="ts">
  export let counterItems: CounterItems[];
  export let countername: string;
  export let count: number;
  export let index: number;

  interface CounterItems {
    countername: string;
    count: number;
  }
  function incrementCount() {
    count += 1;
  }
  function decrementCount() {
    if (count > 0) {
      count -= 1;
    }
  }
  function resetCount() {
    count = 0;
  }
  function removeCounter() {
    counterItems.splice(index, 1);
    counterItems = counterItems;
  }
</script>

<div class="counterContainer">
  <input bind:value={countername} type="text" />
  <p>{count}</p>
  <div class="buttonContainer">
    <button class="plus" on:click={incrementCount}>＋</button>
    <button class="minus" on:click={decrementCount}>ー</button>
    <button class="reset" on:click={resetCount}>０</button>
    <button class="delete" on:click={removeCounter}>削除</button>
  </div>
</div>

<style>
  input {
    margin: 0 0 0 1rem;
  }
  p {
    font-size: x-large;
    margin: 0;
  }
  .counterContainer {
    display: flex;
    max-width: 27rem;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(250, 250, 250);
    box-shadow: 2px 5px 8px 2px rgba(165, 165, 165, 0.5);
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .buttonContainer {
    margin-right: 1rem;
  }
  button {
    margin: 0;
    border-radius: 0.5rem;
  }
  .plus {
    background-color: #f56565;
    color: white;
  }
  .minus {
    background-color: #4299e1;
    color: white;
  }
  .reset {
    background-color: #ecc94b;
    color: white;
  }
  .delete {
    background-color: white;
    color: red;
  }

  @media (max-width: 450px) {
    input {
      margin: 0 0 0 1rem;
      max-width: 7rem;
    }
  }
</style>
