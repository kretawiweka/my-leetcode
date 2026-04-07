// Last updated: 4/8/2026, 2:07:25 AM
function isSubsequence(s: string, t: string): boolean {
    const sArr = s.split('')
    const sArrL = sArr.length
    const tArr = t.split('')
    const tArrL = tArr.length
    
    if (!sArrL) return true

    let count = 0
    let res = false

    for (let i = 0; i < tArrL; i++) {
        if (tArr[i] === sArr[count]) {            
            count++            
            if (count === sArrL) {                
                res = true
                break
            }
        }
    }

    return res
};