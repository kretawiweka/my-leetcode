// Last updated: 4/8/2026, 2:09:19 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i]
        let findIndex = nums.indexOf(res)
        if (findIndex !== -1 && findIndex !== i) {
            return [i, findIndex]
        }
    }  
};