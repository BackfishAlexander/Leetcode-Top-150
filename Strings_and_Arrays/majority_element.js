// Difficulty: Easy
// Problemset: https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

//Solution 1: Slow. Especially with nums.sort()
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length == 1) return nums[0];

  nums.sort();
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) count++;
    else count = 1;

    if (count > nums.length / 2) {
      return nums[i];
    }
  }
};

//Solution 2: Bayes-Moore Voting Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let major = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (major === nums[i]) {
      count += 1;
    } else {
      count -= 1;
      if (count === 0) {
        major = nums[i];
        count = 1;
      }
    }
  }
  return major;
};
