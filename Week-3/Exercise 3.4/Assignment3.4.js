function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
      return items;
    },
    pop() {
      items.pop();
      return items;
    },
  };
}
const stack = createStack();

console.log(stack.push(10));
console.log(stack.push(5));
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
