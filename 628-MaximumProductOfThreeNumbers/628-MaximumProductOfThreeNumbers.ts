// Last updated: 4/8/2026, 2:07:06 AM
function maximumProduct(nums: number[]): number {    
    const sortedNums = quickSort(nums)
    console.log("sortedNums", sortedNums)
    return Math.max(sortedNums[0] * sortedNums[1] * sortedNums[2], sortedNums[sortedNums.length-1] * sortedNums[sortedNums.length-2] * sortedNums[0])
};

const quickSort = (nums: number[]): number[] => {
    if (nums.length <= 1) {
        return nums
    }

    const pivot = nums[nums.length - 1];
    const left = []
    const right = []

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}