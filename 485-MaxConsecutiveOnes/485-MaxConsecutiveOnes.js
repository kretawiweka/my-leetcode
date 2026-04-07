// Last updated: 4/8/2026, 2:07:12 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++
        } else {
            if (max < counter) {
                max = counter
            }
            counter = 0
        }
    }

    if (max < counter) {
        max = counter
    }

    return max
};