// Last updated: 4/8/2026, 2:06:46 AM
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let length = arr.length
    let i = 0
    let peak = arr[0]
    let peakIndex = 0

    while (i < length) {
        if (peak > arr[i]) {
            peakIndex = i - 1
            break
        } else {
            peak = arr[i]
            i++
        }
    }  

    return peakIndex
};