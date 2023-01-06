function nextGreater(arr) {
  var next;

  let result = new Array();
  for (let i = 0; i < arr.length; i++) {
    next = -1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        next = arr[j];
        break;
      }
    }
    result.push(next);
  }

  console.log(result);
}

let arr = new Array(11, 13, 21, 3);
let arr1 = new Array(1, 3, 2, 4);
let arr2 = new Array(6, 8, 0, 1, 3);
nextGreater(arr);
nextGreater(arr1);
nextGreater(arr2);
