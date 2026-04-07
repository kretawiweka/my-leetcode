// Last updated: 4/8/2026, 2:07:47 AM
function productExceptSelf(nums: number[]): number[] {
    let zeroIndex = {}
    const resAllMultiply = nums.reduce((acc, curVal, curIdx) => {
        if (curVal !== 0) {
            return acc * curVal
        } else {
            zeroIndex[curIdx] = true
            return acc
        }
    }, 1)

    let zeroValueLength =  Object.keys(zeroIndex).length
    let res = []    

    for (let i = 0; i < nums.length; i++) {
        if (!!zeroValueLength) {
            if (zeroValueLength > 1) {
                res[i] = 0
            } else {
                if (!!zeroIndex[i]) {
                    res[i] = resAllMultiply
                } else {
                    res[i] = 0
                }
            }
        } else {
            res[i] = resAllMultiply/nums[i]
        }
    } 

    return res
};