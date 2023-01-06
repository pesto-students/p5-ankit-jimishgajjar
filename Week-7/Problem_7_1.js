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

  printLinkedList(linkedlist) {
    let temp = linkedlist;
    var printedList = [];
    while (temp !== null) {
      printedList.push(temp.element);
      temp = temp.nextNode;
    }
    console.log(printedList);
  }

  reverseLinkedList() {
    let prevNode = null;
    let current = this.head;
    let nextNode = null;

    while (current !== null) {
      nextNode = current.nextNode;
      current.nextNode = prevNode;
      prevNode = current;
      current = nextNode;
    }

    this.printLinkedList(prevNode);
  }
}

var l = new LinkedList();

l.addNode(10);
l.addNode(20);
l.addNode(30);
l.addNode(40);
l.addNode(50);

console.log("Original Linked list");
l.printLinkedList(l.head);
console.log("Reverse Linked list");
l.reverseLinkedList();
