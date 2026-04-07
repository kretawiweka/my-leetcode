// Last updated: 4/8/2026, 2:08:00 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b-a)
    return nums[k-1]
};