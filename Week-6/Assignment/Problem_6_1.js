// Find the contiguous subarray within an array, A of length N which has the largest sum.

function maxSumSubArr(arr) {
  let maxSum = 0; //used to get maximum subarray sum
  let currentSum = 0; //used to get current subarray sum

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return "Max Sum Of Given Array Is : " + maxSum;
}

console.log(maxSumSubArr([1, 2, 3, 4, -10]));
console.log(maxSumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSumSubArr([4, -1, 2, 1]));
