class Stack {
  constructor() {
    this.status = null;
    this.stack = [];
    this.openArr = ["{", "[", "("];
    this.closeArr = ["}", "]", ")"];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    this.stack.pop();
  }

  checkElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (this.openArr.includes(arr[i])) {
        this.push(arr[i]);
      } else {
        let check = this.closeArr.indexOf(arr[i]);
        if (this.stack[this.stack.length - 1] == arr[check]) {
          this.pop();
          this.status = true;
        } else {
          this.status = false;
        }
      }
    }

    return this.status;
  }
}

let arr = "{[()]}";
let arr1 = "{[(]]}";
let arr2 = "{[(]}";
let stack = new Stack();
console.log(stack.checkElement(arr));
console.log(stack.checkElement(arr1));
console.log(stack.checkElement(arr2));
