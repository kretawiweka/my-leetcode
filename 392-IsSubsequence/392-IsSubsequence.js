// Last updated: 4/8/2026, 2:07:34 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sArr = s.split('')
    let sLength = sArr.length
    let sCount = 0    

    if (!sLength) return true
    if (s.length === 1 && t.length === 1) return s === t

    for (let c of t) {        
        if (sArr[sCount] === c) {
            sCount++
        } 
        if (sCount === sLength) {
            return true
        }
    }

    return false
};