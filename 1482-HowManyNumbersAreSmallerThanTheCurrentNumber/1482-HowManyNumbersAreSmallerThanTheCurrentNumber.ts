// Last updated: 4/8/2026, 2:06:26 AM
function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sortedNums: number[] = quickSort([...nums])
    return nums.map((item) => sortedNums.indexOf(item))
};

const quickSort = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;
    let left = []
    let right = []
    let pivot = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[0]) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }        
    return quickSort(left).concat(pivot, quickSort(right))
}
