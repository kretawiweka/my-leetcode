// Last updated: 4/8/2026, 2:07:11 AM
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upperCaseCount = word.split('').reduce((acc, curVal)=> {
        if (curVal === curVal.toUpperCase()) {
            acc = acc + 1
        }
        return acc
    }, 0)

    return upperCaseCount === 0 || 
        upperCaseCount === word.length || 
        (upperCaseCount === 1  && word[0] === word[0].toUpperCase())
};