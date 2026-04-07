// Last updated: 4/8/2026, 2:09:04 AM
function removeDuplicates(nums: number[]): number {
    let insertIndex = 1

    for (let c = 1; c < nums.length; c++) {
        if (nums[c-1] !== nums[c]) {
            nums[insertIndex] = nums[c]
            insertIndex++
        }
    }

    return insertIndex
};