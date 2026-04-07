// Last updated: 4/8/2026, 2:07:00 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums = nums.sort((a,b) => a-b)

    let numsLength = nums.length
    let res = [0, 0]
    let map = new Map()
    
    // Set hashmap [num, count]
    for (let i = 0; i < numsLength; i++) {
        if (!nums.includes(i+1)) {
            map.set(i+1, undefined)
        }

        if (map.get(nums[i])) {
            map.set(nums[i], 2)
        } else {
            map.set(nums[i], 1)
        }
    }

    let keys = map.keys();
    let counter = 1

    for (let key of keys) {
        if (map.get(counter) === undefined) {
            res[1] = counter
        } 
        if (map.get(counter) === 2) {
            res[0] = counter
        }

        counter++
    }

    return res
};