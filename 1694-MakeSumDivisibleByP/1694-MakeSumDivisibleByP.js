// Last updated: 4/8/2026, 2:06:07 AM
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let total = nums.reduce((a, b) => a+b)
    let remain = total % p

    if (remain === 0) {
        return 0
    }

    const n = nums.length
    let result = n
    let current_sum = 0
    let remain_to_index = {
        0: -1
    }

    for (let i = 0; i < n; i++) {
        current_sum = (current_sum + nums[i]) % p
        let prefix = (current_sum - remain + p) % p    

        if (remain_to_index.hasOwnProperty(prefix)) {
            let l = i - remain_to_index[prefix]
            result = Math.min(result, l)
        }

        remain_to_index[current_sum] = i
    }

    if (result === nums.length) {
        return -1
    }

    return result
};