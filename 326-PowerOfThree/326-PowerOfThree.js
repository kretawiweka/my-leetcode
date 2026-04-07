// Last updated: 4/8/2026, 2:07:37 AM
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0 || n == 2) return false
    if (n === 1) return true        
    return isPowerOfThree(n/3)
};
