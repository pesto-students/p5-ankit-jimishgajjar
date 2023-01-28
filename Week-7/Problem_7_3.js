class Node {
  constructor(element) {
    this.element = element;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(element) {
    var node = new Node(element);
    var current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
    this.size++;
  }

  printLinkedList() {
    var temp = this.head;
    var printedList = [];
    while (temp !== null) {
      printedList.push(temp.element);
      temp = temp.nextNode;
    }
  }

  detectLoop(k) {
    var temp = this.head;
    while (temp !== null) {
      if (temp.nextNode !== null) {
        if (temp.element === k - 1 && temp.nextNode.element === k + 1) {
          return `Loop detected with ${temp.element}, ${k}, ${temp.nextNode.element}`;
        }
      }
      temp = temp.nextNode;
    }
    return `Loop not detected`;
  }
}

let l = new LinkedList();
l.addNode(1);
l.addNode(2);
l.addNode(3);
l.addNode(5);

let k = 4;
console.log(l.detectLoop(k));
