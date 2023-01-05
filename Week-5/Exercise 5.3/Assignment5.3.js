/*
 * Asignment 5.3
 * Write a function called hasDuplicate which accepts an array and
 * returns true or false if that array contains a duplicate
*/

// Function to find if the array has duplicates
// retrun true - if array does not contain any duplicates
// returns false - if array does contain any duplicates

function hasDuplicate(arr) {
  let arrSet = new Set(arr);

  return arrSet.size !== arr.length;
}

console.log(hasDuplicate([1, 2, 1, 3, 4, 3, 5, 6, 5]));
console.log(hasDuplicate([1, 2, 3, 4, 5, 6, 7]));
console.log(hasDuplicate([1, 2, 1, 4, 5, 6, 5]));
