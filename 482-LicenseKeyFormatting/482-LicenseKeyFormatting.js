// Last updated: 4/8/2026, 2:07:13 AM
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let sLength = s.length
    let dashCount = s.match(/-/g)?.length;
    let sArr = s.split("")
    let countChar = sLength - dashCount
    let groupLength = countChar % k || k
    let result = []

    for (let i = 0; i < sLength; i++) {
        let currentChar = sArr[i]

        if (currentChar !== "-") {
            if (groupLength === 0) {
                result.push("-")
                groupLength = k
            }

            result.push(sArr[i].toUpperCase())
            groupLength--
        }
    }  
    console.log("result", result)
    if (result[result.length - 1] === "-") {
        result.pop()
    }

    return result.join('')
};