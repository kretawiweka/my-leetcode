// Last updated: 4/8/2026, 2:08:51 AM
function canJump(nums: number[]): boolean {
    let goalIndex: number = nums.length - 1
    let counter: number = nums.length - 1

    return isCanJump(nums, goalIndex, counter)
};

const isCanJump = (nums: number[], goalIndex: number, counter: number): boolean => {    
    if (nums.length == 1) {
        return true
    }

    if (goalIndex !== 0 && counter < 0) {
        return false
    }
    if (goalIndex == 0 && counter < 0) {
        return true
    }

    if (goalIndex > 0 && counter >= 0) {        
        if (counter + nums[counter] >= goalIndex) {
            goalIndex = counter
        }
        counter = counter - 1
        return isCanJump(nums, goalIndex, counter)
    }
}