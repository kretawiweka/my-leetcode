// Last updated: 4/8/2026, 2:06:14 AM
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let firstEl = nums.slice(0, n)
    let secondEl = nums.slice(n, nums.length)
    let res = []
    
    for (let i = 0; i < firstEl.length; i++) {
        res = [...res, firstEl[i]]
        res = [...res, secondEl[i]]
    }

    return res
};