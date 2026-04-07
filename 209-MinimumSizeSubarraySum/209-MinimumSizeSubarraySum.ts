// Last updated: 4/8/2026, 2:08:02 AM
function minSubArrayLen(target: number, nums: number[]): number {   
    let left = 0;
    let right = 0;
    let sumOfCurrentWindow = 0;
    let res = Number.MAX_VALUE;

    for (right = 0; right < nums.length; right++) {
        sumOfCurrentWindow += nums[right]

        while (sumOfCurrentWindow >= target) {
            res = Math.min(res, right - left + 1)
            sumOfCurrentWindow -= nums[left++] 
        }
    }
    
    return res === Number.MAX_VALUE ? 0 : res
};