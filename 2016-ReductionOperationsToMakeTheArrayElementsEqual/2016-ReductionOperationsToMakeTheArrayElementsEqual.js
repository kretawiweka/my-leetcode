// Last updated: 4/8/2026, 2:05:47 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let sorted = nums.sort((a, b) => b-a)
    let map = new Map()
    
    for (let i = 0; i < sorted.length; i++) {
        if (map.has(sorted[i])) {
            let value = map.get(sorted[i])
            map.set(sorted[i], value + 1)
        } else {
            map.set(sorted[i], 1)
        }
    }
    
    let counter = 0
    let keys = map.keys()
    let result = 0
    let length = map.size


    if (map.size === 1) {
        return 0
    }

    for (let key of keys) {
        counter += 1
        let count = map.get(key) * (length - counter)
        result = result + count
    }

    return result
};

const quickSort = (nums) => {
    if (nums.length <= 1) {
        return nums
    }

    let length = nums.length
    let left = []
    let right = []
    let pivot = nums[length - 1]

    for (let i = 0; i < length - 1; i++) {
        if (nums[i] > pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}