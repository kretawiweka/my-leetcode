// Last updated: 4/8/2026, 2:07:42 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = 0
    let sortedNums = nums.sort((a,b)=>a-b)
    let sumOfNums = sumOfArrVal(sortedNums)
    let sumOfMustNums = sum(sortedNums[0],sortedNums[sortedNums.length - 1])    
    res = sumOfMustNums - sumOfNums
    if (res === 0 && sortedNums.includes(0)) {
        return sortedNums[sortedNums.length-1] + 1
    }
    return res
};

const sumOfArrVal = (arr) => {
    let sum=0;
    arr.map(val => sum += val)
    return sum
}

const sum = (a, b) => {
    let counter = 0
    for (let x = a; x <= b; x++) {
        counter += x        
    }
    return counter
}

