// Difficulty: Medium
// Problemset: https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  let temp = [];

  k = k % n;
  if (n === 0 || k > n) return nums;
  for (let i = n - k; i < n; i++) {
    temp.push(nums[i]);
  }

  for (let i = 0; i < n - k; i++) {
    temp.push(nums[i]);
  }

  for (let i = 0; i < n; i++) {
    nums[i] = temp[i];
  }
};
