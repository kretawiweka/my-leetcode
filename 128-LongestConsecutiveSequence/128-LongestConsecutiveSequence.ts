// Last updated: 4/8/2026, 2:08:30 AM
function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0

    let consecutiveArr = []    
    const sortedNums = nums.sort((a, b) => a-b)
    let res = 1    

    sortedNums.forEach((item) => {
        if (!!consecutiveArr.length) {
            if (consecutiveArr[consecutiveArr.length - 1] === item - 1) {
                consecutiveArr.push(item)
            } else if (consecutiveArr[consecutiveArr.length - 1] !== item) {                
                if (res < consecutiveArr.length) {
                    res = consecutiveArr.length 
                }
                consecutiveArr = [item]
            }
        } else {
            consecutiveArr = [item]
        }                
    })

    if (res < consecutiveArr.length) {
        res = consecutiveArr.length 
    }

    return res
};