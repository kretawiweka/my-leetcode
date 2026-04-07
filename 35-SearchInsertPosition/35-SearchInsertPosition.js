// Last updated: 4/8/2026, 2:08:59 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let res = binarySearch(nums, target)
    return res
};

const binarySearch = (nums, target) => {
    let low = 0
    let high = nums.length - 1
    
    while (low <= high) {
        let mid = Math.floor((low+high)/2)
        let temp = nums[mid]
        
        if (temp == target) {
            return mid
        }
        if (temp > target) {
            high = mid - 1
        }
        if (temp < target) {
            low = mid + 1
        }        
     }
    return low
}