// Last updated: 4/8/2026, 2:09:02 AM
function removeElement(nums: number[], val: number): number {
    let counter = 0
    for (let c = 0; c < nums.length; c++) {
        if (nums[c] === val) {
            nums[c] = 0
        } else {
            counter += 1
        }
    }
    nums.sort((a, b) => b-a)
    return counter
};