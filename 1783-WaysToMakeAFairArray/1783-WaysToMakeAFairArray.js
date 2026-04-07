// Last updated: 4/8/2026, 2:06:01 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    const NUMS_LENGTH = nums.length
    let evenSum = 0
    let oddSum = 0
    let prefixOdd = 0
    let prefixEven = 0
    let fairCounter = 0

    for (let i = 0; i < NUMS_LENGTH; i++) {
        if (i % 2 === 0) {
            evenSum += nums[i]
        } else {
            oddSum += nums[i]
        }
    }
    

    for (let i = 0; i < NUMS_LENGTH; i++) {
        if (i % 2 === 0) {
            evenSum = evenSum - nums[i]
        } else {
            oddSum = oddSum - nums[i]
        }

        let newEven = prefixEven + evenSum
        let newOdd = prefixOdd + oddSum

        if (newEven === newOdd) {
            fairCounter += 1
        }

        if (i % 2 === 0) {
            prefixEven = prefixEven - nums[i]
        } else {
            prefixOdd = prefixOdd - nums[i]
        }
    }

    return fairCounter
};