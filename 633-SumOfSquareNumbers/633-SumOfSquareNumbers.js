// Last updated: 4/8/2026, 2:07:05 AM
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = Math.floor(Math.sqrt(c))
    let b = 0

    while (a >= b) {
        let total = Math.pow(a, 2) + Math.pow(b, 2)

        if (total === c) {
            return true
        } else if (total > c) {
            a--
        } else {
            b++
        }
    }

    return false
};