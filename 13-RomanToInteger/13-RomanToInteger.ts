// Last updated: 4/8/2026, 2:09:12 AM
function romanToInt(s: string): number {
    return convertRomanToInt(s)
};

const convertRomanToInt = (s: string): number => {
    let sArr = s.split('')
    const romanDictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000       
    }
    
    let total = 0
    let current
    let currentVal
    let next
    let nextVal
    
    for (let i=0; i < sArr.length; i++){
        current = sArr[i]
        currentVal = romanDictionary[current]
        
        next = sArr[i+1]
        nextVal = romanDictionary[next]
        
        if (currentVal < nextVal) {
            console.log(total, currentVal)
            total = total - currentVal
            console.log('====== 1')
            console.log(total, currentVal)
        } else {
            console.log(total, currentVal)
            total = total + currentVal
            console.log('====== 2')
            console.log(total, currentVal)
        }
    }
    
    return total
   
 }