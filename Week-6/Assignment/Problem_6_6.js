const threeSumCloset = (nums, target) => {
  if (nums === null || nums.length <= 2) {
    closetSum = null;
  }
  if (nums.length === 3) {
    closetSum = nums[0] + nums[1] + nums[2];
  }

  // Sort array

  nums.sort();
  let closet = Infinity;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      let currentDiff = sum - target;
      if (currentDiff > 0) {
        right--;
      } else {
        currentDiff = target - sum;
        left++;
      }

      if (currentDiff < closet) {
        closet = currentDiff;
        result = sum;
      }
    }
  }
  return result;
};

console.log(threeSumCloset([-1, 2, 1, -4], 1));
console.log(threeSumCloset([-1, 2, 1, -5, 7, 1], 5));
// Time complexity: O(n)
// Space complexity : O(1)
