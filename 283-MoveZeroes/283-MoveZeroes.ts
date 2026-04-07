// Last updated: 4/8/2026, 2:07:41 AM
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let counter = 0
    const mutate: number[] = nums.filter((item) => {
        if (item === 0) counter += 1        
        return item !== 0
    })
    nums.splice(0, nums.length)
    nums.push(...mutate)

    for (let i = 0; i < counter; i++) {
        nums.push(0)
    }
};

