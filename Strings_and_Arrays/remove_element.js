// Difficulty: Easy
// Problemset: https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let newLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[newLength] = nums[i];
      newLength++;
    }
  }
  return newLength;
};
