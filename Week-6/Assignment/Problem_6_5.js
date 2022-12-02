function differenceOfPairExist(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(val + arr[i])) {
      return 1;
    }
  }
  return 0;
}

console.log(differenceOfPairExist([5, 10, 3, 2, 50, 80], 78));
console.log(differenceOfPairExist([-10, 20], 30));
// Time complexity: O(n2)
// Space complexity : O(1)
