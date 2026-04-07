// Last updated: 4/8/2026, 2:06:24 AM
function maximum69Number (num: number): number {
    return getMaxNumber(num)
};

const getMaxNumber = (num: number): number => {    
    let numArr = Array.from(String(num), Number)  
        
    for (let a = 0; a < numArr.length; a ++) {
        if (numArr[a] == 6) {
            numArr[a] = 9
            break
        }
    }
    
    let numStr = numArr.join('')
    return Number(numStr)
}