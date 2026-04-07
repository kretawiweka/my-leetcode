// Last updated: 4/8/2026, 2:06:43 AM
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAliceSizes = sumOfArrVal(aliceSizes)
    let sumBobSizes = sumOfArrVal(bobSizes)    
    let res = []    
    for (let x = 0; x < aliceSizes.length; x++) {
        let tempSumAliceSizes = sumAliceSizes - aliceSizes[x]
        let tempSumBobSizes = sumBobSizes + aliceSizes[x]       
        let diff = (tempSumBobSizes - tempSumAliceSizes) / 2    
         if (bobSizes.includes(diff)) {
            return [aliceSizes[x], diff]            
        }
    }    
};

const sumOfArrVal = (arr) => {
    let sum=0;
    arr.map(val=>sum+=val)
    return sum
}

function isAny(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}
