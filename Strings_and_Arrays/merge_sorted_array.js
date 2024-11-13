// Difficulty: Easy
// Problemset: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// Time complexity:     O(nlogn)
// Space complexity:    O(1)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort();
};
