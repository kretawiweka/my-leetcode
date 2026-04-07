// Last updated: 4/8/2026, 2:08:44 AM
const removeEl = (nums: number[], index: number): number[] => {
    for (let i = index+1; i < nums.length; i++) {
        nums[i-1] = nums[i]
    }
    return nums
}

function removeDuplicates(nums: number[]): number {
    let counter = 1
    let length = nums.length
    let i = 1


    while(i < length) {
        if (nums[i] === nums[i-1]) {
            counter++
            if (counter > 2) {
                removeEl(nums, i)
                i--
                length--
            } 
        } else {
            counter = 1
        }
        i++
    }

    console.log(nums)

    return length
};