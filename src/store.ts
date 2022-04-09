import { writable } from "svelte/store";

interface CounterItems {
  countername: string;
  count: number;
}

export const counterItems = writable<CounterItems[]>([
  { countername: "new", count: 0 },
]);
