// Last updated: 4/8/2026, 2:08:32 AM
function isPalindrome(s: string): boolean {
    const onlyAlphanumeric = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const arr = onlyAlphanumeric.split('')
    
    if (!arr.length) return true

    if (arr.length % 2 == 0) {
        const firstArr = arr.slice(0, arr.length/2)
        const secondArr = arr.slice(arr.length/2, arr.length)
        return JSON.stringify(firstArr) === JSON.stringify(secondArr.reverse())
    } else {
        const firstArr = arr.slice(0, (arr.length - 1)/2)        
        const secondArr = arr.slice((arr.length + 1)/2, arr.length)
        return JSON.stringify(firstArr) === JSON.stringify(secondArr.reverse())
    } 
};