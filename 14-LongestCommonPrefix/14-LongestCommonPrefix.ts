// Last updated: 4/8/2026, 2:09:10 AM
function longestCommonPrefix(strs: string[]): string {
    let shortestStr = strs[0]
    
    for (let i = 1; i < strs.length; i++) {
        if (shortestStr.length > strs[i].length) {
            shortestStr = strs[i]
        }
    }
    
    let i: number = 0
    let tmpLcp = shortestStr.charAt(0)
    let lcp = ''
    
    while (i < shortestStr.length) { 
        tmpLcp = shortestStr.charAt(i)
        for (let a = 0; a < strs.length; a++) {
            if (tmpLcp === strs[a].charAt(i)){
                console.log(tmpLcp, strs[a].charAt(i))
                tmpLcp = strs[a].charAt(i)
            } else {
                return lcp
            }                       
        }
        lcp = lcp.concat(tmpLcp) 
        console.log(tmpLcp, lcp)
        i++
    }
  
    return lcp
};
