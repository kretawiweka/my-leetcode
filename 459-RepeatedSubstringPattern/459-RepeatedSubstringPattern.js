// Last updated: 4/8/2026, 2:07:15 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return (s + s).indexOf(s, 1) < s.length  
};