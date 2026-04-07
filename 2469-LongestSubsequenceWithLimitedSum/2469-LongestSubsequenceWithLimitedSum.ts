// Last updated: 4/8/2026, 2:05:37 AM
function answerQueries(nums: number[], queries: number[]): number[] {
    let res = []
    let sortedNums = nums.sort((a, b) => a-b)
    queries.map((item) => {
        if(item < sortedNums[0]){
            res.push(0)
        } else {
            let counter = 0
            let sumCounter = 0
            sortedNums.map((iNums) => {
                sumCounter = sumCounter + iNums                                
                if (item >= sumCounter) {                    
                    counter++
                } else {                    
                    return
                }    
            })
            res.push(counter)
        }        
    })
    return res
};

const quickSort = (nums: number[]): number[] => {
    const pivot = nums[0]
    let left = []
    let right = []
    if (nums.length <= 1) return nums

    for (let c = 1; c < nums.length; c++) {
        if (nums[c] < nums[0]) {
            left.push(nums[c])
        } else {
            right.push(nums[c])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}