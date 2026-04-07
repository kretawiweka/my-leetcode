// Last updated: 4/8/2026, 2:09:07 AM
function strStr(haystack: string, needle: string): number {
    return getCountStr(haystack, needle)
};

const getCountStr = (haystack: string, needle: string) => {
    let getIndex = -1
    let lengthOfNeedle = needle.length
    if (!haystack.includes(needle)) return getIndex
    
    for (let c = 0; c < haystack.length; c++) {
        if (haystack.substr(c, lengthOfNeedle) == needle) {
            return c
        }
    }
}