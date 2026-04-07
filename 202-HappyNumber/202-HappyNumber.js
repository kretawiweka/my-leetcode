// Last updated: 4/8/2026, 2:08:08 AM
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n < 10) {
        if (isHappyNumberSingleDigit(n)) return true
        return false
    }

    let nNext = sumSquareTwoNumber(n)

    if (isHappyNumberSingleDigit(nNext)) return true

    while (nNext > 9) {
        let nRes = sumSquareTwoNumber(nNext)
        nNext = nRes
    }
    
    if (isHappyNumberSingleDigit(nNext)) return true
    return false
};

const sumSquareTwoNumber = (n) => {
    let arr = n.toString().split("")
    return arr.reduce((prev, val) => {
        return Number(prev) + (Number(val)*Number(val))
    }, 0)
}

const isHappyNumberSingleDigit = (n) => {
    return n === 1 || n === 7
}