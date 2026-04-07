// Last updated: 4/8/2026, 2:05:34 AM
function partitionString(s: string): number {
    let sArr = s.split('')
    let res = 0
    let curSet = []
    for (let i = 0; i < sArr.length; i++) {        
        if (curSet.includes(sArr[i])){
            console.log(curSet)
            res++
            curSet = [sArr[i]]
        }
        else {         
            console.log(curSet)   
            curSet.push(sArr[i])
        }
    }   
    return res+1
};