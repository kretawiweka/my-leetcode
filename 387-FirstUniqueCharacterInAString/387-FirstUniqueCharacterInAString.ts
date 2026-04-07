// Last updated: 4/8/2026, 2:07:23 AM
function firstUniqChar(s: string): number {
    return indexFirstUniqChar(s)
};

const indexFirstUniqChar = (s: string): number => {
    let sArr = s.split('')
    for( let i = 0; i < sArr.length; i++) {
        const letter = sArr[i]
        if (sArr.indexOf(letter) === sArr.lastIndexOf(letter)) {
           return i
        }
   }
    return -1
}