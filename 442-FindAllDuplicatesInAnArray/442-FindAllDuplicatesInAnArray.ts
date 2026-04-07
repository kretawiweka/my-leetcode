// Last updated: 4/8/2026, 2:07:20 AM
function findDuplicates(nums: number[]): number[] {
    let store = []
    let duplicate = []

    for (let i = 0; i < nums.length; i++) {
        if (store.includes(nums[i])) {
            if (!duplicate.includes(nums[i])) duplicate.push(nums[i])
        } else {
            store.push(nums[i])
        }
    }   

    return duplicate
};