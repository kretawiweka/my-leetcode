// Last updated: 4/8/2026, 2:08:06 AM
function findKthLargest(nums: number[], k: number): number {
    return getNumberK(nums, k)
};

const getNumberK = (nums: number[], k: number): number => {
    nums.sort((a, b) => b-a)
    return nums[k-1]
}