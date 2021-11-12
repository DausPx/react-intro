export function increment() {
  return { type: "increment" };
}

export function decrement() {
    return { type: "decrement" }
}

export function incrementByAmount(number) {
    return { type: 'incrementByAmount', payload: number}
    
}