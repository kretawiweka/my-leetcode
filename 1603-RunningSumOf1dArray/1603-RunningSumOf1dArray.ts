// Last updated: 4/8/2026, 2:06:11 AM
function runningSum(nums: number[]): number[] {
    return nums.reduce((acc, num) => {
        const last = acc[acc.length - 1] || 0
        acc.push(last + num)
        return acc
    }, [])
};