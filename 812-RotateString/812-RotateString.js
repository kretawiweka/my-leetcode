// Last updated: 4/8/2026, 2:06:49 AM
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let counter = 0
    let sArr = s.split('')
    while (counter < s.length) {
        if (sArr.join('') === goal) {
            return true
        } 
        let firstIndex = sArr.shift()
        sArr.push(firstIndex)
        counter++
    }

    return false
};