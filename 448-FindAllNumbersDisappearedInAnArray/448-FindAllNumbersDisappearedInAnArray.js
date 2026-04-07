// Last updated: 4/8/2026, 2:07:17 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a, b) => a-b)
    let res = []

    let uniqueNums = [...new Set(nums)]

    let length = nums.length > nums[nums.length -1 ] ? nums.length : nums[nums.length -1]
    let indexNums = 0
    for (let i = 1; i < length + 1; i++) {
        if (i !== uniqueNums[indexNums]) {
            res.push(i)
        } else {
            indexNums++
        }
    }

    return res
};