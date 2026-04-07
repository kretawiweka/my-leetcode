// Last updated: 4/8/2026, 2:06:52 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target)
};

const binarySearch = (arr, target) => {
    let lo = 0
    let high = arr.length - 1
    while(lo <= high) {
        let mid = Math.floor((lo + high) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] < target) {
            lo = mid + 1
        } else {
            high = mid -1
        }
    }

    return -1
}