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
    console.log(printedList);
  }

  rotateLinkedList(k) {
    let current = this.head;
    let count = 1;
    while (count < k && current != null) {
      current = current.nextNode;
      count++;
    }

    var secondElemnts = current;
    while (current.nextNode != null) {
      current = current.nextNode;
    }

    current.nextNode = this.head;
    this.head = secondElemnts.nextNode;
    secondElemnts.nextNode = null;

    this.printLinkedList();
  }
}

let l = new LinkedList();
l.addNode(10);
l.addNode(20);
l.addNode(30);
l.addNode(40);
l.addNode(50);
l.addNode(60);
l.addNode(70);

console.log("Original Linked list");
l.printLinkedList();

let k = 2;
console.log("Roteted Linked list");
l.rotateLinkedList(k);
