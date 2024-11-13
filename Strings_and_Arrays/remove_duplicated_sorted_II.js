// Difficulty: Medium
// Problemset: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) return 1;

  let k = 1;
  let lastNum = nums[0];
  let lastCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == lastNum && lastCount === 2) continue;
    if (nums[i] == lastNum) lastCount++;
    else lastCount = 1;

    lastNum = nums[i];
    nums[k] = nums[i];
    k++;
  }
  return k;
};
