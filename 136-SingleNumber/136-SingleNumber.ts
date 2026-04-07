// Last updated: 4/8/2026, 2:08:27 AM
function singleNumber(nums: number[]): number {
    let cached = []
    let single = []
    for (let i = 0; i < nums.length; i++) {
        let indexOnSingle = single.indexOf(nums[i])
        let indexOnCached = cached.indexOf(nums[i])
        if (indexOnSingle === -1 && indexOnCached === -1) {
            single = [...single, nums[i]]            
        }
        if (indexOnSingle !== -1 && indexOnCached !== -1) {
            single.splice(indexOnSingle, 1)
        }
        if (indexOnCached === -1) {
            cached = [...cached, nums[i]]
        }
    }

    return single[0]
};