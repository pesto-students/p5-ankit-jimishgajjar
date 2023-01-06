class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    while (this.stack1.length > 0) {
      const item = this.stack1.pop();
      this.stack2.push(item);
    }

    let lastItemPop = this.stack2.pop();

    while (this.stack2.length > 0) {
      let item = this.stack2.pop();
      this.stack1.push(item);
    }

    console.log(`Item Deque ${lastItemPop}`);
  }
}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

if (q.stack1 !== null) {
  console.log("Your Queue Is");
  console.log(q.stack1);
}

q.dequeue();
q.dequeue();
q.dequeue();

if (q.stack1 !== null) {
  console.log("Your Queue After Deque Is");
  console.log(q.stack1);
}
