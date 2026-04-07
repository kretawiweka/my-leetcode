// Last updated: 4/8/2026, 2:05:18 AM
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length === 0) return init | 0

    let sum = 0
    if (init) {
        sum = init
    }

    for (let c = 0; c < nums.length; c++) {
        sum = fn(sum, nums[c])
    }

    return sum
};