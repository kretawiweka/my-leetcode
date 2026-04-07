// Last updated: 4/8/2026, 2:05:38 AM
function minimumSum(num: number): number {
    let numArr = Array.from(String(num), Number);
    numArr.sort((a, b) => a - b)
    let firstNumber = ''
    let secondNumber = ''
    
    numArr.map((item, index) => {
        if (index % 2 === 0) {
            if (firstNumber.length || item !== 0) {
                firstNumber = `${firstNumber}${item}`
            }
        } else {
              if (secondNumber.length || item !== 0) {
                secondNumber = `${secondNumber}${item}`
            }
        }
    })
    return Number(firstNumber) + Number(secondNumber)
};

const getMinimumSum = (num: number): number => {
    let numArr = Array.from(String(num), Number);
    numArr.sort((a, b) => a - b)
    let firstNumber = ''
    let secondNumber = ''
    
    numArr.map((item, index) => {
        if (index % 2 === 0) {
            if (firstNumber.length || item !== 0) {
                firstNumber = `${firstNumber}${item}`
            }
        } else {
              if (secondNumber.length || item !== 0) {
                secondNumber = `${secondNumber}${item}`
            }
        }
    })
    return Number(firstNumber) + Number(secondNumber)
}