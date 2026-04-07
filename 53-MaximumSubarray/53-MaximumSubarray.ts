// Last updated: 4/8/2026, 2:08:53 AM
function maxSubArray(nums: number[]): number {
    return maxSubArr(nums)
};

const maxSubArr = (nums: number[]): number => {
    let maxSum = nums[0]
    let curSum = 0
    for (let num of nums) {
        if (curSum < 0) {
            curSum = 0
        }

        curSum += num
        maxSum = Math.max(curSum, maxSum)
    }

    return maxSum
}