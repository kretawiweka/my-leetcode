// Last updated: 4/8/2026, 2:08:49 AM
function lengthOfLastWord(s: string): number {
    const sTrim = s.replace(/ +/g, ' ').trimStart().trimEnd()    
    const sArr = sTrim.split(' ')     
    return sArr[sArr.length - 1].length
};