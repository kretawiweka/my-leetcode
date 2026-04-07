// Last updated: 4/8/2026, 2:09:01 AM
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   if (haystack.includes(needle)) {
    return haystack.indexOf(needle)
   } else {
    return -1
   }
};