// Last updated: 4/8/2026, 2:06:21 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
/**
* 1. create new array variable sorted
* 2. compare original array with new array 
 */
 let sortedNums = [...nums].sort((a, b) => a - b)
 let res = []
 
 for (let i = 0; i < nums.length; i++) {
    res = [...res, sortedNums.indexOf(nums[i])]
 }

 return res
};