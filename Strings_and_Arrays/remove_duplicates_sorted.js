// Difficulty: Easy
// Problemset: https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) return 1;

  let k = 1;
  let lastNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == lastNum) continue;

    lastNum = nums[i];
    nums[k] = nums[i];
    k++;
  }
  return k;
};
