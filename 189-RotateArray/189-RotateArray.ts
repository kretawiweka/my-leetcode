// Last updated: 4/8/2026, 2:08:13 AM
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    for (let a = 0; a < k; a++) {
        nums.unshift(nums[nums.length - 1])
        nums.pop()
    }      
};