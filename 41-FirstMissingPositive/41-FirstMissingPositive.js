// Last updated: 4/8/2026, 2:08:57 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let arr = nums.sort((a, b) => a-b)
    arr = nums.filter(item => item > 0);

    let index = 1

    if (arr[0] !== 1) {
        return 1
    }

    while (index < arr.length) {
        let diff = arr[index] - arr[index-1]
        if(diff > 1) {
            return arr[index-1] + 1
        }
        index++
    }

    return arr[arr.length - 1] + 1
};