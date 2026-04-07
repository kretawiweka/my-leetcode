// Last updated: 4/8/2026, 2:07:01 AM
const maxSum = (nums: number[], k): number => {
    let maxSum = -10000000
    let windowSum = 0

    for (let i = 0; i < k; i++) {
        windowSum = windowSum + nums[i]
    }

    if (nums.length === k) return windowSum

    for (let i = k; i < nums.length; i++) {
        maxSum = Math.max(maxSum, windowSum)
        windowSum = windowSum + nums[i] - nums[i-k]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

function findMaxAverage(nums: number[], k: number): number {
    return maxSum(nums, k)/k
};